# PetCare Frontend

Aplicación web para la gestión de clínicas veterinarias pequeñas y medianas.

## Stack tecnológico

- **Runtime:** Bun
- **Build tool:** Vite
- **Framework:** React 19
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** CSS Modules + Design Tokens
- **Formato de código:** Prettier

## Inicio rápido

```bash
# Instalar dependencias
bun install

# Iniciar servidor de desarrollo
bun run dev

# Verificar tipos y construir para producción
bun run build

# Formatear código
bun run format
```

## Estructura del proyecto

```
src/
├── app/                    # Router y componente raíz
├── components/
│   ├── ui/                 # Primitivos: Button, Input, Card, Modal
│   ├── layout/             # Sidebar, Header, PageContainer
│   └── shared/             # SearchBar, StatusBadge, ConfirmDialog
├── features/
│   ├── auth/               # Autenticación (components, hooks, context)
│   ├── patients/           # Gestión de pacientes
│   ├── appointments/       # Gestión de citas
│   ├── consultations/      # Consultas clínicas
│   └── dashboard/          # Dashboard operativo
├── hooks/                  # Hooks globales (useDebounce, useOnlineStatus)
├── lib/
│   ├── api/                # Cliente HTTP y endpoints
│   ├── db/                 # IndexedDB (Dexie) y sincronización
│   └── utils/              # Formatters, validadores, constantes
├── styles/                 # Tokens CSS y variables globales
└── types/                  # Interfaces TypeScript compartidas
```

### Arquitectura feature-based

El proyecto agrupa el código por **dominio de negocio**, no por tipo de archivo. Cada feature contiene sus propios componentes, hooks y páginas de forma autónoma.

**Regla de dependencia:** los features importan de `components/` y `lib/`, pero nunca al revés.

### Convención de componentes UI

Cada componente primitivo sigue esta estructura:

```
components/ui/Button/
├── Button.tsx              # Componente
├── Button.types.ts         # Interface de props
├── Button.module.css       # Estilos (CSS Modules)
└── index.ts                # Barrel file
```

## Sistema de diseño

Los tokens de diseño están centralizados en `src/styles/tokens.css` y definen:

- **Colores:** paleta de marca, neutrales y semánticos (success, warning, danger)
- **Tipografía:** Inter como fuente base, escala de tamaños en rem
- **Espaciado:** escala de 4px (4, 8, 12, 16, 20, 24, 32...)
- **Bordes y sombras:** border-radius y box-shadow consistentes
- **Transiciones:** duraciones estandarizadas (fast, normal, slow)

La página de referencia visual (`DesignSystemShowcase`) muestra todos los componentes en sus variantes y estados.

### Showcase de componentes

La página de referencia visual muestra todos los componentes UI en sus variantes y estados. Se accede en modo desarrollo como vista principal.

![PetCare Design System Showcase](docs/assets/design-system-showcase.png)

| Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| Button | `components/ui/Button` | Botón con variantes (primary, secondary, danger, ghost), tamaños (sm, md, lg) y estados (loading, disabled) | | Componente | Ubicación | Descripción |
|------------|-----------|-------------|
| Button | `components/ui/Button` | Variantes, tamaños y estados de carga |
| Input | `components/ui/Input` | Campos de texto con validación y estados de error |
| Card | `components/ui/Card` | Contenedor visual para agrupar información |
| Badge | `components/ui/Badge` | Indicadores de estado (activo, pendiente, urgente) |

## Convenciones de código

### Commits

Se sigue la convención [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(ui): add Input component with validation styles
fix(patients): correct search filter logic
chore: update dependencies
```

### TypeScript

- `strict: true` habilitado
- `verbatimModuleSyntax: true` — obliga a usar `import type` para tipos
- Alias `@/` apunta a `src/` para imports limpios
