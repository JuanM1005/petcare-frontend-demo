import { Button } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export const ButtonSection = () => {
  return (
    <Section title="Button">
      <Subsection title="Variantes">
        <div className={showcaseRow}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Subsection>

      <Subsection title="Tamaños">
        <div className={showcaseRow}>
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
        <div className={showcaseRow}>
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
            Eliminando…
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
  );
};
