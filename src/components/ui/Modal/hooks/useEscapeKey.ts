import { useEffect } from 'react';

/**
 * Ejecuta un callback cuando se presiona la tecla Escape.
 * Útil para cerrar modales, drawers, popovers, etc.
 *
 * @param onEscape - Función a ejecutar al presionar Escape
 */

export const useEscapeKey = (onEscape: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onEscape(); // Si se presiona la tecla Escape, ejecuta el callback proporcionado
    };

    document.addEventListener('keydown', handleKeyDown); // Escucha eventos de teclado a nivel de documento
    return () => document.removeEventListener('keydown', handleKeyDown); // Limpia el event listener al desmontar el componente
  }, [onEscape]); // Re-ejecuta el efecto si cambia la función onEscape
};
