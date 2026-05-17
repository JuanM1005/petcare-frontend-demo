import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode; // Contenido del modal, puede ser cualquier elemento React
  isOpen: boolean; // Indica si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
  title?: string; // Título opcional para el modal
  closeOnOverlay?: boolean; // Permite cerrar el modal al hacer clic fuera de él
  ariaLabel?: string; // Texto accesible para lectores de pantalla cuando no hay título visible.
  className?: string; // Clases extra para personalizar el contenedor del modal
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}
