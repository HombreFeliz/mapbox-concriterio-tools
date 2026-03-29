"use client";

import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { poisData } from "@/lib/geojson-data";
import type { Category } from "@/lib/constants";

const SOURCE_ID = "pois";
const CLUSTER_LAYER = "clusters";
const CLUSTER_COUNT_LAYER = "cluster-count";
const UNCLUSTERED_LAYER = "unclustered-point";

interface GeoJSONLayerProps {
  map: mapboxgl.Map | null;
  activeCategory: Category | null;
}

export function addGeoJSONLayers(map: mapboxgl.Map) {
  if (map.getSource(SOURCE_ID)) return;

  map.addSource(SOURCE_ID, {
    type: "geojson",
    data: poisData,
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
  });

  map.addLayer({
    id: CLUSTER_LAYER,
    type: "circle",
    source: SOURCE_ID,
    filter: ["has", "point_count"],
    paint: {
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#7665FF", // small
        10,
        "#5545dd", // medium
        25,
        "#4435cc", // large
      ],
      "circle-radius": [
        "step",
        ["get", "point_count"],
        18,
        10,
        24,
        25,
        32,
      ],
    },
  });

  map.addLayer({
    id: CLUSTER_COUNT_LAYER,
    type: "symbol",
    source: SOURCE_ID,
    filter: ["has", "point_count"],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-size": 13,
    },
    paint: {
      "text-color": "#ffffff",
    },
  });

  map.addLayer({
    id: UNCLUSTERED_LAYER,
    type: "circle",
    source: SOURCE_ID,
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": "#7665FF",
      "circle-radius": 7,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
    },
  });
}

export function GeoJSONLayer({ map, activeCategory }: GeoJSONLayerProps) {
  // Add layers on mount and when style changes
  useEffect(() => {
    if (!map) return;

    function onStyleLoad() {
      addGeoJSONLayers(map!);
    }

    if (map.isStyleLoaded()) {
      addGeoJSONLayers(map);
    }

    map.on("style.load", onStyleLoad);
    return () => {
      map.off("style.load", onStyleLoad);
    };
  }, [map]);

  // Apply category filter
  useEffect(() => {
    if (!map) return;

    function applyFilter() {
      if (!map!.getLayer(UNCLUSTERED_LAYER)) return;

      const filter: mapboxgl.FilterSpecification = activeCategory
        ? ["all", ["!", ["has", "point_count"]], ["==", ["get", "category"], activeCategory]]
        : ["!", ["has", "point_count"]];

      map!.setFilter(UNCLUSTERED_LAYER, filter);

      // Update source data for clusters to reflect filter
      const source = map!.getSource(SOURCE_ID) as mapboxgl.GeoJSONSource | undefined;
      if (source) {
        if (activeCategory) {
          const filtered = {
            ...poisData,
            features: poisData.features.filter(
              (f) => f.properties.category === activeCategory
            ),
          };
          source.setData(filtered);
        } else {
          source.setData(poisData);
        }
      }
    }

    applyFilter();
    map.on("style.load", applyFilter);
    return () => {
      map.off("style.load", applyFilter);
    };
  }, [map, activeCategory]);

  // Click handlers
  useEffect(() => {
    if (!map) return;

    function onClusterClick(e: mapboxgl.MapMouseEvent) {
      const features = map!.queryRenderedFeatures(e.point, {
        layers: [CLUSTER_LAYER],
      });
      if (!features.length) return;

      const clusterId = features[0].properties?.cluster_id;
      const source = map!.getSource(SOURCE_ID) as mapboxgl.GeoJSONSource;

      source.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err || zoom === null || zoom === undefined) return;
        const geometry = features[0].geometry;
        if (geometry.type !== "Point") return;

        map!.flyTo({
          center: geometry.coordinates as [number, number],
          zoom,
          duration: 300,
        });
      });
    }

    function onPointClick(e: mapboxgl.MapMouseEvent) {
      const features = map!.queryRenderedFeatures(e.point, {
        layers: [UNCLUSTERED_LAYER],
      });
      if (!features.length) return;

      const props = features[0].properties;
      const geometry = features[0].geometry;
      if (!props || geometry.type !== "Point") return;

      new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true,
        offset: 10,
        className: "custom-popup",
      })
        .setLngLat(geometry.coordinates as [number, number])
        .setHTML(
          `<div>
            <p style="font-weight:600;margin:0 0 4px">${props.name}</p>
            <p style="font-size:11px;color:#7665FF;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 4px">${props.category}</p>
            <p style="font-size:13px;color:#999;margin:0">${props.description}</p>
          </div>`
        )
        .addTo(map!);
    }

    function setCursorPointer() {
      map!.getCanvas().style.cursor = "pointer";
    }
    function resetCursor() {
      map!.getCanvas().style.cursor = "";
    }

    map.on("click", CLUSTER_LAYER, onClusterClick);
    map.on("click", UNCLUSTERED_LAYER, onPointClick);
    map.on("mouseenter", CLUSTER_LAYER, setCursorPointer);
    map.on("mouseleave", CLUSTER_LAYER, resetCursor);
    map.on("mouseenter", UNCLUSTERED_LAYER, setCursorPointer);
    map.on("mouseleave", UNCLUSTERED_LAYER, resetCursor);

    return () => {
      map.off("click", CLUSTER_LAYER, onClusterClick);
      map.off("click", UNCLUSTERED_LAYER, onPointClick);
      map.off("mouseenter", CLUSTER_LAYER, setCursorPointer);
      map.off("mouseleave", CLUSTER_LAYER, resetCursor);
      map.off("mouseenter", UNCLUSTERED_LAYER, setCursorPointer);
      map.off("mouseleave", UNCLUSTERED_LAYER, resetCursor);
    };
  }, [map]);

  return null;
}
