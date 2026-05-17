export const badgeBase =
  'inline-flex items-center gap-2 rounded-full border font-medium';

export const badgeVariants = {
  success: 'border-green-200 bg-green-50 text-green-700',
  warning: 'border-amber-200 bg-amber-50 text-amber-700',
  danger: 'border-red-200 bg-red-50 text-red-700',
  info: 'border-blue-200 bg-blue-50 text-blue-700',
  neutral: 'border-border-base bg-surface-hover text-text-secondary',
};

export const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export const badgePulse = 'motion-safe:animate-pulse';

export const badgePingVariants = {
  success: { ping: 'bg-green-400', dot: 'bg-green-500' },
  warning: { ping: 'bg-amber-400', dot: 'bg-amber-500' },
  danger: { ping: 'bg-red-400', dot: 'bg-red-500' },
  info: { ping: 'bg-blue-400', dot: 'bg-blue-500' },
  neutral: { ping: 'bg-slate-400', dot: 'bg-slate-500' },
};
