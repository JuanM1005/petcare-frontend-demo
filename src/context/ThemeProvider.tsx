import type { ReactNode } from 'react';
import { useTheme } from '@/hooks';
import ThemeContext from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Provee el estado del tema a toda la aplicación.
 *
 * Internamente usa el hook useTheme UNA sola vez,
 * y comparte ese estado con todos los componentes hijos
 * mediante el contexto.
 */

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeValue = useTheme();

  /**
   * Hace disponible themeValue para todos los componentes
   * renderizados dentro de este Provider, ya que engloba a todos.
   * Ejemplo: <ThemeContext> <App/> </ThemeContext>
   */
  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
