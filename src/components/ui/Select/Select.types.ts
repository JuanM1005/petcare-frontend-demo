import type { SelectHTMLAttributes } from 'react';

/**
 * Forma de cada opción del Select.
 * - value: lo que se guarda internamente ("dog")
 * - label: lo que ve el usuario ("Perro")
 */

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Props del componente Select.
 *
 * Extiende de SelectHTMLAttributes para heredar value, onChange,
 * disabled, name, id, etc. (props nativas del <select>).
 */

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}
