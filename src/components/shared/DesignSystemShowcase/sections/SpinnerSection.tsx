import { Spinner, Card } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import styles from '../DesignSystemShowcase.module.css';

export const SpinnerSection = () => {
  return (
    <Section title="Spinner">
      <Subsection title="Tamaños">
        <div className={styles.row}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Subsection>

      <Subsection title="Con label">
        <div className={styles.row}>
          <Spinner size="sm" label="Buscando..." />
          <Spinner size="md" label="Cargando pacientes..." />
          <Spinner size="lg" label="Preparando dashboard..." />
        </div>
      </Subsection>

      <Subsection title="Ejemplo real: Carga dentro de una Card">
        <div className={styles.row}>
          <Card>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: 'var(--spacing-8) var(--spacing-16)',
              }}
            >
              <Spinner size="md" label="Cargando historial clínico..." />
            </div>
          </Card>
        </div>
      </Subsection>
    </Section>
  );
};
