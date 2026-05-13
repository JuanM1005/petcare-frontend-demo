import { createPortal } from 'react-dom';
import type { MouseEvent } from 'react';
import clsx from 'clsx';

import type { ModalProps } from './Modal.types';
import { useEscapeKey, useLockScroll } from './hooks';
import ModalHeader from './ModalHeader';
import {
  modalBodyStyles,
  modalContainerStyles,
  modalOverlayStyles,
} from './Modal.styles';

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  closeOnOverlay = true,
  ariaLabel,
  className,
}: ModalProps) => {
  useEscapeKey(onClose, isOpen);
  useLockScroll(isOpen);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) {
      onClose();
    }
  };

  const handleModalClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return createPortal(
    <div className={modalOverlayStyles} onClick={handleOverlayClick}>
      <section
        role="dialog"
        aria-modal="true"
        aria-label={!title ? ariaLabel : undefined}
        aria-labelledby={title ? 'modal-title' : undefined}
        className={clsx(modalContainerStyles, className)}
        onClick={handleModalClick}
      >
        {title && (
          <div id="modal-title">
            <ModalHeader title={title} onClose={onClose} />
          </div>
        )}

        <div className={modalBodyStyles}>{children}</div>
      </section>
    </div>,
    document.body
  );
};

export default Modal;