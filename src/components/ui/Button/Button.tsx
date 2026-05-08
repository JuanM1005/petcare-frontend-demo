import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

/**
 * Botón primitivo del sistema de diseño.
 * Soporta variantes visuales, tamaños y estado de carga.
 *
 * @example
 * <Button variant="primary" size="md" onClick={handleSave}>
 *   Guardar paciente
 * </Button>
 */

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  // Combina las clases CSS dinámicamente según las props recibidas
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : '',
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <span className={styles.spinner} />}
      {children}
    </button>
  );
};

export default Button;
