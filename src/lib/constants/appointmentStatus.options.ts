import type { SelectOption } from '@/components/ui';

/**
 * Estados posibles de una cita.
 * Usado en gestión de citas y dashboard.
 */

export const APPOINTMENT_STATUS: SelectOption[] = [
  { value: 'pending', label: 'Pendiente' },
  { value: 'confirmed', label: 'Confirmada' },
  { value: 'completed', label: 'Completada' },
  { value: 'cancelled', label: 'Cancelada' },
];
