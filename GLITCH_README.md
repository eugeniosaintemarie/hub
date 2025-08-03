# Glitch Effect Implementation

Este proyecto ahora incluye el efecto glitch CSS del repositorio [eugeniosaintemarie/glitch](https://github.com/eugeniosaintemarie/glitch).

## Componentes Disponibles

### GlitchEffect
Componente que aplica el efecto glitch a cualquier elemento.

```tsx
import { GlitchEffect } from '@/components/ui/glitch-effect'

<GlitchEffect 
  trigger="hover" // 'hover' | 'click' | 'auto'
  duration={1500} // duración en milisegundos
  backgroundImage="/path/to/image.jpg" // opcional
  className="custom-class"
>
  <div>Contenido a aplicar efecto</div>
</GlitchEffect>
```

### GlitchText
Componente específico para aplicar efecto glitch solo al texto.

```tsx
import { GlitchText } from '@/components/ui/glitch-effect'

<GlitchText 
  trigger="hover"
  className="text-white font-bold"
>
  Texto con efecto glitch
</GlitchText>
```

## Propiedades

### GlitchEffect Props
- `children`: Contenido a envolver con el efecto
- `backgroundImage?`: URL de imagen de fondo para el efecto
- `trigger?`: Tipo de activación ('hover', 'click', 'auto')
- `duration?`: Duración de la animación en ms (default: 1500)
- `className?`: Clases CSS adicionales

### GlitchText Props
- `children`: Texto a aplicar el efecto
- `className?`: Clases CSS adicionales
- `trigger?`: Tipo de activación ('hover', 'click', 'auto')

## Variables CSS Personalizables

El efecto utiliza variables CSS que puedes personalizar:

```css
:root {
  --glitch-width: 100%;
  --glitch-height: 100%;
  --gap-horizontal: 10px;
  --gap-vertical: 5px;
  --time-anim: 1.5s;
  --delay-anim: 0.25s;
  --blend-color-2: #ff0000; /* Color rojo para el efecto */
  --blend-color-3: #00ff00; /* Color verde para el efecto */
  --blend-color-4: #0000ff; /* Color azul para el efecto */
  --blend-color-5: #af4949; /* Color de flash */
}
```

## Ejemplos de Uso

### Efecto en hover sobre tarjeta completa
```tsx
<GlitchEffect trigger="hover" className="card-container">
  <div className="card">
    <h2>Título</h2>
    <p>Contenido</p>
  </div>
</GlitchEffect>
```

### Efecto solo en texto
```tsx
<div className="card">
  <GlitchText trigger="hover" className="title">
    Título con Glitch
  </GlitchText>
  <p>Contenido normal</p>
</div>
```

### Efecto automático
```tsx
<GlitchEffect trigger="auto" duration={2000}>
  <div>Este elemento tendrá glitch automático</div>
</GlitchEffect>
```

## Implementación Actual

En el dashboard actual, se aplica:
- **GlitchEffect completo**: En la tarjeta "Amigos de mierda" (trigger: hover)
- **GlitchText**: En las tarjetas "Notes" y "Photos" (trigger: hover)

El efecto se activa al hacer hover sobre estos elementos y crea una distorsión visual similar a fallas de televisión vintage.
