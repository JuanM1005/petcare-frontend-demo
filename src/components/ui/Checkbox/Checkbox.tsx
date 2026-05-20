import clsx from 'clsx';
import { FiCheck } from 'react-icons/fi';
import type { CheckboxProps } from './Checkbox.types';
import {
  checkboxBox,
  checkboxError,
  checkboxErrorBox,
  checkboxField,
  checkboxInput,
  checkboxLabel,
  checkboxWrapper,
} from './Checkbox.styles';

/**
 * Checkbox primitivo del sistema de diseño.
 *
 * El input nativo se oculta con sr-only y se reemplaza
 * visualmente con un span estilizado. El estado (checked,
 * disabled, focus) se comunica al visual mediante peer-*.
 *
 * @example
 * <Checkbox
 *   label="Paciente vacunado"
 *   name="vaccinated"
 *   checked={vaccinated}
 *   onChange={(e) => setVaccinated(e.target.checked)}
 * />
 */

const Checkbox = ({ label, error, className, ...rest }: CheckboxProps) => {
  const checkboxId = rest.id ?? rest.name;

  return (
    <div className={clsx(checkboxWrapper, className)}>
      <label htmlFor={checkboxId} className={checkboxField}>
        {/* Input real: invisible pero accesible y funcional */}
        <input
          type="checkbox"
          id={checkboxId}
          className={checkboxInput}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${checkboxId}-error` : undefined}
          {...rest}
        />

        <span
          className={clsx(checkboxBox, error && checkboxErrorBox)}
          aria-hidden="true"
        >
          {/* Checkmark: su visibilidad se controla desde checkboxBox via [&>svg] */}
          <FiCheck className="size-3 text-white" />
        </span>

        {/* Texto del label */}
        <span className={checkboxLabel}>{label}</span>
      </label>

      {error && (
        <span id={`${checkboxId}-error`} className={checkboxError}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
