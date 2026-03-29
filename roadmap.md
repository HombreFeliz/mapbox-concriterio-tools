# Roadmap — Mapbox GL JS · Con Criterio Tools

## v1 — Demo (scope actual)

Lo que Claude Code debe construir ahora:

- Mapa interactivo a pantalla completa con sidebar de controles
- Cambio de estilo en tiempo real (5 estilos predefinidos de Mapbox)
- Geocoding forward: input de búsqueda → flyTo + marcador
- Geocoding inverso: clic en mapa → dirección en panel lateral
- Capa GeoJSON con datos de ejemplo de Barcelona (restaurantes, museos, parques)
- Clustering con expansión al zoom
- Filtrado por categoría con chips
- Popups con info del punto al hacer clic
- API route para proxy de geocoding (token protegido en servidor)
- Banners fijos: consultoría, newsletter, repositorio
- Sección de stack al final
- Responsive: sidebar en desktop, drawer en mobile
- Deploy en Vercel como mapbox.concriterio.tools

## v2 — Mejoras posibles

Solo si la demo tiene tracción o feedback que lo justifique:

- Dibujar polígonos o líneas sobre el mapa (Mapbox Draw)
- Heatmap con datos de densidad
- Comparativa side-by-side de dos estilos de mapa
- Ejemplo de terrain 3D con elevación
- Exportar vista del mapa como imagen estática (Static Images API)
