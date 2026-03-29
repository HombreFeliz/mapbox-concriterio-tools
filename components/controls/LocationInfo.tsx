"use client";

import { MapPin } from "lucide-react";

interface LocationInfoProps {
  placeName: string | null;
  coordinates: [number, number] | null;
}

export function LocationInfo({ placeName, coordinates }: LocationInfoProps) {
  if (!placeName || !coordinates) return null;

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="flex items-start gap-2">
        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
        <div className="min-w-0">
          <p className="text-sm text-text-primary leading-snug">{placeName}</p>
          <p className="mt-1 font-mono text-xs text-text-muted">
            {coordinates[1].toFixed(5)}, {coordinates[0].toFixed(5)}
          </p>
        </div>
      </div>
    </div>
  );
}
