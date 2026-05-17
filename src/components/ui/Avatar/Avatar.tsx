import React, { useState } from 'react';
import type { AvatarProps } from './Avatar.types';
import { avatarStyles } from './Avatar.styles';

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = 'Avatar',
      initials,
      size = 'md',
      status,
      className = '',
      ...props
    },
    ref,
  ) => {
    // Estado para saber si la imagen falló al cargar (ej. sin internet)
    const [imageError, setImageError] = useState(false);

    const showImage = src && !imageError;
    const displayInitials = initials || alt.charAt(0).toUpperCase();

    return (
      <div
        ref={ref}
        className={`${avatarStyles.base} ${avatarStyles.sizes[size]} ${className}`}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className={avatarStyles.image}
            onError={() => setImageError(true)} // Si falla la red, mostramos las iniciales
          />
        ) : (
          <span className={avatarStyles.fallback}>{displayInitials}</span>
        )}

        {/* Punto indicador de estado (opcional) */}
        {status && (
          <span
            className={`${avatarStyles.status.base} ${avatarStyles.status.sizes[size]} ${avatarStyles.status.colors[status]}`}
            aria-hidden="true"
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

export default Avatar;
