import {
  ButtonSection,
  InputSection,
  CardSection,
  BadgeSection,
} from './sections';
import petcareLogo from '@/assets/petcare-logo.png';
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
        <img src={petcareLogo} alt="PetCare logo" className={styles.logo} />
        <div className={styles.headerText}>
          <h1>
            PetCare Design System
            <span className={styles.versionBadge}>v0.1</span>
          </h1>
          <p>Referencia visual de componentes UI</p>
        </div>
      </header>

      <ButtonSection />
      <InputSection />
      <CardSection />
      <BadgeSection />
    </div>
  );
};

export default DesignSystemShowcase;
