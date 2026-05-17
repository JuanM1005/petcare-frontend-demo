export const spinnerWrapper =
  'inline-flex flex-col items-center justify-center gap-3';

export const spinnerBase =
  'animate-spin rounded-full border-solid border-slate-200 border-t-blue-500';

export const spinnerSizes = {
  sm: 'size-4 border-2',
  md: 'size-8 border-3',
  lg: 'size-12 border-4',
};

export const spinnerVariants = {
  primary: 'border-slate-200 border-t-blue-500',
  success: 'border-slate-200 border-t-emerald-500',
  warning: 'border-slate-200 border-t-yellow-500',
  danger: 'border-slate-200 border-t-red-500',
  neutral: 'border-slate-200 border-t-slate-600',
  light: 'border-white/30 border-t-white',
};

export const spinnerSpeeds = {
  slow: 'duration-1000',
  normal: 'duration-700',
  fast: 'duration-500',
};

export const spinnerLabel = 'text-sm font-medium text-slate-500';

export const spinnerFullScreen = 'flex min-h-svh items-center justify-center';

export const spinnerOverlay =
  'fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm';
