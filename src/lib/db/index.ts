import Dexie, { type Table } from 'dexie';

/**
 * Esquema de la base de datos offline-first para PetCare
 */
export class PetCareDB extends Dexie {
  propietarios!: Table;
  mascotas!: Table;
  citas!: Table;
  consultas!: Table;
  sync_queue!: Table;

  constructor() {
    super('PetCareDB');
    this.version(1).stores({
      propietarios: '++id',
      mascotas: '++id',
      citas: '++id',
      consultas: '++id',
      sync_queue: '++id',
    });
  }
}

// Instancia única de la base de datos
export const db = new PetCareDB();
