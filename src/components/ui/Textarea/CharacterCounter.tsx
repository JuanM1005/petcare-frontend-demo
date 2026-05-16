import clsx from 'clsx';
import { counterBase, counterDanger, counterWarning } from './Textarea.styles';
import type { CharacterCounterProps } from './Textarea.types';

/**
 * Contador de caracteres interno del Textarea.
 * Cambia de color progresivamente al acercarse al límite:
 * - Menos del 80%: gris (normal)
 * - Entre 80% y 99%: ámbar (warning)
 * - 100% o más: rojo (danger) indica que llego al limite de carácteres     permitidos
 */

const CharacterCounter = ({ current, max }: CharacterCounterProps) => {
  const percentage = current / max;

  return (
    <span
      className={clsx(
        counterBase,
        percentage >= 1
          ? counterDanger
          : percentage >= 0.8
            ? counterWarning
            : '',
      )}
    >
      {current} / {max}
    </span>
  );
};

export default CharacterCounter;
