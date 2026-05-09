import { createPortal } from 'react-dom';
import type { MouseEvent } from 'react';
import type { ModalProps } from './Modal.types';
import { useEscapeKey, useLockScroll } from './hooks';
import ModalHeader from './ModalHeader';
import styles from './Modal.module.css';

/**
 * Modal primitivo del sistema de diseño.
 * Se renderiza con Portal fuera del árbol DOM principal.
 * Soporta cierre con Escape, click en overlay y botón ✕.
 *
 * @example
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmar">
 *   <p>¿Estás seguro?</p>
 * </Modal>
 */

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  closeOnOverlay = true,
}: ModalProps) => {
  useEscapeKey(onClose); // Cierra el modal al presionar Escape
  useLockScroll(); // Bloquea el scroll del fondo cuando el modal está abierto

  if (!isOpen) return null; // No renderiza nada si el modal está cerrado

  const handleOverlayClick = () => {
    if (closeOnOverlay) onClose(); // Cierra el modal al hacer clic en el overlay
  };

  const handleModalClick = (e: MouseEvent) => {
    e.stopPropagation(); // Evita que el clic dentro del modal cierre el modal
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        {title && <ModalHeader title={title} onClose={onClose} />}
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
