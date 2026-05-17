import type { SelectOption } from '@/components/ui';

/**
 * Especies de pacientes que atiende la clínica.
 * Usado en formularios de pacientes, filtros y estadísticas.
 */

export const SPECIES: SelectOption[] = [
  { value: 'dog', label: 'Perro' },
  { value: 'cat', label: 'Gato' },
  { value: 'bird', label: 'Ave' },
  { value: 'other', label: 'Otro' },
];
