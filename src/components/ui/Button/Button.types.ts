import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Variantes visuales del botón.
 * Cada una comunica un nivel de importancia o intención diferente.
 */

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

/**
 * Tamaños disponibles siguiendo la escala de spacing.
 */
type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props del componente Button.
 *
 * Extiende de ButtonHTMLAttributes para heredar TODAS las props
 * nativas de <button> (onClick, disabled, type, aria-label, etc.)
 * sin tener que declararlas manualmente.
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // El contenido del botón (texto, iconos, etc.)
  variant?: ButtonVariant; // Variante visual del botón (default: 'primary')
  size?: ButtonSize; // Tamaño del botón (default: 'md')
  isLoading?: boolean; // Indica si el botón está en estado de carga
  fullWidth?: boolean; // Si es true, el botón ocupará todo el ancho disponible
}
