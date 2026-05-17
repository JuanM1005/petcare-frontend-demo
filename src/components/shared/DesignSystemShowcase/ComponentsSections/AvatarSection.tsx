import { Avatar } from '@/components/ui';
import { Section, Subsection } from '../ShowcaseLayout';
import { showcaseRow } from '../DesignSystemShowcase.styles';

export function AvatarSection() {
  return (
    <Section title="Avatar">
      <Subsection title="Tamaños y Disponibilidad">
        <div className={showcaseRow}>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm" initials="MV" status="online" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Small
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              size="md"
              src="https://i.pravatar.cc/150?u=1"
              alt="Veterinario"
              status="busy"
            />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Medium
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg" alt="Firulais" status="away" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Large
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              size="xl"
              src="https://i.pravatar.cc/150?u=2"
              status="offline"
            />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Extra Large
            </span>
          </div>
        </div>
      </Subsection>

      <Subsection title="Estados de Conexión">
        <div className={showcaseRow}>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" initials="ON" status="online" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Online
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" initials="BS" status="busy" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Busy
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" initials="AW" status="away" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Away
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" initials="OF" status="offline" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Offline
            </span>
          </div>
        </div>
      </Subsection>

      <Subsection title="Con Imágenes">
        <div className={showcaseRow}>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              size="md"
              src="https://i.pravatar.cc/150?u=3"
              alt="Usuario 1"
              status="online"
            />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Con foto
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar
              size="md"
              src="https://i.pravatar.cc/150?u=4"
              alt="Usuario 2"
              status="busy"
            />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Con estado
            </span>
          </div>
        </div>
      </Subsection>

      <Subsection title="Fallback (Sin Imagen)">
        <div className={showcaseRow}>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" initials="DG" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Con iniciales
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" alt="Mimi" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Por alt text
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md" />
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Default
            </span>
          </div>
        </div>
      </Subsection>
    </Section>
  );
}
