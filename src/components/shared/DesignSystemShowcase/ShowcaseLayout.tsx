import type { ReactNode } from 'react';
import styles from './DesignSystemShowcase.module.css';

/**
 * Componentes de layout internos del Showcase.
 * Proveen estructura visual consistente para cada sección.
 */

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionContent}>{children}</div>
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
    <div className={styles.subsection}>
      <h3 className={styles.subsectionTitle}>{title}</h3>
      {children}
    </div>
  );
}
