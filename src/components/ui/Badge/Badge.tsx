import clsx from 'clsx';
import type { BadgeProps } from './Badge.types';
import { badgeBase, badgePulse, badgeSizes, badgeVariants } from './Badge.styles';
import BadgePing from './BadgePing';

/**
 * Badge primitivo del sistema de diseño.
 *
 * Etiqueta visual para representar estados breves:
 * éxito, advertencia, error, información o estado neutral.
 */

const Badge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  pulse = false,
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={clsx(badgeBase, badgeVariants[variant], badgeSizes[size], pulse && badgePulse)}
      {...rest}
    >
      <BadgePing variant={variant} />

      {children}
    </span>
  );
};

export default Badge;
