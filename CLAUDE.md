# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for "Nevos" (formerly "Galaxy Digital Arts"), a digital agency specializing in professional showcase websites for small businesses. The project uses Vite, TypeScript, React Router, shadcn/ui components, and Tailwind CSS with a custom design system.

## Common Development Commands

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:8080` (configured in vite.config.ts).

### Build
```bash
npm run build          # Production build
npm run build:dev      # Development build with source maps
```

### Lint
```bash
npm run lint
```
Runs ESLint. Note: `@typescript-eslint/no-unused-vars` is disabled in eslint.config.js.

### Preview
```bash
npm run preview
```
Preview the production build locally.

## Architecture & Code Structure

### Routing Architecture
- **Router**: React Router v6 configured in `src/App.tsx`
- **Main Layout**: Fixed Header + flex-grow main content + Footer
- **Routes**: Home, Services, Portfolio, About, Contact, ContactConfirmation, NotFound (404 catch-all)
- **Important**: ALL custom routes MUST be added ABOVE the catch-all `*` route in App.tsx

### Component Organization

**Pages** (`src/pages/`):
- Each page is a default export
- Pages use framer-motion for scroll animations
- Pages are composed of smaller reusable components

**Reusable Components** (`src/components/`):
- `Header.tsx`: Fixed navigation with pill-style nav items, mobile menu, and scroll detection
- `Footer.tsx`: Site footer with links and branding
- `ServiceCard.tsx`, `ProjectCard.tsx`, `TestimonialCard.tsx`, `ProcessStep.tsx`: Card components with consistent styling
- `Globe.tsx`: WebGL globe visualization using COBE library
- `LogoLoop.tsx`: Infinite scrolling logo carousel
- `Highlighter.tsx`: Text highlighting animations

**UI Components** (`src/components/ui/`):
- shadcn/ui components (accordion, button, card, dialog, etc.)
- `shimmer-button.tsx`: Custom animated button with shimmer effect
- `background-beams.tsx`: Animated background effect
- These are NOT manually edited - use `npx shadcn@latest add <component>` to add/update

### Design System & Styling

**Color System**:
- Uses OKLCH color space (NOT HSL) defined in `src/index.css`
- CSS variables for theming: `--background`, `--foreground`, `--primary`, `--accent`, etc.
- Dark mode support via `.dark` class
- Twitter-inspired color palette (see color.md for reference)

**Typography**:
- Headings: `font-heading` (Space Grotesk)
- Body text: `font-body` (Inter)
- Both configured in tailwind.config.ts

**Custom CSS Classes**:
- `.animated-gradient-text`: Animated gradient text effect
- `.glass-card`: Glassmorphism effect with backdrop-blur
- `.pill-nav`: Custom pill-style navigation (extracted from pill.md)
- `.marker-highlight`: Text highlighting animation

**Path Alias**:
- `@/` maps to `./src/` (configured in vite.config.ts and tsconfig)

### State Management & Data Fetching

- **React Query**: Configured with `@tanstack/react-query` in App.tsx
- **Toasts**: Uses both shadcn's toast system and Sonner for notifications
- **Tooltips**: Wrapped in TooltipProvider in App.tsx

### Animation Libraries

- **Framer Motion**: Primary animation library
  - Use for page transitions, scroll-triggered animations, and micro-interactions
  - Common pattern: `initial={{ opacity: 0 }}`, `whileInView={{ opacity: 1 }}`, `viewport={{ once: true }}`
- **Rough Notation**: For hand-drawn style annotations (via `@turahe/react-rough-notation`)

### Special Components

**Globe Component** (`src/components/Globe.tsx`):
- Uses COBE library for WebGL globe rendering
- Props: `size`, `rotationSpeed`, `className`
- Displays on home page hero section

**LogoLoop Component** (`src/components/LogoLoop.tsx`):
- Infinite horizontal scrolling logo carousel
- Custom CSS in `LogoLoop.css`
- Used to showcase technologies (React, Next.js, TypeScript, Tailwind)

**Header Navigation**:
- Desktop: Pill-style navigation with active state indicators
- Mobile: Animated slide-down menu with gradient background
- Scroll detection changes header background (transparent → blur + border)

### Assets & Images

- Logo: `asset/Logo nevosoff.png`
- Portfolio screenshots in `asset/` directory
- Public assets in `public/` (favicon, robots.txt, placeholder.svg)

## Key Technical Patterns

### Framer Motion Animations
Common pattern for scroll-triggered animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```

### Routing Navigation
```tsx
// Use Link for internal navigation
<Link to="/services">Services</Link>

// Use window.location.assign for programmatic navigation
window.location.assign('/contact')
```

### shadcn/ui Component Usage
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

## Important Notes

- This is a Lovable.dev project (see README.md for Lovable integration)
- The project uses `lovable-tagger` plugin in development mode for component tracking
- Several markdown files in root (accueil.md, circular.md, color.md, contact.md, logoloop.md, magnetic.md, pill.md, portfolio.md) contain design specs and implementation notes
- GEMINI.md exists as legacy documentation
- The site is bilingual-ready but currently French-focused
- Custom animations use CSS custom properties (e.g., `--speed`, `--shadow-color`)

## Development Workflow

1. **Adding a new page**: Create in `src/pages/`, add route in `App.tsx` ABOVE the `*` catch-all
2. **Adding shadcn components**: Use `npx shadcn@latest add <component-name>`
3. **Styling**: Use Tailwind utility classes + design system CSS variables
4. **Icons**: Use `lucide-react` for icons, `react-icons` for brand logos
5. **Animations**: Use Framer Motion for most animations, CSS for simpler effects
