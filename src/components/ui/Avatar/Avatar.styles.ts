export const avatarStyles = {
  base: 'relative inline-flex items-center justify-center rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0',
  image: 'h-full w-full object-cover',
  fallback:
    'text-slate-600 dark:text-slate-300 font-medium uppercase select-none',
  sizes: {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  },
  status: {
    base: 'absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-slate-900',
    sizes: {
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-4 w-4',
    },
    colors: {
      online: 'bg-green-500',
      offline: 'bg-slate-400',
      busy: 'bg-red-500',
      away: 'bg-amber-500',
    },
  },
};
