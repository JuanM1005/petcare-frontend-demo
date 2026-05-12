import clsx from 'clsx';
import {
  characterCounterBase,
  characterCounterDanger,
  characterCounterWarning,
} from './Textarea.styles';

interface CharacterCounterProps {
  current: number;
  max: number;
}

/**
 * Contador de caracteres interno del Textarea.
 *
 * Cambia de color cuando el usuario se acerca al límite.
 */

const CharacterCounter = ({ current, max }: CharacterCounterProps) => {
  const percentage = current / max;

  return (
    <span
      className={clsx(
        characterCounterBase,
        percentage >= 1
          ? characterCounterDanger
          : percentage >= 0.8
            ? characterCounterWarning
            : undefined,
      )}
    >
      {current}/{max}
    </span>
  );
};

export default CharacterCounter;
