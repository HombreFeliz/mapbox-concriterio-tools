export const DEFAULT_CENTER: [number, number] = [2.1734, 41.3851]; // Barcelona
export const DEFAULT_ZOOM = 13;

export const MAP_STYLES = [
  { id: "dark", label: "Dark", url: "mapbox://styles/mapbox/dark-v11" },
  { id: "streets", label: "Streets", url: "mapbox://styles/mapbox/streets-v12" },
  { id: "satellite", label: "Satellite", url: "mapbox://styles/mapbox/satellite-streets-v12" },
  { id: "light", label: "Light", url: "mapbox://styles/mapbox/light-v11" },
  { id: "outdoors", label: "Outdoors", url: "mapbox://styles/mapbox/outdoors-v12" },
] as const;

export const DEFAULT_STYLE: MapStyleId = "dark";

export type MapStyleId = (typeof MAP_STYLES)[number]["id"];

export const CATEGORIES = ["restaurante", "museo", "parque"] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  restaurante: "Restaurantes",
  museo: "Museos",
  parque: "Parques",
};

export const CLUSTER_COLORS = {
  small: "#4264FB",
  medium: "#3355e6",
  large: "#2845cc",
} as const;
