import React from 'react';
import type { AlertProps } from './Alert.types';
import { alertStyles } from './Alert.styles';

// Iconos minimalistas en SVG puro para evitar librerías extras pesadas
const ALERT_ICONS = {
  success: (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  error: (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  info: (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { variant = 'info', title, onClose, children, className = '', ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={`${alertStyles.base} ${alertStyles.variants[variant]} ${className}`}
        role="alert"
        {...props}
      >
        {/* Icono dinámico según la variante */}
        {ALERT_ICONS[variant]}

        {/* Contenido textual */}
        <div className="flex-1">
          {title && <h5 className={alertStyles.title}>{title}</h5>}
          {children && (
            <div className={alertStyles.description}>{children}</div>
          )}
        </div>

        {/* Botón opcional de cierre (X) */}
        {onClose && (
          <button
            onClick={onClose}
            className={alertStyles.closeButton}
            aria-label="Cerrar alerta"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l18 18"
              />
            </svg>
          </button>
        )}
      </div>
    );
  },
);

Alert.displayName = 'Alert';
export default Alert;
