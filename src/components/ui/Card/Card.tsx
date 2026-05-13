import clsx from 'clsx';
import type { CardProps } from './Card.types';
import {
  cardBase,
  cardClickable,
  cardPaddings,
  cardVariants,
} from './Card.styles';

/**
 * Card primitivo del sistema de diseño.
 *
 * Contenedor visual para agrupar contenido relacionado.
 * Puede mostrarse con borde/sombra, solo borde o estilo ghost.
 */

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  isClickable = false,
  className,
  ...rest
}: CardProps) => {
  return (
    <div
      className={clsx(
        cardBase,
        cardVariants[variant],
        cardPaddings[padding],
        isClickable && cardClickable,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
