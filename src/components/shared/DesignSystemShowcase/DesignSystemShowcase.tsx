import { ButtonSection, InputSection } from './sections';
import styles from './DesignSystemShowcase.module.css';

/**
 * Página de referencia visual del sistema de diseño.
 * Muestra todos los componentes UI en sus variantes y estados.
 *
 * Uso temporal en desarrollo — se moverá a una ruta
 * protegida cuando configuremos React Router.
 */
const DesignSystemShowcase = () => {
  return (
    <div className={styles.showcase}>
      <header className={styles.header}>
        <h1>PetCare — Sistema de diseño</h1>
        <p>Referencia visual de componentes UI</p>
      </header>

      {/* -------- BUTTON -------- */}
      <ButtonSection />

      {/* Aquí irán más secciones conforme se creen más componentes */}
      {/* -------- INPUT -------- */}
      <InputSection />
      {/* <Section title="Card"> ... </Section> */}
      {/* <Section title="Badge"> ... </Section> */}
    </div>
  );
};

export default DesignSystemShowcase;
