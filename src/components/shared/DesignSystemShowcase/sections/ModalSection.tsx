import { useState } from 'react';
import { Button, Modal } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export const ModalSection = () => {
  // Cada modal necesita su propio estado
  const [basicOpen, setBasicOpen] = useState(false);
  const [noOverlayOpen, setNoOverlayOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <Section title="Modal">
      <Subsection title="Básico">
        <div className={showcaseRow}>
          <Button onClick={() => setBasicOpen(true)}>Abrir modal básico</Button>

          <Modal
            isOpen={basicOpen}
            onClose={() => setBasicOpen(false)}
            title="Modal básico"
          >
            <p>
              Este es un modal con título, botón de cerrar y cierre con Escape o
              click en el overlay.
            </p>
          </Modal>
        </div>
      </Subsection>

      <Subsection title="Sin cierre por overlay">
        <div className={showcaseRow}>
          <Button variant="secondary" onClick={() => setNoOverlayOpen(true)}>
            Abrir modal protegido
          </Button>

          <Modal
            isOpen={noOverlayOpen}
            onClose={() => setNoOverlayOpen(false)}
            title="Acción requerida"
            closeOnOverlay={false}
          >
            <p>
              Este modal solo se cierra con el botón ✕ o con Escape. Clickear
              fuera no lo cierra. Útil para acciones que requieren una decisión
              explícita.
            </p>
          </Modal>
        </div>
      </Subsection>

      <Subsection title="Ejemplo real: Confirmación de eliminación">
        <div className={showcaseRow}>
          <Button variant="danger" onClick={() => setConfirmOpen(true)}>
            Eliminar paciente
          </Button>

          <Modal
            isOpen={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            title="¿Eliminar paciente?"
          >
            <p className="mb-4">
              Estás a punto de eliminar a <strong>Firulais</strong> y todo su
              historial clínico. Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setConfirmOpen(false)}>
                Cancelar
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  alert('Paciente eliminado');
                  setConfirmOpen(false);
                }}
              >
                Sí, eliminar
              </Button>
            </div>
          </Modal>
        </div>
      </Subsection>
    </Section>
  );
};
