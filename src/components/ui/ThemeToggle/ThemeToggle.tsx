import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { useThemeContext } from '@/hooks/useThemeContext';
import { themeToggleBase } from './ThemeToggle.styles';

/**
 * Botón para alternar entre tema claro y oscuro.
 *
 * Muestra un sol en modo claro (clic → oscuro)
 * y una luna en modo oscuro (clic → claro).
 */

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={themeToggleBase}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
    >
      {isDark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
