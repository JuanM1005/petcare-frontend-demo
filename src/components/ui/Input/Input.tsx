import clsx from 'clsx';
import type { InputProps } from './Input.types';
import {
  inputBase,
  inputError,
  inputErrorMessage,
  inputFieldContainer,
  inputHint,
  inputLabel,
  inputLeftIcon,
  inputWithLeftIcon,
  inputWrapper,
} from './Input.styles';

/**
 * Input primitivo del sistema de diseño.
 *
 * Usa Tailwind CSS para los estilos visuales y clsx
 * para manejar estados condicionales.
 *
 * Soporta:
 * - label: texto visible del campo
 * - error: mensaje de error y estilo visual de error
 * - hint: texto de ayuda
 * - leftIcon: ícono decorativo a la izquierda
 * - fullWidth: ocupa todo el ancho disponible
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
  // Conecta el label con el input.
  // Si no se recibe id, usamos name como alternativa.
  const inputId = rest.id ?? rest.name;

  return (
    <div className={clsx(inputWrapper, fullWidth && 'w-full')}>
      <label htmlFor={inputId} className={inputLabel}>
        {label}
      </label>

      <div className={inputFieldContainer}>
        {leftIcon && <span className={inputLeftIcon}>{leftIcon}</span>}

        <input
          id={inputId}
          className={clsx(
            inputBase,
            error && inputError,
            leftIcon && inputWithLeftIcon,
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error || hint ? `${inputId}-description` : undefined
          }
          {...rest}
        />
      </div>

      {error ? (
        <span id={`${inputId}-description`} className={inputErrorMessage}>
          {error}
        </span>
      ) : hint ? (
        <span id={`${inputId}-description`} className={inputHint}>
          {hint}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
