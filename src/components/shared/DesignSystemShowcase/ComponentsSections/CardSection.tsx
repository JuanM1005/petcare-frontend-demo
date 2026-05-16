import { Card } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export const CardSection = () => {
  return (
    <Section title="Card">
      <Subsection title="Variantes">
        <div className={showcaseRow}>
          <Card variant="default">
            <h3>Default</h3>
            <p>Con sombra y borde</p>
          </Card>
          <Card variant="outline">
            <h3>Outline</h3>
            <p>Solo borde, sin sombra</p>
          </Card>
          <Card variant="ghost">
            <h3>Ghost</h3>
            <p>Sin borde ni sombra</p>
          </Card>
        </div>
      </Subsection>

      <Subsection title="Padding">
        <div className={showcaseRow}>
          <Card padding="none">
            <div className="p-3 bg-blue-50">
              Padding none (contenido maneja su propio espacio)
            </div>
          </Card>
          <Card padding="sm">
            <p>Padding small</p>
          </Card>
          <Card padding="md">
            <p>Padding medium (default)</p>
          </Card>
          <Card padding="lg">
            <p>Padding large</p>
          </Card>
        </div>
      </Subsection>

      <Subsection title="Clickable">
        <div className={showcaseRow}>
          <Card isClickable onClick={() => alert('Card clickeada')}>
            <h3>Paciente: Firulais</h3>
            <p>Golden Retriever, 5 años</p>
          </Card>
          <Card
            variant="outline"
            isClickable
            onClick={() => alert('Cita seleccionada')}
          >
            <h3>Cita #127</h3>
            <p>Hoy 10:30 AM, Vacunación</p>
          </Card>
        </div>
      </Subsection>

      <Subsection title="Ejemplo real: Metric Card">
        <div className={showcaseRow}>
          <Card>
            <p className="text-sm text-neutral-500">Citas hoy</p>
            <p className="text-2xl font-bold">12</p>
          </Card>
          <Card>
            <p className="text-sm text-neutral-500">Pacientes nuevos</p>
            <p className="text-2xl font-bold">3</p>
          </Card>
          <Card>
            <p className="text-sm text-neutral-500">Consultas completadas</p>
            <p className="text-2xl font-bold">8</p>
          </Card>
        </div>
      </Subsection>
    </Section>
  );
};
