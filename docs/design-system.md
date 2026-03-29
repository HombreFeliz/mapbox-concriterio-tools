# Design System — Mapbox GL JS · Con Criterio Tools

## Paleta de colores

```
Primary:        #7665FF   (violeta Con Criterio — acentos, CTAs, enlaces activos)
Background:     #0a0a0a   (fondo principal)
Surface:        #111111   (cards, paneles, sidebar)
Surface hover:  #1a1a1a   (hover en elementos de superficie)
Border:         #1e1e1e   (bordes sutiles)
Border active:  #333333   (bordes en estado activo/focus)
Text primary:   #e2e2e2   (texto principal)
Text muted:     #666666   (texto secundario, labels)
Success:        #4ade80   (estados correctos, marcador activo)
Error:          #f87171   (errores, estados inválidos)
```

### Colores específicos para esta demo

```
Map accent:     #7665FF   (marcadores, highlights sobre el mapa)
Cluster bg:     #7665FF   (fondo de clusters)
Cluster text:   #ffffff   (texto dentro de clusters)
Category chip:  #1e1e1e   (fondo de filtros inactivos)
Category active:#7665FF   (fondo de filtro activo)
```

## Tipografía

```
Display:  Fraunces (variable, opsz)   → Headings, título de la demo
Body:     Outfit (400, 500, 600)      → Texto general, labels, descripciones
Mono:     Space Mono (400)            → Código, coordenadas, valores técnicos
```

### Escalas

```
Heading 1:    Fraunces 36px / 1.1 line-height / weight 600
Heading 2:    Fraunces 24px / 1.2 / weight 600
Heading 3:    Outfit 18px / 1.3 / weight 600
Body:         Outfit 15px / 1.6 / weight 400
Body small:   Outfit 13px / 1.5 / weight 400
Label:        Outfit 12px / 1.4 / weight 500 / uppercase / letter-spacing 0.05em
Mono:         Space Mono 13px / 1.5 / weight 400
```

## Componentes

### Layout

- **Estructura:** Sidebar izquierdo (controles) + mapa ocupando el resto del viewport
- **Sidebar width:** 360px en desktop, drawer desde abajo en mobile
- **Header:** Minimal. Logo Con Criterio + nombre de herramienta + enlace al repo
- **El mapa siempre ocupa toda la altura del viewport** (no scroll en la zona del mapa)
- Los banners y sección de stack van debajo del fold, accesibles con scroll

### Cards y paneles

```
Background:     #111111
Border:         1px solid #1e1e1e
Border radius:  12px
Padding:        16px (compact) / 24px (standard)
```

### Botones

```
Primary:        bg #7665FF / text white / hover #6555ee / radius 8px
Secondary:      bg transparent / border #1e1e1e / text #e2e2e2 / hover bg #1a1a1a
Ghost:          bg transparent / text #666666 / hover text #e2e2e2
```

### Inputs

```
Background:     #111111
Border:         1px solid #1e1e1e
Focus border:   #7665FF
Text:           #e2e2e2
Placeholder:    #666666
Radius:         8px
Height:         40px
```

### Category chips (filtros)

```
Inactivo:       bg #1e1e1e / text #e2e2e2 / radius 20px / padding 6px 14px
Activo:         bg #7665FF / text white
```

### Popups del mapa

```
Background:     #111111
Border:         1px solid #1e1e1e
Radius:         8px
Shadow:         0 4px 12px rgba(0,0,0,0.5)
Text:           Outfit 14px
Punta:          Desactivada (usar offset en su lugar)
```

### Banners (los 3 fijos)

```
Background:     #111111
Border:         1px solid #1e1e1e
Radius:         12px
Layout:         Texto a la izquierda + CTA a la derecha
CTA button:     Primary style
Spacing:        24px padding, 16px gap entre banners
```

## Mapa — Estilos específicos

### Marcador custom

- Usar SVG propio con color `#7665FF`
- Tamaño: 32x40px
- Animación sutil al aparecer (scale de 0.5 a 1, 200ms ease-out)

### Controles nativos de Mapbox

- Navigation control (zoom +/-): posición top-right
- Estilo de los controles: heredar dark theme (Mapbox soporta esto con CSS custom)

### Clusters

- Círculos con tamaño proporcional al count
- Colores: `#7665FF` (pequeño) → `#5545dd` (mediano) → `#4435cc` (grande)
- Texto: blanco, Outfit 13px bold
- Transición al expandir: 300ms ease

## Responsive

```
Desktop (>1024px):  Sidebar 360px + mapa flex-1
Tablet (768-1024):  Sidebar 300px + mapa flex-1
Mobile (<768px):    Mapa fullscreen + drawer colapsable desde abajo (40% height)
                    Drag handle visible para expandir/colapsar
```

## Dark mode

Es el único modo. No hay toggle de light mode. Todo el design system está pensado para dark.
