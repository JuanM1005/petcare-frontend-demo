import { Spinner, Card } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export const SpinnerSection = () => {
  return (
    <Section title="Spinner">
      <Subsection title="Tamaños">
        <div className={showcaseRow}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Subsection>

      <Subsection title="Con label">
        <div className={showcaseRow}>
          <Spinner size="sm" label="Buscando..." />
          <Spinner size="md" label="Cargando pacientes..." />
          <Spinner size="lg" label="Preparando dashboard..." />
        </div>
      </Subsection>

      <Subsection title="Ejemplo real: Carga dentro de una Card">
        <div className={showcaseRow}>
          <Card>
            <div className="flex justify-center px-8 py-16">
              <Spinner size="md" label="Cargando historial clínico..." />
            </div>
          </Card>
        </div>
      </Subsection>
    </Section>
  );
};
