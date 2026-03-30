# Design System — Mapbox GL JS · Con Criterio Tools

## Paleta de colores (estilo Mapbox)

```
Primary:        #4264FB   (azul Mapbox — acentos, CTAs, enlaces activos)
Background:     #0a1628   (navy oscuro, fondo principal)
Surface:        #101d33   (cards, paneles, sidebar)
Surface hover:  #162744   (hover en elementos de superficie)
Border:         #1c3055   (bordes sutiles)
Border active:  #2d4a7a   (bordes en estado activo/focus)
Text primary:   #e6edf7   (texto principal)
Text muted:     #7b93b8   (texto secundario, labels)
Success:        #4ade80   (estados correctos, marcador activo)
Error:          #f87171   (errores, estados inválidos)
```

### Colores específicos para esta demo

```
Map accent:     #4264FB   (marcadores, highlights sobre el mapa)
Cluster bg:     #4264FB   (fondo de clusters)
Cluster text:   #ffffff   (texto dentro de clusters)
Category chip:  #1c3055   (fondo de filtros inactivos)
Category active:#4264FB   (fondo de filtro activo)
```

## Tipografía

```
Display:  DM Sans (700)               → Headings, título de la demo
Body:     DM Sans (400, 500, 600)     → Texto general, labels, descripciones
Mono:     JetBrains Mono (400)        → Código, coordenadas, valores técnicos
```

### Escalas

```
Heading 1:    DM Sans 36px / 1.1 line-height / weight 700
Heading 2:    DM Sans 24px / 1.2 / weight 700
Heading 3:    DM Sans 18px / 1.3 / weight 600
Body:         DM Sans 15px / 1.6 / weight 400
Body small:   DM Sans 13px / 1.5 / weight 400
Label:        DM Sans 12px / 1.4 / weight 500 / uppercase / letter-spacing 0.05em
Mono:         JetBrains Mono 13px / 1.5 / weight 400
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
Background:     #101d33
Border:         1px solid #1c3055
Border radius:  12px
Padding:        16px (compact) / 24px (standard)
```

### Botones

```
Primary:        bg #4264FB / text white / hover #3355e6 / radius 8px
Secondary:      bg transparent / border #1c3055 / text #e6edf7 / hover bg #162744
Ghost:          bg transparent / text #7b93b8 / hover text #e6edf7
```

### Inputs

```
Background:     #101d33
Border:         1px solid #1c3055
Focus border:   #4264FB
Text:           #e6edf7
Placeholder:    #7b93b8
Radius:         8px
Height:         40px
```

### Category chips (filtros)

```
Inactivo:       bg #1c3055 / text #e6edf7 / radius 20px / padding 6px 14px
Activo:         bg #4264FB / text white
```

### Popups del mapa

```
Background:     #101d33
Border:         1px solid #1c3055
Radius:         8px
Shadow:         0 4px 16px rgba(0,0,0,0.4)
Text:           DM Sans 14px
Punta:          Desactivada (usar offset en su lugar)
```

### Banners (los 3 fijos)

```
Background:     #101d33
Border:         1px solid #1c3055
Radius:         12px
Layout:         Texto a la izquierda + CTA a la derecha
CTA button:     Primary style
Spacing:        24px padding, 16px gap entre banners
```

## Mapa — Estilos específicos

### Marcador custom

- Usar SVG propio con color `#4264FB`
- Tamaño: 32x40px
- Animación sutil al aparecer (scale de 0.5 a 1, 200ms ease-out)

### Controles nativos de Mapbox

- Navigation control (zoom +/-): posición top-right
- Estilo de los controles: heredar dark theme (Mapbox soporta esto con CSS custom)

### Clusters

- Círculos con tamaño proporcional al count
- Colores: `#4264FB` (pequeño) → `#3355e6` (mediano) → `#2845cc` (grande)
- Texto: blanco, DM Sans 13px bold
- Transición al expandir: 300ms ease

## Responsive

```
Desktop (>1024px):  Sidebar 360px + mapa flex-1
Tablet (768-1024):  Sidebar 300px + mapa flex-1
Mobile (<768px):    Mapa fullscreen + drawer colapsable desde abajo (40% height)
                    Drag handle visible para expandir/colapsar
```

## Dark mode

Es el único modo. No hay toggle de light mode. Todo el design system está pensado para dark con tonos navy al estilo Mapbox.
