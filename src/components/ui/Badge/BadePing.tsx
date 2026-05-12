import clsx from 'clsx';
import { badgePingVariants } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

type BadgePingProps = {
  variant: NonNullable<BadgeProps['variant']>;
};

const BadgePing = ({ variant }: BadgePingProps) => {
  const colors = badgePingVariants[variant];

  return (
    <span className="relative flex h-2 w-2">
      <span
        className={clsx(
          'absolute inline-flex h-full w-full animate-ping rounded-full opacity-60',
          colors.ping,
        )}
      />

      <span
        className={clsx(
          'relative inline-flex h-2 w-2 rounded-full',
          colors.dot,
        )}
      />
    </span>
  );
};

export default BadgePing;
