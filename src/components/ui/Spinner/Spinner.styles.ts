export const spinnerWrapper =
  'inline-flex flex-col items-center justify-center gap-3';

export const spinnerBase = 'animate-spin rounded-full border-solid';

export const spinnerSizes = {
  sm: 'size-4 border-2',
  md: 'size-8 border-3',
  lg: 'size-12 border-4',
};

export const spinnerVariants = {
  primary: 'border-border-base border-t-brand',
  success: 'border-border-base border-t-emerald-500',
  warning: 'border-border-base border-t-yellow-500',
  danger: 'border-border-base border-t-red-500',
  neutral: 'border-border-base border-t-text-secondary',
  light: 'border-white/30 border-t-white',
};

export const spinnerSpeeds = {
  slow: 'duration-1000',
  normal: 'duration-700',
  fast: 'duration-500',
};

export const spinnerLabel = 'text-sm font-medium text-text-secondary';

export const spinnerFullScreen = 'flex min-h-svh items-center justify-center';

export const spinnerOverlay =
  'fixed inset-0 z-50 flex items-center justify-center bg-surface/70 backdrop-blur-sm';
