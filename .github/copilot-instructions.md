# Portfolio Copilot Instructions

This is a React portfolio website built with modern web technologies including Three.js 3D graphics, advanced animations, and custom interactive elements.

## Architecture Overview

**Core Stack**: React 19 + Vite + Tailwind CSS + Framer Motion + React Three Fiber
- **Global State**: Context-based (ThemeContext, CursorContext) - avoid prop drilling
- **Routing**: React Router with 3 main routes: `/`, `/projects`, `/projects/:projectId`
- **Styling**: Tailwind-first with custom CSS variables for theming in `src/index.css`
- **Entry Point**: `src/main.jsx` sets up provider hierarchy and global components

## Key Architectural Patterns

### Context Provider Hierarchy (Critical)
```jsx
// src/main.jsx - Required order for proper functionality
<BrowserRouter>
  <ThemeProvider>        // Manages light/dark theme + CSS variables
    <CursorProvider>     // Global cursor variant state
      <MouseFollower />  // Global blur effect component
      <CustomCursor />   // Global custom cursor component
      <ScrollToTop />    // Route change scroll handler
      <App />
    </CursorProvider>
  </ThemeProvider>
</BrowserRouter>
```

### Component Organization
- `src/components/common/` - Shared utilities (ThemeToggle, Galaxy, CustomCursor)
- `src/components/home/` - Home page sections (About, Projects, SkillsSphere, etc.)
- `src/components/projects/` - Project-related components (Hero, ProjectCard, ContactForm)
- `src/pages/` - Route components (Home, ProjectsPage, ProjectDetailPage)
- `src/data/` - Static data (projects.js with shuffled featured projects)

### Styling Conventions
- **CSS Variables**: Use `--background-color`, `--dot-color` in `:root` and `[prefers-color-scheme='dark']`
- **Tailwind Classes**: Dark mode via `dark:` prefix, responsive via `sm:`, `md:`, `lg:`, `xl:`
- **Custom Components**: Define reusable patterns in `@layer components` (e.g., `.form-input`)
- **3D Elements**: Use `transform-style: preserve-3d !important` for Three.js integration

### Animation Patterns
- **Framer Motion**: Use `motion.div` with predefined variants for consistent animations
- **Cursor Interactions**: Context-based cursor variants (`default`, `link`, `view`, `hidden`)
- **Scroll Animations**: Intersection Observer with Framer Motion for reveal effects
- **3D Animations**: React Three Fiber for Galaxy background and SkillsSphere

## Development Workflows

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
```bash
npm run deploy       # Deploy to GitHub Pages (builds + pushes to gh-pages branch)
```

**Vercel Deployment**: Configure `vercel.json` with explicit build commands:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### Environment Setup
Required `.env` variables for EmailJS contact form:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Critical Implementation Details

### Custom Cursor System
- Automatically disabled on touch devices via `window.matchMedia('(pointer: coarse)')`
- Uses Context for global state management across components
- Cursor variants change on hover: `setCursorVariant('link')` for interactive elements

### Theme System
- CSS-in-JS avoided - themes handled via CSS variables and HTML attributes
- Theme preference persisted in localStorage with SSR compatibility checks
- Dark mode triggered by `[prefers-color-scheme='dark']` attribute on `<html>`

### 3D Components Integration
- Galaxy background: Three.js canvas positioned with `pointer-events: none`
- SkillsSphere: Interactive 3D element with `pointer-events: auto` on child elements
- Z-index layering: Background (z-10) → Galaxy → Content (z-20) → Cursor (highest)

### Project Data Structure
- Featured projects randomly shuffled on each page load via `shuffleArray()`
- Project IDs must match between `src/data/projects.js` and routing
- Images stored in `public/images/project/` with consistent naming convention

## Common Gotchas

1. **Touch Device Cursor**: Always check `isCoarsePointer` before implementing cursor interactions
2. **Theme Persistence**: Use `getInitialTheme()` pattern for SSR compatibility 
3. **3D Component Layering**: Ensure proper z-index and pointer-events for interactive 3D elements
4. **Router Paths**: Project detail routes must match project IDs in data files
5. **Asset Paths**: Use `/public` paths for images, not relative imports for better performance

## Deployment Troubleshooting

**Vercel "vite: command not found" Error**: 
- Ensure `vercel.json` specifies `buildCommand: "npm run build"`
- Set `outputDirectory: "dist"` to match Vite's build output
- Include `installCommand: "npm install"` for dependency resolution

**GitHub Pages**: 
- Uses `gh-pages` branch deployment via `npm run deploy`
- Requires `homepage` field in `package.json` pointing to GitHub Pages URL

When adding new features, follow the established patterns for Context usage, component organization, and animation consistency.
