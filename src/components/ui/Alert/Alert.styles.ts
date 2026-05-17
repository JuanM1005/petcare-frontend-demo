export const alertStyles = {
  base: 'flex w-full p-4 rounded-xl border text-sm gap-3 transition-all duration-200 shadow-sm',
  variants: {
    success:
      'bg-green-50/80 dark:bg-green-950/30 border-green-200 dark:border-green-900/60 text-green-800 dark:text-green-300',
    error:
      'bg-red-50/80 dark:bg-red-950/30 border-red-200 dark:border-red-900/60 text-red-800 dark:text-red-300',
    warning:
      'bg-amber-50/80 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300',
    info: 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/60 text-blue-800 dark:text-blue-300',
  },
  title: 'font-bold tracking-tight mb-0.5 text-[15px]',
  description: 'opacity-90 leading-relaxed',
  closeButton:
    'ml-auto shrink-0 p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 opacity-60 hover:opacity-100 transition-all active:scale-95 h-fit',
};
