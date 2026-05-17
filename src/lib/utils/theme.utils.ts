import type { Theme } from '@/types';

const THEME_STORAGE_KEY = 'petcare-theme';

export const getInitialTheme = (): Theme => {
  // Esta función se usa para calcular el tema inicial de la aplicación.
  // React la ejecuta una sola vez cuando se inicializa el estado.

  // Si el usuario ya eligió un tema en una visita anterior,
  // lo recuperamos desde localStorage.
  const saved = localStorage.getItem(THEME_STORAGE_KEY);

  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  /**
   * Primera visita:
   * si no hay tema guardado en localStorage, usamos la preferencia
   * del sistema operativo o del navegador.
   *
   * window.matchMedia('(prefers-color-scheme: dark)') revisa si el navegador
   * detecta que el usuario tiene configurado el modo oscuro.
   *
   * .matches devuelve true si coincide con modo oscuro;
   * si no coincide, devuelve false.
   */
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const applyTheme = (theme: Theme) => {
  /** <html> es donde vive la clase 'dark'. Al ponerla o quitarla,
     todos los tokens semánticos cambian de valor automáticamente. */
  document.documentElement.classList.toggle('dark', theme === 'dark');

  // Se guarda la elección para recordarla en la próxima visita
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};
