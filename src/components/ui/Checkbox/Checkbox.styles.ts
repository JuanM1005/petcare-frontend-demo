export const checkboxWrapper = 'flex flex-col gap-1';

export const checkboxField = 'flex items-start gap-3 cursor-pointer';

// El <input> real: invisible pero funcional
// 'peer' permite que sus "hermanos" reaccionen a su estado
export const checkboxInput = 'sr-only peer';

// Casilla visual (la que el usuario ve)
// peer-checked → estilo cuando el input está marcado
// peer-disabled → estilo cuando el input está deshabilitado
// peer-focus-visible → anillo de foco al navegar con teclado
// [&>svg]:opacity-0 → el ícono interno está oculto por defecto
// peer-checked:[&>svg]:opacity-100 → ícono visible cuando está marcado
export const checkboxBox =
  'mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-border-base bg-surface transition-colors peer-checked:border-brand peer-checked:bg-brand peer-disabled:cursor-not-allowed peer-disabled:opacity-60 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100';

export const checkboxErrorBox =
  'border-red-500 peer-checked:border-red-500 peer-checked:bg-red-500 peer-focus-visible:outline-red-500';

export const checkboxLabel =
  'text-sm text-text-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-60';

export const checkboxError = 'text-xs text-red-500';
