import clsx from 'clsx';
import type { SpinnerProps } from './Spinner.types';
import {
  spinnerBase,
  spinnerLabel,
  spinnerVariants,
  spinnerSizes,
  spinnerWrapper,
} from './Spinner.styles';

/**
 * Spinner primitivo del sistema de diseño.
 *
 * Indicador visual de carga con tamaño configurable
 * y texto opcional para dar contexto al usuario.
 */

const Spinner = ({
  variant = 'primary',
  size = 'md',
  label,
  ...rest
}: SpinnerProps) => {
  return (
    <div className={spinnerWrapper} role="status" {...rest}>
      <div
        className={clsx(
          spinnerBase,
          spinnerVariants[variant],
          spinnerSizes[size],
        )}
      />
      {label && <span className={spinnerLabel}>{label}</span>}
    </div>
  );
};

export default Spinner;
