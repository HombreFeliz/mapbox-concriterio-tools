"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_PUBLIC_TOKEN } from "@/lib/mapbox";
import { DEFAULT_CENTER, DEFAULT_ZOOM, MAP_STYLES, type MapStyleId } from "@/lib/constants";
import type { Category } from "@/lib/constants";
import type { GeocodingResult } from "@/lib/mapbox";
import { MapMarker } from "./MapMarker";
import { GeoJSONLayer, addGeoJSONLayers } from "./GeoJSONLayer";
import { SearchInput } from "@/components/controls/SearchInput";
import { StyleSelector } from "@/components/controls/StyleSelector";
import { CategoryFilter } from "@/components/controls/CategoryFilter";
import { LocationInfo } from "@/components/controls/LocationInfo";

export function MapboxMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [styleId, setStyleId] = useState<MapStyleId>("streets");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [markerCoords, setMarkerCoords] = useState<[number, number] | null>(null);
  const [locationInfo, setLocationInfo] = useState<GeocodingResult | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapboxgl.accessToken = MAPBOX_PUBLIC_TOKEN;

    const m = new mapboxgl.Map({
      container: containerRef.current,
      style: MAP_STYLES[0].url,
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    });

    m.addControl(new mapboxgl.NavigationControl(), "top-right");

    m.on("load", () => {
      addGeoJSONLayers(m);
      setMap(m);
    });

    mapRef.current = m;

    return () => {
      m.remove();
      mapRef.current = null;
    };
  }, []);

  // Handle style change
  const handleStyleChange = useCallback(
    (newStyleId: MapStyleId) => {
      if (!map) return;
      const style = MAP_STYLES.find((s) => s.id === newStyleId);
      if (!style) return;

      setStyleId(newStyleId);
      map.setStyle(style.url);
    },
    [map]
  );

  // Handle forward geocoding result
  const handleGeocodingResult = useCallback(
    (result: GeocodingResult) => {
      if (!map) return;
      setMarkerCoords(result.coordinates);
      setLocationInfo(result);
      map.flyTo({ center: result.coordinates, zoom: 15, duration: 1500 });
    },
    [map]
  );

  // Handle reverse geocoding on map click
  useEffect(() => {
    if (!map) return;

    async function handleMapClick(e: mapboxgl.MapMouseEvent) {
      // Don't trigger reverse geocoding if clicking on a POI layer
      const features = map!.queryRenderedFeatures(e.point, {
        layers: ["clusters", "unclustered-point"],
      });
      if (features.length > 0) return;

      const coords: [number, number] = [e.lngLat.lng, e.lngLat.lat];
      setMarkerCoords(coords);

      try {
        const res = await fetch(
          `/api/geocode?lat=${coords[1]}&lng=${coords[0]}`
        );
        if (!res.ok) return;
        const data = await res.json();
        setLocationInfo({ place_name: data.place_name, coordinates: coords });
      } catch {
        // silently fail
      }
    }

    map.on("click", handleMapClick);
    return () => {
      map.off("click", handleMapClick);
    };
  }, [map]);

  return (
    <div className="flex flex-1 flex-col lg:flex-row h-[calc(100vh-49px)] overflow-hidden relative">
      {/* Sidebar — desktop/tablet */}
      <aside className="hidden md:flex flex-col gap-4 border-r border-border bg-surface p-4 w-[300px] lg:w-[360px] overflow-y-auto">
        <SidebarContent
          styleId={styleId}
          onStyleChange={handleStyleChange}
          onGeocodingResult={handleGeocodingResult}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          locationInfo={locationInfo}
        />
      </aside>

      {/* Map */}
      <div ref={containerRef} className="flex-1 min-h-0" />

      {/* Mobile drawer */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-10">
        {/* Handle */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="w-full flex justify-center py-2 bg-surface border-t border-border rounded-t-xl cursor-pointer"
        >
          <div className="w-10 h-1 rounded-full bg-border-active" />
        </button>
        {drawerOpen && (
          <div className="bg-surface border-t border-border p-4 space-y-4 max-h-[40vh] overflow-y-auto">
            <SidebarContent
              styleId={styleId}
              onStyleChange={handleStyleChange}
              onGeocodingResult={handleGeocodingResult}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              locationInfo={locationInfo}
            />
          </div>
        )}
      </div>

      {/* Map components (renderless) */}
      <MapMarker map={map} coordinates={markerCoords} />
      <GeoJSONLayer map={map} activeCategory={activeCategory} />
    </div>
  );
}

interface SidebarContentProps {
  styleId: MapStyleId;
  onStyleChange: (id: MapStyleId) => void;
  onGeocodingResult: (result: GeocodingResult) => void;
  activeCategory: Category | null;
  onCategoryChange: (cat: Category | null) => void;
  locationInfo: GeocodingResult | null;
}

function SidebarContent({
  styleId,
  onStyleChange,
  onGeocodingResult,
  activeCategory,
  onCategoryChange,
  locationInfo,
}: SidebarContentProps) {
  return (
    <>
      <div>
        <label className="text-[11px] font-medium uppercase tracking-wider text-text-muted mb-1.5 block">
          Buscar dirección
        </label>
        <SearchInput onResult={onGeocodingResult} />
      </div>
      <div>
        <label className="text-[11px] font-medium uppercase tracking-wider text-text-muted mb-1.5 block">
          Estilo del mapa
        </label>
        <StyleSelector value={styleId} onChange={onStyleChange} />
      </div>
      <div>
        <label className="text-[11px] font-medium uppercase tracking-wider text-text-muted mb-1.5 block">
          Puntos de interés
        </label>
        <CategoryFilter active={activeCategory} onChange={onCategoryChange} />
      </div>
      {locationInfo && (
        <LocationInfo
          placeName={locationInfo.place_name}
          coordinates={locationInfo.coordinates}
        />
      )}
    </>
  );
}
