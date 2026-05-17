import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Variantes visuales del Card.
 * - default: fondo blanco con sombra (el más común)
 * - outline: solo borde, sin sombra (para UI densa)
 * - ghost: sin borde ni sombra (agrupación sutil)
 */

type CardVariant = 'default' | 'outline' | 'ghost';

/**
 * Control del padding interno.
 * Hay contextos donde necesitas más o menos espacio,
 * o incluso ninguno (ej: una imagen que llena toda la card).
 */

type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  isClickable?: boolean;
}
