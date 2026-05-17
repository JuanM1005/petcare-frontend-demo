import { useEffect } from 'react';

/**
 * Desactiva la interacción con el resto de la app mientras
 * el modal esté abierto, usando el atributo nativo `inert`.
 *
 * El navegador impide automáticamente que Tab, click o foco
 * lleguen a elementos fuera del modal.
 *
 * @param isActive - Si el modal está abierto
 */

export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    // Si el modal esta cerrado, se detiene la ejecución
    if (!isActive) return;

    // Se obtiene la etiqueta principal de la aplicación
    // En este caso la etiqueta "root" (contenedor de nuestra APP)
    const root = document.getElementById('root');
    if (!root) return;

    /** Bloquea la aplicación utilizando el atributo "inert"
     Esta es una propiedad de la API del navegador que inactiva temporalmente un elemento del DOM y a todos sus descendientes, indicándole al navegador que ignore cualquier evento de entrada de usuario sobre ellos. */
    // El navegador ahora ignora clics, TABs y eventos de teclado en el fondo.
    root.inert = true;

    // La función de limpieza se ejecuta una vez que el componente se desmonta
    // En este caso cuando el MODAL se cierra
    return () => {
      // Al cerrar el modal, reactiva la app quitando el "inert"
      root.inert = false;
    };
  }, [isActive]); // Este useEffect se ejecuta al montar el componente y cada vez que haya un cambio (cuando se abre y se cierra el modal)
};
