import { modalCloseButton, modalHeader, modalTitle } from './Modal.styles';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

/**
 * Header interno del Modal.
 * Muestra el título y el botón para cerrar.
 */

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <div className={modalHeader}>
      <h2 className={modalTitle}>{title}</h2>

      <button
        type="button"
        className={modalCloseButton}
        onClick={onClose}
        aria-label="Cerrar modal"
      >
        ✕
      </button>
    </div>
  );
};

export default ModalHeader;
