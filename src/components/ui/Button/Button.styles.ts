export const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg border font-medium leading-tight transition-all duration-300 ease-out active:scale-95 cursor-pointer disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60';

export const buttonVariants = {
  primary:
    'border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600 active:bg-blue-700',
  secondary:
    'border-border-base bg-surface text-text-primary hover:bg-surface-hover',
  danger:
    'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700',
  ghost: 'border-transparent bg-transparent text-brand hover:bg-surface-hover',
};

export const buttonSizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

export const spinnerStyles =
  'size-4 animate-spin rounded-full border-2 border-current border-t-transparent';
