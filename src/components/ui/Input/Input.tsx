import type { InputProps } from './Input.types';
import styles from './Input.module.css';

/**
 * Input primitivo del sistema de diseño.
 * Soporta label, estados de error, hint y ícono izquierdo.
 *
 * @example
 * <Input
 *   label="Nombre de la mascota"
 *   name="petName"
 *   placeholder="Ej: Firulais"
 *   error="El nombre es obligatorio"
 * />
 */

const Input = ({
  label,
  error,
  hint,
  leftIcon,
  fullWidth = false,
  className,
  ...rest
}: InputProps) => {
  // Necesitamos un id para conectar el <label> con el <input>.
  // Si nos pasan id como prop, lo usamos. Si no, usamos name como fallback.
  const inputId = rest.id ?? rest.name;

  const wrapperClasses = [styles.wrapper, fullWidth ? styles.fullWidth : '']
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    styles.input,
    error ? styles.inputError : '',
    leftIcon ? styles.hasLeftIcon : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      <div className={styles.fieldContainer}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input id={inputId} className={inputClasses} {...rest} />
      </div>

      {error ? (
        <span className={styles.error}>{error}</span>
      ) : hint ? (
        <span className={styles.hint}>{hint}</span>
      ) : null}
    </div>
  );
};

export default Input;
