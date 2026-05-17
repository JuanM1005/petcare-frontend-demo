import { createContext } from 'react';
import type { Theme } from '@/types';

/**
 * Datos que estarán disponibles para cualquier componente
 * que consuma el contexto de tema.
 */

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Contexto del tema de la aplicación.
 * El valor inicial es undefined; el Provider lo llenará.
 * Si algún componente lo usa sin Provider, será undefined
 * y el hook lanzará un error claro.
 */

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default ThemeContext;
