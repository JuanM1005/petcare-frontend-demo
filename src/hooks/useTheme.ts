import { useEffect, useState } from 'react';
import type { Theme } from '@/types';
import { getInitialTheme, applyTheme } from '@/lib/utils';

/**
 * Hook que maneja el tema de la aplicación.
 *
 * - Lee la preferencia guardada en localStorage al iniciar.
 * - Si no hay preferencia, usa la del sistema operativo.
 * - Aplica/quita la clase 'dark' en <html>.
 * - El cambio persiste en localStorage.
 */

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
