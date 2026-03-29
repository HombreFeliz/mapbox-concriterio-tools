# PRD — Mapbox GL JS · Con Criterio Tools

## Qué es Mapbox GL JS

Mapbox GL JS es una librería JavaScript para renderizar mapas vectoriales interactivos en el navegador usando WebGL. A diferencia de Google Maps, donde el mapa es una cuadrícula de imágenes rasterizadas, Mapbox renderiza vectores en el cliente, lo que permite rotación 3D, estilos dinámicos en tiempo real y rendimiento consistente independientemente del nivel de zoom.

El SDK es parte del ecosistema Mapbox, que incluye APIs de geocoding (convertir direcciones en coordenadas y viceversa), rutas, búsqueda y datos de tráfico. El tier gratuito ofrece 50.000 map loads mensuales en web, 100.000 requests de Directions API y 100.000 requests de geocoding temporal — suficiente para cualquier proyecto en fase de validación o con tráfico moderado.

## Para qué tipo de proyecto sirve

Cualquier aplicación web que necesite mapas con un nivel de personalización visual que Google Maps no permite: dashboards con datos geográficos, store locators con marca propia, visualizaciones de datos sobre mapas, apps de logística o delivery, o cualquier producto donde el mapa sea parte central de la experiencia y no solo un widget decorativo.

## Scope de esta demo

### Qué hace

Tres flujos interactivos que cubren las capacidades más útiles de Mapbox GL JS para un builder:

**Flujo 1 — Explorador de estilos**
El usuario ve un mapa centrado en una ciudad por defecto. Puede seleccionar entre 5 estilos predefinidos de Mapbox (streets, satellite, dark, light, outdoors). Al cambiar, el mapa transiciona al nuevo estilo manteniendo la posición y zoom actuales. Esto demuestra la capacidad de theming dinámico que diferencia a Mapbox de Google Maps.

**Flujo 2 — Geocoding bidireccional**
El usuario escribe una dirección o nombre de lugar en un input de búsqueda. El mapa vuela (flyTo) a esa ubicación y coloca un marcador. Alternativamente, el usuario hace clic en cualquier punto del mapa y obtiene la dirección correspondiente (geocoding inverso) mostrada en un panel lateral o tooltip. Las llamadas de geocoding pasan por una API route de Next.js para no exponer el token.

**Flujo 3 — Capa de datos con clustering**
El usuario activa una capa de datos GeoJSON de ejemplo (puntos de interés de Barcelona: restaurantes, museos, parques). Los puntos se agrupan en clusters que se expanden al hacer zoom. Al hacer clic en un punto individual, se muestra un popup con nombre y categoría. Un filtro permite mostrar solo una categoría a la vez. Esto demuestra la capacidad de Mapbox para manejar datos propios sobre el mapa.

### Qué NO hace

- No incluye navegación ni rutas (Directions API)
- No incluye búsqueda con autocompletado (solo geocoding simple)
- No guarda datos del usuario entre sesiones
- No incluye mapas 3D con terreno o edificios extruidos
- No incluye isochrones ni matrices de distancia

## Componentes fijos

Presentes en todas las páginas de la demo:

1. **Banner consultoría:** "¿Necesitas ayuda integrando esto en tu proyecto?" → https://cal.com/polmarza/toma-de-contacto (90€/sesión)
2. **Banner newsletter:** "Cada semana, herramientas como esta en tu bandeja de entrada." → https://concriterio.blog
3. **Banner repositorio:** "Esta demo está construida con Next.js + Mapbox GL JS. El código es público." → https://github.com/polmarza/mapbox-concriterio-tools
4. **Sección de stack:** tecnologías usadas con justificación breve al final de la página
