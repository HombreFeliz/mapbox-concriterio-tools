"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MARKER_SVG } from "@/lib/mapbox";

interface MapMarkerProps {
  map: mapboxgl.Map | null;
  coordinates: [number, number] | null;
}

export function MapMarker({ map, coordinates }: MapMarkerProps) {
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    if (!map) return;

    // Remove previous marker
    if (markerRef.current) {
      markerRef.current.remove();
      markerRef.current = null;
    }

    if (!coordinates) return;

    const el = document.createElement("div");
    el.innerHTML = MARKER_SVG;
    el.style.width = "32px";
    el.style.height = "40px";
    el.style.cursor = "pointer";
    el.style.animation = "marker-appear 200ms ease-out";

    const marker = new mapboxgl.Marker({ element: el })
      .setLngLat(coordinates)
      .addTo(map);

    markerRef.current = marker;

    return () => {
      marker.remove();
    };
  }, [map, coordinates]);

  return null;
}
