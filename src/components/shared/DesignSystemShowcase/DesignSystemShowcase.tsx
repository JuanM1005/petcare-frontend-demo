import {
  ButtonSection,
  InputSection,
  CardSection,
  BadgeSection,
  ModalSection,
  SpinnerSection,
} from './sections';
import petcareLogo from '@/assets/petcare-logo.png';
import { TextareaSection } from './sections/TextareaSection';
import {
  showcaseDescription,
  showcaseHeader,
  showcaseHeaderText,
  showcaseLogo,
  showcasePage,
  showcaseTitle,
  showcaseVersionBadge,
} from './DesignSystemShowcase.styles';

/**
 * Página de referencia visual del sistema de diseño.
 *
 * Muestra todos los componentes UI en sus variantes y estados.
 * Por ahora funciona como vitrina temporal de desarrollo.
 */

const DesignSystemShowcase = () => {
  return (
    <div className={showcasePage}>
      <header className={showcaseHeader}>
        <img src={petcareLogo} alt="PetCare logo" className={showcaseLogo} />

        <div className={showcaseHeaderText}>
          <h1 className={showcaseTitle}>
            PetCare - Design System
            <span className={showcaseVersionBadge}>v0.1</span>
          </h1>

          <p className={showcaseDescription}>
            Referencia visual de componentes UI
          </p>
        </div>
      </header>

      <ButtonSection />
      <InputSection />
      <CardSection />
      <BadgeSection />
      <ModalSection />
      <SpinnerSection />
      <TextareaSection />
    </div>
  );
};

export default DesignSystemShowcase;
