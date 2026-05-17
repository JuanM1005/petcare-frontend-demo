import {
  ButtonSection,
  InputSection,
  CardSection,
  BadgeSection,
  SpinnerSection,
  ModalSection,
  SelectSection,
  AvatarSection, // <--- ¡AQUÍ ESTÁ EL DETALLE QUE FALTABA!
} from './ComponentsSections';
import petcareLogo from '@/assets/petcare-logo.png';

import {
  showcaseDescription,
  showcaseHeader,
  showcaseHeaderText,
  showcaseLogo,
  showcasePage,
  showcaseTitle,
  showcaseVersionBadge,
} from './DesignSystemShowcase.styles';

import { ThemeToggle } from '@/components/ui';

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
            PetCare - Sistema de Diseño
            <span className={showcaseVersionBadge}>v0.1</span>
          </h1>

          <p className={showcaseDescription}>
            Referencia visual de componentes UI
          </p>
        </div>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <ButtonSection />
      <InputSection />
      <CardSection />
      <BadgeSection />
      <SpinnerSection />
      <ModalSection />
      <SelectSection />

      {/* Tu componente integrado con estilo */}
      <hr className="border-slate-200 dark:border-slate-800 my-8" />
      <AvatarSection />
    </div>
  );
};

export default DesignSystemShowcase;
