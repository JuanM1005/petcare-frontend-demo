import { useState } from 'react';
import { registrarCambioOffline } from './lib/db/helpers';

function App() {
  const [loading, setLoading] = useState(false);

  const probarBaseDeDatos = async () => {
    setLoading(true);
    try {
      await registrarCambioOffline('mascotas', 'INSERT', {
        id_mascota: window.crypto.randomUUID(),
        id_propietario: window.crypto.randomUUID(),
        nombre: 'Firulais',
        especie: 'Perro',
        sexo: 'Macho',
        activo: true,
      });
      alert(
        '¡Firulais guardado con éxito! Presiona F12 y revisa la pestaña Application -> IndexedDB.',
      );
    } catch (error) {
      console.error('Error en la base de datos local:', error);
      alert('Hubo un error al guardar localmente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="text-center p-8 border border-slate-200 rounded-xl shadow-sm bg-white max-w-md">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">PetCare</h1>
        <p className="text-sm text-slate-500 mb-6">
          Módulo de Persistencia Local (Prueba Atómica)
        </p>
        <button
          onClick={probarBaseDeDatos}
          disabled={loading}
          className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-600 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? 'Guardando...' : '🐶 Guardar a Firulais en BD Local'}
        </button>
      </div>
    </div>
  );
}

export default App;
