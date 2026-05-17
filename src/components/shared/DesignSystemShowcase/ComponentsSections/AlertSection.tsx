import { Alert } from '@/components/ui';

export function AlertSection() {
  return (
    <section className="space-y-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm transition-colors duration-200">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Alert Component
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Mensajes de retroalimentación contextual para acciones del usuario.
          Incluyen estados, títulos opcionales e iconos adaptativos.
        </p>
      </div>

      <div className="grid gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 transition-colors duration-200">
        <Alert variant="success" title="¡Sincronización Exitosa!">
          Los registros médicos de la base de datos local IndexedDB se han
          subido correctamente a PostgreSQL.
        </Alert>

        <Alert variant="error" title="Error de Persistencia">
          No se pudo establecer conexión con el servidor. Los cambios se
          guardarán de forma local ("Offline-First").
        </Alert>

        <Alert variant="warning" title="Atención requerida">
          La mascota seleccionada no cuenta con su esquema de vacunación vigente
          contra la rabia.
        </Alert>

        <Alert variant="info" title="Información del Sistema">
          Hay una actualización de software programada para los servidores de
          Croix Ingeniería a las 23:00 hrs.
        </Alert>

        <Alert
          variant="info"
          title="Alerta Descartable"
          onClose={() => alert('Cerrando alerta...')}
        >
          Este componente cuenta con la propiedad opcional de cierre
          interactivo.
        </Alert>
      </div>
    </section>
  );
}
