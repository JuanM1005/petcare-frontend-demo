import clsx from 'clsx';
import type { ButtonProps } from './Button.types';
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  spinnerStyles,
} from './Button.styles';

/**
 * Botón primitivo del sistema de diseño.
 *
 * Ahora usa Tailwind CSS para los estilos visuales
 * y clsx para manejar clases condicionales.
 *
 * Conceptos importantes:
 * - Las clases base siempre se aplican.
 * - Las variantes cambian el color y comportamiento visual.
 * - Los tamaños cambian padding y tamaño de texto.
 * - fullWidth, isLoading y disabled son estados condicionales.
 */

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonBase,
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && 'w-full',
        isLoading && 'pointer-events-none cursor-not-allowed opacity-60',
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <span className={spinnerStyles} />}
      {children}
    </button>
  );
};

export default Button;
