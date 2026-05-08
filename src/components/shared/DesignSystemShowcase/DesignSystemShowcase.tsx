import { Button } from '@/components/ui/Button';
import styles from './DesignSystemShowcase.module.css';
import type { ReactNode } from 'react';

/**
 * Página de referencia visual del sistema de diseño.
 * Muestra todos los componentes UI en sus variantes y estados.
 *
 * Uso temporal en desarrollo — se moverá a una ruta
 * protegida cuando configuremos React Router.
 */
const DesignSystemShowcase = () => {
  return (
    <div className={styles.showcase}>
      <header className={styles.header}>
        <h1>PetCare — Design System</h1>
        <p>Referencia visual de componentes UI</p>
      </header>

      {/* -------- BUTTON -------- */}
      <Section title="Button">
        <Subsection title="Variantes">
          <div className={styles.row}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Subsection>

        <Subsection title="Tamaños">
          <div className={styles.row}>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
        </Subsection>

        <Subsection title="Estados">
          <div className={styles.row}>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" isLoading>
              Loading
            </Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
            <Button variant="danger" isLoading>
              Eliminando...
            </Button>
          </div>
        </Subsection>

        <Subsection title="Full width">
          <Button variant="primary" fullWidth>
            Acción de ancho completo
          </Button>
          <Button variant="secondary" fullWidth>
            Cancelar
          </Button>
        </Subsection>
      </Section>

      {/* Aquí irán más secciones conforme se creen más componentes */}
      {/* <Section title="Input"> ... </Section> */}
      {/* <Section title="Card"> ... </Section> */}
      {/* <Section title="Badge"> ... </Section> */}
    </div>
  );
};

export default DesignSystemShowcase;

/* ============================================
   Componentes internos del Showcase.
   Solo se usan aquí — no se exportan.
   ============================================ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.subsection}>
      <h3 className={styles.subsectionTitle}>{title}</h3>
      {children}
    </div>
  );
}
