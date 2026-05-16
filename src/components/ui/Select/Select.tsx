import clsx from 'clsx';
import { HiChevronDown } from 'react-icons/hi2';
import type { SelectProps } from './Select.types';

import {
  selectBase,
  selectChevron,
  selectError,
  selectErrorMessage,
  selectFieldContainer,
  selectHint,
  selectLabel,
  selectPlaceholder,
  selectWrapper,
} from './Select.styles';

/**
 * Select primitivo del sistema de diseño.
 *
 * Menú desplegable con opciones predefinidas, label, error,
 * hint y placeholder opcional. Usa appearance-none para
 * normalizar el aspecto entre navegadores.
 *
 * @example
 * <Select
 *   label="Especie"
 *   name="species"
 *   placeholder="Selecciona una especie..."
 *   options={[
 *     { value: 'dog', label: 'Perro' },
 *     { value: 'cat', label: 'Gato' },
 *   ]}
 * />
 */

const Select = ({
  label,
  options,
  placeholder,
  error,
  hint,
  fullWidth = false,
  className,
  ...rest
}: SelectProps) => {
  const selectId = rest.id ?? rest.name;
  const hasNoValue = !rest.value && rest.defaultValue;

  return (
    <div className={clsx(selectWrapper, fullWidth && 'w-full')}>
      <label htmlFor={selectId} className={selectLabel}>
        {label}
      </label>

      <div className={selectFieldContainer}>
        <select
          id={selectId}
          className={clsx(
            selectBase,
            error && selectError,
            placeholder && hasNoValue && selectPlaceholder,
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error || hint ? `${selectId}-description` : undefined
          }
          defaultValue={placeholder && hasNoValue ? '' : undefined}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <HiChevronDown
          className={clsx(selectChevron, error && 'peer-focus:text-red-500')}
          size={18}
          aria-hidden="true"
        />
      </div>

      {error ? (
        <span id={`${selectId}-description`} className={selectErrorMessage}>
          {error}
        </span>
      ) : hint ? (
        <span id={`${selectId}-description`} className={selectHint}>
          {hint}
        </span>
      ) : null}
    </div>
  );
};

export default Select;
