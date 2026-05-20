import { useState } from 'react';
import { Checkbox } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';

export const CheckboxSection = () => {
  const [vaccinated, setVaccinated] = useState(false);
  const [sterilized, setSterilized] = useState(true);

  return (
    <Section title="Checkbox">
      <Subsection title="Default">
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Paciente vacunado"
            name="vaccinated"
            checked={vaccinated}
            onChange={(e) => setVaccinated(e.target.checked)}
          />
          <Checkbox
            label="Paciente esterilizado"
            name="sterilized"
            checked={sterilized}
            onChange={(e) => setSterilized(e.target.checked)}
          />
        </div>
      </Subsection>

      <Subsection title="Con error">
        <Checkbox
          label="Acepto los términos y condiciones"
          name="terms"
          error="Debes aceptar los términos para continuar"
        />
      </Subsection>

      <Subsection title="Disabled">
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Requiere ayuno (no editable)"
            name="fasting"
            disabled
          />
          <Checkbox
            label="Tratamiento completado (no editable)"
            name="treatment"
            checked
            disabled
          />
        </div>
      </Subsection>

      <Subsection title="Ejemplo real: Ficha de paciente">
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Vacunado contra rabia"
            name="rabies"
            defaultChecked
          />
          <Checkbox
            label="Vacunado contra moquillo"
            name="distemper"
            defaultChecked
          />
          <Checkbox label="Esterilizado" name="neutered" />
          <Checkbox
            label="Acepta recordatorios por email"
            name="emailReminders"
            defaultChecked
          />
        </div>
      </Subsection>
    </Section>
  );
};
