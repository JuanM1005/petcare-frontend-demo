import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode; // Contenido del modal, puede ser cualquier elemento React
  isOpen: boolean; // Indica si el modal está abierto o cerrado
  onClose: () => void; // Función para cerrar el modal
  title?: string; // Título opcional para el modal
  closeOnOverlay?: boolean; // Permite cerrar el modal al hacer clic fuera de él
}
