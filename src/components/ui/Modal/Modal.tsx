import { createPortal } from 'react-dom';
import type { MouseEvent } from 'react';
import type { ModalProps } from './Modal.types';
import { useEscapeKey, useLockScroll } from './hooks';
import ModalHeader from './ModalHeader';
import { modalBody, modalContainer, modalOverlay } from './Modal.styles';

/**
 * Modal primitivo del sistema de diseño.
 *
 * Se renderiza con Portal fuera del árbol principal.
 * Soporta cierre con Escape, click en overlay y botón de cerrar.
 */

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  closeOnOverlay = true,
}: ModalProps) => {
  useEscapeKey(onClose, isOpen);
  useLockScroll(isOpen);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) onClose();
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        className={modalOverlay}
        onClick={handleOverlayClick}
        aria-label="Cerrar modal"
      />

      <div
        className={modalContainer}
        onClick={handleModalClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && <ModalHeader title={title} onClose={onClose} />}

        <div className={modalBody}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;