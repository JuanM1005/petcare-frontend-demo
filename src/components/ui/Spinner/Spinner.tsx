import clsx from 'clsx';
import type { SpinnerProps } from './Spinner.types';
import {
  spinnerBase,
  spinnerLabel,
  spinnerSizes,
  spinnerWrapper,
} from './Spinner.styles';

/**
 * Spinner primitivo del sistema de diseño.
 *
 * Indicador visual de carga con tamaño configurable
 * y texto opcional para dar contexto al usuario.
 */

const Spinner = ({ size = 'md', label, ...rest }: SpinnerProps) => {
  return (
    <div className={spinnerWrapper} role="status" {...rest}>
      <div className={clsx(spinnerBase, spinnerSizes[size])} />
      {label && <span className={spinnerLabel}>{label}</span>}
    </div>
  );
};

export default Spinner;
