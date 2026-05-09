import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.css';

/**
 * Badge primitivo del sistema de diseño.
 * Etiqueta visual de estado, siempre inline.
 *
 * @example
 * <Badge variant="success">Activo</Badge>
 * <Badge variant="danger" size="sm">Urgente</Badge>
 */

const Badge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className,
  ...rest
}: BadgeProps) => {
  const badgeClasses = [
    styles.badge,
    styles[variant],
    styles[size],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={badgeClasses} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
