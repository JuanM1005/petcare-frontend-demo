import type { TextareaHTMLAttributes } from 'react';

/**
 * Props del componente Textarea.
 *
 * Extiende de TextareaHTMLAttributes para heredar value, onChange,
 * disabled, name, id, placeholder, rows, cols, maxLength, etc.
 * (props nativas del <textarea>).
 */

export interface CharacterCounterProps {
  current: number;
  max: number;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}
