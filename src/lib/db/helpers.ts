import type { Table } from 'dexie';
import { db } from './index';

type PayloadModificable = Record<string, unknown> & {
  creado_en?: string;
  actualizado_en?: string;
  activo?: boolean;
};

export async function registrarCambioOffline<T extends Record<string, unknown>>(
  tabla: 'propietarios' | 'mascotas' | 'citas' | 'consultas',
  operacion: 'INSERT' | 'UPDATE' | 'DELETE',
  payload: T,
) {
  const timestamp = new Date().toISOString();
  const payloadModificado = { ...payload } as PayloadModificable;

  if (operacion === 'INSERT') {
    payloadModificado.creado_en = timestamp;
    payloadModificado.actualizado_en = timestamp;
  } else if (operacion === 'UPDATE') {
    payloadModificado.actualizado_en = timestamp;
  }

  await db.transaction('rw', tabla, 'sync_queue', async () => {
    const tablaDestino = db.table(tabla) as Table<PayloadModificable, string>;

    if (operacion === 'DELETE') {
      payloadModificado.activo = false;
      payloadModificado.actualizado_en = timestamp;
      await tablaDestino.put(payloadModificado);
    } else {
      await tablaDestino.put(payloadModificado);
    }

    await db.sync_queue.add({
      tabla,
      operacion,
      payload: payloadModificado,
      creado_en: timestamp,
    });
  });
}
