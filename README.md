# Mapbox GL JS — Con Criterio Tools

Demo interactiva de Mapbox GL JS como parte de concriterio.tools.

## Qué hace esta demo

1. **Explorador de estilos** — El usuario puede cambiar entre estilos de mapa (streets, satellite, dark, light, outdoors) y ver el cambio en tiempo real sobre la misma vista.
2. **Marcadores y geocoding** — El usuario escribe una dirección o lugar, el mapa vuela a esa ubicación y coloca un marcador. También puede hacer clic en el mapa para obtener la dirección de ese punto (geocoding inverso).
3. **Capa de datos GeoJSON** — El usuario puede activar una capa de datos de ejemplo (puntos de interés de una ciudad) con clustering, popups y filtrado por categoría.

## Stack

- **Next.js 16** — API routes para proteger la API key de Mapbox en servidor
- **Tailwind CSS** — Utilidades de estilo
- **shadcn/ui** — Componentes de interfaz (botones, selects, inputs, cards)
- **mapbox-gl** — SDK oficial de Mapbox GL JS v3
- **TypeScript** — Tipado estricto en todo el proyecto

## Variables de entorno

Ver `.env.example`

## Desarrollo local

```bash
npm install
cp .env.example .env.local
# Añadir tu MAPBOX_ACCESS_TOKEN en .env.local
npm run dev
```

## Deploy

Configurado para Vercel. Importar repo, añadir variables de entorno del .env.example, deploy automático.

## Parte de

[concriterio.tools](https://concriterio.tools) — herramientas para builders por [Pol Marza](https://concriterio.blog)
