import { useState } from 'react';
import { Textarea } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';

export const TextareaSection = () => {
  const [instructions, setInstructions] = useState<string>('');

  return (
    <Section title="Textarea">
      <Subsection title="Default">
        <Textarea
          label="Observaciones generales"
          name="observations"
          placeholder="Escribe aquí las observaciones..."
        />
      </Subsection>

      <Subsection title="Con hint">
        <Textarea
          label="Diagnóstico"
          name="diagnosis"
          placeholder="Detalle del diagnóstico..."
          hint="Sea lo más específico posible para el historial clínico"
        />
      </Subsection>

      <Subsection title="Con error">
        <Textarea
          label="Notas de consulta"
          name="notes"
          defaultValue="a"
          error="Las notas deben tener al menos 10 caracteres"
        />
      </Subsection>

      <Subsection title="Con contador de caracteres">
        <Textarea
          label="Instrucciones al dueño"
          name="instructions"
          placeholder="Administrar medicamento cada 8 horas..."
          maxLength={200}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </Subsection>

      <Subsection title="Disabled">
        <Textarea
          label="Notas anteriores"
          name="previousNotes"
          value="Consulta de rutina. Paciente en buen estado general. Se aplicó vacuna antirrábica."
          disabled
        />
      </Subsection>

      <Subsection title="Full width">
        <Textarea
          label="Historial clínico completo"
          name="history"
          placeholder="Información detallada del paciente..."
          fullWidth
        />
      </Subsection>
    </Section>
  );
};
