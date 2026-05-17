import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

/**
 * Hook para consumir el contexto de tema.
 *
 * Lanza un error claro si se usa fuera del ThemeProvider,
 * en vez de fallar silenciosamente.
 */

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeContext debe usarse dentro de un ThemeProvider');
  }

  return context;
};
