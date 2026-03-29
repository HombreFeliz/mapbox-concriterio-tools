export const DEFAULT_CENTER: [number, number] = [2.1734, 41.3851]; // Barcelona
export const DEFAULT_ZOOM = 13;

export const MAP_STYLES = [
  { id: "streets", label: "Streets", url: "mapbox://styles/mapbox/streets-v12" },
  { id: "satellite", label: "Satellite", url: "mapbox://styles/mapbox/satellite-streets-v12" },
  { id: "dark", label: "Dark", url: "mapbox://styles/mapbox/dark-v11" },
  { id: "light", label: "Light", url: "mapbox://styles/mapbox/light-v11" },
  { id: "outdoors", label: "Outdoors", url: "mapbox://styles/mapbox/outdoors-v12" },
] as const;

export type MapStyleId = (typeof MAP_STYLES)[number]["id"];

export const CATEGORIES = ["restaurante", "museo", "parque"] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  restaurante: "Restaurantes",
  museo: "Museos",
  parque: "Parques",
};

export const CLUSTER_COLORS = {
  small: "#7665FF",
  medium: "#5545dd",
  large: "#4435cc",
} as const;
