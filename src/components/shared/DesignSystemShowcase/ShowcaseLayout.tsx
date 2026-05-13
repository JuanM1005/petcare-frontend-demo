import type { ReactNode } from 'react';
import {
  showcaseSection,
  showcaseSectionContent,
  showcaseSectionTitle,
  showcaseSubsection,
  showcaseSubsectionTitle,
} from './DesignSystemShowcase.styles';

/**
 * Componentes de layout internos del Showcase.
 *
 * Proveen estructura visual consistente para cada sección
 * del sistema de diseño.
 */

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={showcaseSection}>
      <h2 className={showcaseSectionTitle}>{title}</h2>
      <div className={showcaseSectionContent}>{children}</div>
    </section>
  );
}

export function Subsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={showcaseSubsection}>
      <h3 className={showcaseSubsectionTitle}>{title}</h3>
      {children}
    </div>
  );
}
