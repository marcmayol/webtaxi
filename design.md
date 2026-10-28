# Design — Taxi 21 Cala Rajada

Sistema de diseño de la web. Cualquier página nueva o cambio visual parte de aquí; si algo no encaja, se amplía este archivo en vez de improvisar en la página. Los valores reales están en `src/styles/global.css` (`@theme` de Tailwind 4).

## Género y tono
Editorial cálido, «Mediterráneo»: arena, piedra, terracota y verde pino. Cercano y familiar (María y Xisco), nada de estética de plataforma de reservas.

Público: turistas que llegan al aeropuerto de Palma (muchos alemanes), hoteles y vecinos. Acción única: **llamar o escribir por WhatsApp**.

## Estructura por tipo de página
- **Portada:** titular grande a la izquierda con «Cala Rajada» en terracota, entradilla a la derecha; foto real del taxi a todo el ancho con la tarjeta del teléfono encima (en móvil, debajo); fila de datos (24 h, 7 plazas, tarifa oficial); servicios como «billetes»; bloque de María y Xisco.
- **Servicio:** bloque verde pino con el nombre del servicio y los botones; «Antes de reservar» y zonas en dos columnas; bloque arena para reservar; otros servicios como billetes.
- **Listado y Sobre nosotros:** texto con titulares Bricolage; mismas tarjetas y datos.

## Color (OKLCH)
| Token | Valor | Uso |
|---|---|---|
| `paper` | oklch(97% 0.012 75) | fondo |
| `paper-2` | oklch(93.5% 0.022 70) | tarjetas, pie, chips |
| `surface` | oklch(99% 0.006 75) | tarjeta del teléfono, menús |
| `ink` | oklch(25% 0.025 45) | texto |
| `muted` | oklch(44% 0.025 45) | texto secundario |
| `line` | oklch(87% 0.02 70) | bordes |
| `accent` / `call` | oklch(50% 0.13 38) | terracota: «Cala Rajada», botón Llamar, enlaces |
| `pine` | oklch(40% 0.07 150) | servicio destacado, iconos de datos, hero de servicio |
| `whatsapp` | oklch(48% 0.12 150) | solo el botón de WhatsApp |
| `focus` | oklch(45% 0.12 240) | anillo de foco |

El terracota no pasa de un 5 % de la pantalla: titular, botón de llamar y algún enlace.

## Tipografía
- Titulares: **Bricolage Grotesque** (variable, local con Fontsource), 700, tracking −0,025 a −0,035 em. Siempre en redonda, nunca cursiva.
- Texto: **Figtree** (variable, local), 400–700.
- Teléfonos con `tabular-nums`.

## Forma
- Radios: tarjetas 24–28 px, botones 16 px, chips y selector de idioma en píldora.
- Billetes de servicio: línea discontinua bajo el título. El primero (aeropuerto) va en pino y es más ancho (1,3fr).
- Sin bordes laterales de color, sin degradados, sin sombras salvo la tarjeta del teléfono sobre la foto.

## Botones
- **Llamar:** terracota, texto blanco, 48 px de alto.
- **WhatsApp:** verde, abre el chat con el servicio ya escrito en las páginas de servicio.
- En móvil siempre hay una barra fija abajo con los dos.

## Movimiento
Solo transiciones de color de 150 ms y la flecha de «Ver servicio» que se desplaza 4 px. Con `prefers-reduced-motion` no hay transiciones.

## Reglas de contenido
Solo datos reales: teléfono, 24 h, coche de 7 plazas, tarifa oficial del Ayuntamiento (sin cifras), las 5 zonas, parada en Plaça dels Pins. Nada de precios, reseñas inventadas ni métricas. Todo en castellano «Cala Rajada». Los textos en español pasan por `humanizar`.
