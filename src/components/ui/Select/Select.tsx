import { useState } from 'react';
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
  selectText,
  selectPlaceholder,
  selectWrapper,
} from './Select.styles';

const Select = ({
  label,
  options,
  placeholder,
  error,
  hint,
  fullWidth = false,
  defaultValue = '',
  onChange,
  className,
  ...rest
}: SelectProps) => {
  const selectId = rest.id ?? rest.name;

  const [selectedValue, setSelectedValue] = useState<string>(
    String(defaultValue),
  );

  const hasNoValue = selectedValue === '';

  return (
    <div className={clsx(selectWrapper, fullWidth && 'w-full')}>
      <label htmlFor={selectId} className={selectLabel}>
        {label}
      </label>

      <div className={selectFieldContainer}>
        <select
          {...rest}
          id={selectId}
          value={selectedValue}
          className={clsx(
            selectBase,
            error && selectError,
            hasNoValue ? selectPlaceholder : selectText,
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error || hint ? `${selectId}-description` : undefined
          }
          onChange={(event) => {
            setSelectedValue(event.target.value);
            onChange?.(event);
          }}
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
