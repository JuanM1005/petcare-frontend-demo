import styles from './Textarea.module.css';

interface CharacterCounterProps {
  current: number;
  max: number;
}

/**
 * Contador de caracteres interno del Textarea.
 * Cambia de color progresivamente al acercarse al límite.
 *
 * - Menos del 80%: gris (normal)
 * - Entre 80% y 99%: amarillo (warning)
 * - 100%: rojo (danger)
 */
const CharacterCounter = ({ current, max }: CharacterCounterProps) => {
  const percentage = current / max;

  const counterClasses = [
    styles.counter,
    percentage >= 1
      ? styles.counterDanger
      : percentage >= 0.8
        ? styles.counterWarning
        : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={counterClasses}>
      {current}/{max}
    </span>
  );
};

export default CharacterCounter;
