import { Badge, Card } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import styles from '../DesignSystemShowcase.module.css';

export const BadgeSection = () => {
  return (
    <Section title="Badge">
      <Subsection title="Variantes">
        <div className={styles.row}>
          <Badge variant="success">Activo</Badge>
          <Badge variant="warning">Pendiente</Badge>
          <Badge variant="danger">Urgente</Badge>
          <Badge variant="info">Rutina</Badge>
          <Badge variant="neutral">Inactivo</Badge>
        </div>
      </Subsection>

      <Subsection title="Tamaños">
        <div className={styles.row}>
          <Badge variant="info" size="sm">
            Small
          </Badge>
          <Badge variant="info" size="md">
            Medium
          </Badge>
        </div>
      </Subsection>

      <Subsection title="Ejemplo real: Paciente con estado">
        <Card>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h3>Firulais</h3>
              <p
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Golden Retriever — 5 años
              </p>
            </div>
            <Badge variant="success">Activo</Badge>
          </div>
        </Card>
      </Subsection>

      <Subsection title="Ejemplo real: Lista de citas">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-3)',
          }}
        >
          <Card padding="sm">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>10:30 AM — Firulais — Vacunación</span>
              <Badge variant="success">Completada</Badge>
            </div>
          </Card>
          <Card padding="sm">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>11:00 AM — Luna — Revisión general</span>
              <Badge variant="warning">Pendiente</Badge>
            </div>
          </Card>
          <Card padding="sm">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>11:30 AM — Rocky — Emergencia</span>
              <Badge variant="danger">Urgente</Badge>
            </div>
          </Card>
        </div>
      </Subsection>
    </Section>
  );
};
