import type { Table } from 'dexie';
import { db } from './index';

// 1. Definimos un molde para que TypeScript acepte los campos dinámicos sin quejarse
type PayloadModificable = Record<string, unknown> & {
  creado_en?: string;
  actualizado_en?: string;
  activo?: boolean;
};

/**
 * Inserta o actualiza un registro en IndexedDB y registra la operación en la cola de sincronización FIFO.
 */
export async function registrarCambioOffline<T extends Record<string, unknown>>(
  tabla: 'propietarios' | 'mascotas' | 'citas' | 'consultas',
  operacion: 'INSERT' | 'UPDATE' | 'DELETE',
  payload: T
) {
  const timestamp = new Date().toISOString();

  // 2. Le decimos a TS: "Confía en mí, este objeto tendrá las fechas y el estado"
  const payloadModificado = { ...payload } as PayloadModificable;

  // Asegurar marcas de tiempo consistentes para Last Write Wins
  if (operacion === 'INSERT') {
    payloadModificado.creado_en = timestamp;
    payloadModificado.actualizado_en = timestamp;
  } else if (operacion === 'UPDATE') {
    payloadModificado.actualizado_en = timestamp;
  }

  // Transacción atómica
  await db.transaction('rw', tabla, 'sync_queue', async () => {
    
    // Casteo estricto de la tabla de Dexie
    const tablaDestino = db.table(tabla) as Table<PayloadModificable, string>;

    // 1. Guardar o remover en la colección local
    if (operacion === 'DELETE') {
      // Soft Delete: Actualizamos el campo activo a false en vez de remover físicamente
      payloadModificado.activo = false;
      payloadModificado.actualizado_en = timestamp;
      await tablaDestino.put(payloadModificado); 
    } else {
      await tablaDestino.put(payloadModificado);
    }

    // 2. Insertar ticket en la cola de cambios de sincronización masiva
    await db.sync_queue.add({
      tabla,
      operacion,
      payload: payloadModificado,
      creado_en: timestamp
    });
  });
}