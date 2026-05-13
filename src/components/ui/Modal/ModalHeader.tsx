import type { ModalHeaderProps } from './Modal.types';
import {
  modalHeaderStyles,
  modalTitleStyles,
  modalCloseButtonStyles,
} from './Modal.styles';

/**
 * Header interno del Modal.
 * Muestra el título y el botón de cerrar.
 */

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <header className={modalHeaderStyles}>
      <h2 className={modalTitleStyles}>{title}</h2>
      <button
        type="button"
        className={modalCloseButtonStyles}
        onClick={onClose}
        aria-label="Cerrar modal"
      >
        ✕
      </button>
    </header>
  );
};

export default ModalHeader;
