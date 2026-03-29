"use client";

import { MAP_STYLES, type MapStyleId } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StyleSelectorProps {
  value: MapStyleId;
  onChange: (style: MapStyleId) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as MapStyleId)}>
      <SelectTrigger>
        <SelectValue placeholder="Seleccionar estilo" />
      </SelectTrigger>
      <SelectContent>
        {MAP_STYLES.map((style) => (
          <SelectItem key={style.id} value={style.id}>
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
