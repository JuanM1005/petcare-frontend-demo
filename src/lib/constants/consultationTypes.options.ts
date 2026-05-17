import type { SelectOption } from '@/components/ui';

/**
 * Tipos de consulta que ofrece la clínica.
 * Usado al agendar citas y filtrar el historial.
 */

export const CONSULTATION_TYPES: SelectOption[] = [
  { value: 'routine', label: 'Consulta de rutina' },
  { value: 'emergency', label: 'Emergencia' },
  { value: 'vaccination', label: 'Vacunación' },
  { value: 'surgery', label: 'Cirugía' },
];
