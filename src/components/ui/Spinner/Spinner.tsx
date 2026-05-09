import type { SpinnerProps } from './Spinner.types';
import styles from './Spinner.module.css';

/**
 * Spinner primitivo del sistema de diseño.
 * Indicador de carga con tamaño configurable y label opcional.
 *
 * @example
 * <Spinner size="md" label="Cargando pacientes..." />
 */

const Spinner = ({ size = 'md', label, className, ...rest }: SpinnerProps) => {
  const wrapperClasses = [styles.wrapper, className ?? '']
    .filter(Boolean)
    .join(' ');

  const spinnerClasses = [styles.spinner, styles[size]]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses} role="status" {...rest}>
      <div className={spinnerClasses} />
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default Spinner;
