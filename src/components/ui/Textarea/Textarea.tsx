import type { TextareaProps } from './Textarea.types';
import CharacterCounter from './CharacterCounter';
import styles from './Textarea.module.css';

/**
 * Textarea primitivo del sistema de diseño.
 * Campo multilínea con label, error, hint y contador de caracteres.
 *
 * @example
 * <Textarea
 *   label="Notas de consulta"
 *   name="notes"
 *   placeholder="Observaciones..."
 *   maxLength={500}
 * />
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

  const wrapperClasses = [styles.wrapper, fullWidth ? styles.fullWidth : '']
    .filter(Boolean)
    .join(' ');

  const textareaClasses = [
    styles.textarea,
    error ? styles.textareaError : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      <label htmlFor={textareaId} className={styles.label}>
        {label}
      </label>

      <textarea id={textareaId} className={textareaClasses} {...rest} />

      {(error || hint || maxLength) && (
        <div className={styles.footer}>
          {error ? (
            <span className={styles.error}>{error}</span>
          ) : hint ? (
            <span className={styles.hint}>{hint}</span>
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
