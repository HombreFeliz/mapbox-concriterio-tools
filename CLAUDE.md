# Mapbox GL JS — Instrucciones para Claude Code

## Qué es esto

Demo interactiva de Mapbox GL JS para concriterio.tools. El usuario puede explorar estilos de mapa, buscar direcciones con geocoding y visualizar datos GeoJSON con clusters.

Lee docs/prd.md antes de empezar.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS
- shadcn/ui
- mapbox-gl (SDK oficial v3)
- TypeScript

## Lo que debes construir

### Página principal: mapa + sidebar de controles

Layout: sidebar izquierdo (360px desktop) con controles + mapa ocupando el resto del viewport. El mapa siempre ocupa toda la altura visible. No hay scroll en la zona del mapa.

### Flujo 1 — Explorador de estilos

- Dropdown (shadcn Select) en la sidebar con 5 estilos:
  - Streets: `mapbox://styles/mapbox/streets-v12`
  - Satellite: `mapbox://styles/mapbox/satellite-streets-v12`
  - Dark: `mapbox://styles/mapbox/dark-v11`
  - Light: `mapbox://styles/mapbox/light-v11`
  - Outdoors: `mapbox://styles/mapbox/outdoors-v12`
- Al cambiar, usar `map.setStyle()`. Mantener posición y zoom actuales.
- Restaurar capas GeoJSON después del cambio de estilo (el evento `style.load`).

### Flujo 2 — Geocoding bidireccional

- Input de búsqueda (shadcn Input) en la sidebar.
- Al hacer submit, llamar a `/api/geocode?q={query}` (forward geocoding).
- La API route llama a `https://api.mapbox.com/geocoding/v5/mapbox.places/{query}.json` con el token de servidor.
- Con el resultado, hacer `map.flyTo()` a las coordenadas y colocar un marcador custom SVG color `#7665FF`.
- Al hacer clic en el mapa, llamar a `/api/geocode?lng={lng}&lat={lat}` (reverse geocoding).
- Mostrar la dirección resultante en un panel `LocationInfo` en la sidebar.

### Flujo 3 — Capa GeoJSON con clustering

- Datos hardcodeados en `lib/geojson-data.ts`: ~30 puntos de interés de Barcelona con propiedades `name`, `category` (restaurante, museo, parque), `description`.
- Usar source de tipo GeoJSON con `cluster: true`, `clusterMaxZoom: 14`, `clusterRadius: 50`.
- Tres capas: clusters (circles), cluster-count (symbol), unclustered-point (circle).
- Colores de clusters proporcionales al count (ver design-system.md).
- Al hacer clic en un cluster: `map.getSource('pois').getClusterExpansionZoom()` + flyTo.
- Al hacer clic en un punto: mostrar popup con nombre, categoría y descripción.
- Filtros por categoría con chips en la sidebar. Al activar uno, aplicar filtro con `map.setFilter()`.

### API Route: /api/geocode/route.ts

```typescript
// GET /api/geocode?q=barcelona          → forward geocoding
// GET /api/geocode?lat=41.38&lng=2.17   → reverse geocoding

// Forward: fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(q)}.json?access_token=${token}&limit=1`)
// Reverse: fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}&limit=1&types=address,poi`)

// Devolver solo: { place_name, coordinates: [lng, lat] }
```

### Responsive

- Desktop (>1024px): sidebar 360px + mapa flex-1
- Tablet (768-1024px): sidebar 300px + mapa flex-1
- Mobile (<768px): mapa fullscreen + drawer desde abajo colapsable (handle visible para drag)

## Componentes fijos (obligatorios)

- **Banner consultoría:** "¿Necesitas ayuda integrando esto en tu proyecto?" → https://cal.com/polmarza/toma-de-contacto (90€/sesión)
- **Banner newsletter:** "Cada semana, herramientas como esta en tu bandeja de entrada." → https://concriterio.blog
- **Banner repositorio:** "Esta demo está construida con Next.js + Mapbox GL JS. El código es público." → https://github.com/polmarza/mapbox-concriterio-tools
- **Sección de stack:** al final de la página, debajo del fold

Los banners van en una zona debajo del mapa, accesible con scroll. No superpuestos al mapa.

## Sistema de diseño

Lee docs/design-system.md. Resumen rápido:

- Primary: `#7665FF`
- Background: `#0a0a0a`
- Surface: `#111111`
- Border: `#1e1e1e`
- Text: `#e2e2e2`
- Text muted: `#666666`
- Fuentes: Fraunces (headings), Outfit (body), Space Mono (código/coords)
- Dark mode único, sin toggle
- Border radius: 8-12px
- Sin sombras pesadas

## Variables de entorno

Todas definidas en `.env.example`. Nunca hardcodear valores.

- `MAPBOX_ACCESS_TOKEN` → usado en API routes (servidor)
- `NEXT_PUBLIC_MAPBOX_TOKEN` → usado en el cliente para inicializar el mapa

Ambos pueden ser el mismo token si se configuran URL restrictions en el dashboard de Mapbox. Pero la separación permite usar tokens con scopes distintos.

## Convenciones

- TypeScript siempre, sin `any`
- Componentes pequeños y con responsabilidad única
- El mapa se inicializa una sola vez en un componente wrapper con `useRef` + `useEffect`
- No usar `react-map-gl` ni wrappers de terceros. Usar `mapbox-gl` directamente.
- Cleanup del mapa en el return del useEffect (`map.remove()`)
- Sin librerías innecesarias — instalar solo lo que se usa
- El código debe ser legible: esta demo es también material educativo

## NO hacer

- No añadir autenticación de usuarios
- No añadir features no descritas en este archivo ni en docs/prd.md
- No usar `react-map-gl`. Usar el SDK de `mapbox-gl` directamente con refs
- No usar estilos inline salvo casos puntuales justificados
- No exponer `MAPBOX_ACCESS_TOKEN` en el cliente (solo `NEXT_PUBLIC_MAPBOX_TOKEN`)
- No añadir routing entre páginas. Es una single page con todo el contenido
- No instalar dependencias de mapas adicionales (Leaflet, deck.gl, etc.)
