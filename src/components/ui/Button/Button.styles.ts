export const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg border font-medium leading-tight transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60';

export const buttonVariants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
  secondary:
    'border-slate-200 bg-transparent text-slate-900 hover:border-slate-300 hover:bg-slate-100',
  danger: 'bg-red-500 text-white hover:bg-red-700 active:bg-red-800',
  ghost: 'border-transparent bg-transparent text-blue-500 hover:bg-blue-50',
};

export const buttonSizes = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export const spinnerStyles =
  'h-[1em] w-[1em] animate-spin rounded-full border-2 border-current border-r-transparent';
