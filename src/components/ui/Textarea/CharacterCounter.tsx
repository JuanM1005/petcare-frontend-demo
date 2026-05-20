import clsx from 'clsx';
import {
  counterBase,
  counterNormal,
  counterWarning,
  counterDanger,
} from './Textarea.styles';
import type { CharacterCounterProps } from './Textarea.types';

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
            : counterNormal,
      )}
    >
      {current} / {max}
    </span>
  );
};

export default CharacterCounter;
