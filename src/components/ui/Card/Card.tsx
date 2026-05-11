import type { CardProps } from './Card.types';
import styles from './Card.module.css';

/**
 * Card primitivo del sistema de diseño.
 * Contenedor visual que agrupa y eleva contenido.
 *
 * @example
 * <Card variant="default" padding="md">
 *   <h3>Firulais</h3>
 *   <p>Golden Retriever — 5 años</p>
 * </Card>
 */

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  isClickable = false,
  className,
  ...rest
}: CardProps) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[padding],
    isClickable ? styles.clickable : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;
