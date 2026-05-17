import Dexie, { type Table } from 'dexie';

export interface PropietarioLocal {
  id_propietario: string;
  id_usuario?: string | null;
  nombre: string;
  apellidos: string;
  telefono: string;
  direccion?: string;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}

export interface MascotaLocal {
  id_mascota: string;
  id_propietario: string;
  nombre: string;
  especie: string;
  raza?: string;
  sexo: 'Macho' | 'Hembra';
  fecha_nacimiento?: string;
  peso?: number;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}

export interface CitaLocal {
  id_cita: string;
  id_mascota: string;
  id_veterinario?: string | null;
  fecha_hora: string;
  motivo: string;
  estado: 'Pendiente' | 'Completada' | 'Cancelada';
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}

export interface ConsultaLocal {
  id_consulta: string;
  id_historial?: string | null;
  id_cita: string;
  id_veterinario: string;
  motivo_real: string;
  diagnostico: string;
  tratamiento: string;
  notas?: string;
  activo: boolean;
  creado_en: string;
  actualizado_en: string;
}

export interface SyncQueueItem {
  id?: number;
  tabla: 'propietarios' | 'mascotas' | 'citas' | 'consultas';
  operacion: 'INSERT' | 'UPDATE' | 'DELETE';
  payload: Record<string, unknown>;
  creado_en: string;
}

class PetCareLocalDatabase extends Dexie {
  propietarios!: Table<PropietarioLocal, string>;
  mascotas!: Table<MascotaLocal, string>;
  citas!: Table<CitaLocal, string>;
  consultas!: Table<ConsultaLocal, string>;
  sync_queue!: Table<SyncQueueItem, number>;

  constructor() {
    super('PetCareLocalDB');
    this.version(1).stores({
      propietarios: 'id_propietario, id_usuario, activo',
      mascotas: 'id_mascota, id_propietario, especie, activo',
      citas: 'id_cita, id_mascota, fecha_hora, estado, activo',
      consultas: 'id_consulta, id_cita, activo',
      sync_queue: '++id, tabla, operacion, creado_en',
    });
  }
}

export const db = new PetCareLocalDatabase();
