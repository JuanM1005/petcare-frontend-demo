import { Input } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export const InputSection = () => {
  return (
    <Section title="Input">
      <Subsection title="Default">
        <div className={showcaseRow}>
          <Input
            label="Nombre de la mascota"
            name="petName"
            placeholder="Ej: Firulais"
          />
          <Input
            label="Peso (kg)"
            name="weight"
            type="number"
            placeholder="0.00"
          />
        </div>
      </Subsection>

      <Subsection title="Con hint">
        <Input
          label="Email del dueño"
          name="email"
          type="email"
          placeholder="correo@ejemplo.com"
          hint="Usaremos este correo para recordatorios de citas"
        />
      </Subsection>

      <Subsection title="Con error">
        <Input
          label="Teléfono"
          name="phone"
          defaultValue="abc"
          error="Debe ser un número de teléfono válido"
        />
      </Subsection>

      <Subsection title="Disabled">
        <Input
          label="ID del paciente"
          name="patientId"
          value="PET-001"
          disabled
        />
      </Subsection>

      <Subsection title="Full width">
        <Input
          label="Dirección del propietario"
          name="ownerAddress"
          placeholder="Calle, número, colonia, ciudad..."
          fullWidth
        />
      </Subsection>
    </Section>
  );
};
