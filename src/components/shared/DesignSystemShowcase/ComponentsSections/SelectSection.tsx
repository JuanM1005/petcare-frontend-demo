import { Select } from '@/components/ui';
import {
  SPECIES,
  CONSULTATION_TYPES,
  APPOINTMENT_STATUS,
} from '@/lib/constants';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export const SelectSection = () => {
  return (
    <Section title="Select">
      <Subsection title="Default">
        <div className={showcaseRow}>
          <Select
            label="Especie"
            name="species"
            placeholder="Selecciona una especie..."
            options={SPECIES}
          />
          <Select
            label="Tipo de consulta"
            name="consultationType"
            placeholder="Selecciona el tipo..."
            options={CONSULTATION_TYPES}
          />
        </div>
      </Subsection>

      <Subsection title="Con hint">
        <Select
          label="Estado de la cita"
          name="status"
          placeholder="Selecciona un estado..."
          options={APPOINTMENT_STATUS}
          hint="Puedes cambiar el estado después de la consulta"
        />
      </Subsection>

      <Subsection title="Con error">
        <Select
          label="Especie"
          name="speciesError"
          placeholder="Selecciona una especie..."
          options={SPECIES}
          error="Debes seleccionar una especie para continuar"
        />
      </Subsection>

      <Subsection title="Con valor por defecto">
        <Select
          label="Tipo de consulta"
          name="consultationDefault"
          options={CONSULTATION_TYPES}
          defaultValue="routine"
          hint="Por defecto, las consultas son de rutina"
        />
      </Subsection>

      <Subsection title="Disabled">
        <Select
          label="Especie del paciente"
          name="speciesDisabled"
          options={SPECIES}
          defaultValue="dog"
          disabled
        />
      </Subsection>

      <Subsection title="Full width">
        <Select
          label="Veterinario asignado"
          name="vet"
          placeholder="Selecciona un veterinario..."
          // Datos estáticos inline. Próximamente, datos dinámicos que vendrían de la base de datos.
          options={[
            { value: 'vet1', label: 'Dr. García - Medicina general' },
            { value: 'vet2', label: 'Dra. Martínez - Cirugía' },
            { value: 'vet3', label: 'Dr. López - Dermatología' },
          ]}
          fullWidth
        />
      </Subsection>
    </Section>
  );
};
