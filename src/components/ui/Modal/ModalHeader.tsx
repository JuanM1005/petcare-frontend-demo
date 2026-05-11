import styles from './Modal.module.css';

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

/**
 * Header interno del Modal.
 * Muestra el título y el botón de cerrar.
 */

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Cerrar modal"
      >
        ✕
      </button>
    </div>
  );
};

export default ModalHeader;
