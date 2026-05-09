import { useEffect } from 'react';

/**
 * Bloquea el scroll del body mientras el componente esté montado.
 * Se restaura automáticamente al desmontar.
 */

export const useLockScroll = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return;

    const originalOverflow = document.body.style.overflow; // Guarda el valor original del overflow del body
    document.body.style.overflow = 'hidden'; // Bloquea el scroll del body

    return () => {
      document.body.style.overflow = originalOverflow; // Restaura el valor original del overflow al desmontar
    };
  }, [isActive]); // Re-ejecuta el efecto si cambia el estado isActive
};
