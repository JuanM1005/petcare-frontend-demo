import clsx from 'clsx';
import type { TextareaProps } from './Textarea.types';
import CharacterCounter from './CharacterCounter';
import {
  textareaBase,
  textareaError,
  textareaErrorMessage,
  textareaFooter,
  textareaHint,
  textareaLabel,
  textareaWrapper,
} from './Textarea.styles';

/**
 * Textarea primitivo del sistema de diseño.
 *
 * Campo multilínea con label, error, hint y contador
 * de caracteres cuando se usa maxLength.
 */

const Textarea = ({
  label,
  error,
  hint,
  fullWidth = false,
  className,
  ...rest
}: TextareaProps) => {
  const textareaId = rest.id ?? rest.name;
  const currentLength = rest.value ? String(rest.value).length : 0;
  const { maxLength } = rest;

  return (
    <div className={clsx(textareaWrapper, fullWidth && 'w-full')}>
      <label htmlFor={textareaId} className={textareaLabel}>
        {label}
      </label>

      <textarea
        id={textareaId}
        className={clsx(textareaBase, error && textareaError, className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error || hint ? `${textareaId}-description` : undefined
        }
        {...rest}
      />

      {(error || hint || maxLength) && (
        <div className={textareaFooter}>
          {error ? (
            <span
              id={`${textareaId}-description`}
              className={textareaErrorMessage}
            >
              {error}
            </span>
          ) : hint ? (
            <span id={`${textareaId}-description`} className={textareaHint}>
              {hint}
            </span>
          ) : (
            <span />
          )}

          {maxLength && (
            <CharacterCounter current={currentLength} max={maxLength} />
          )}
        </div>
      )}
    </div>
  );
};

export default Textarea;
