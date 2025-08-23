# Components Directory

This directory contains all the reusable React components organized by their functionality and usage patterns.

## 📁 Folder Structure

```
components/
├── common/          # Shared utility components used across the application
├── home/           # Components specific to the home page sections
└── projects/       # Components related to project pages and interactions
```

## 🔧 Common Components (`common/`)
Utility components that provide core functionality throughout the application:
- **CustomCursor.jsx** - Interactive cursor with multiple variants and animations
- **Galaxy.jsx** - 3D animated starfield background using Three.js
- **MouseFollower.jsx** - Blur effect that follows mouse movement
- **ScrollToTop.jsx** - Handles scroll position reset on route changes
- **ThemeToggle.jsx** - Toggle switch for light/dark mode themes

## 🏠 Home Components (`home/`)
Section components that make up the home page layout:
- **About.jsx** - Personal information section with animated signature
- **ImageStack.jsx** - Draggable photo gallery with physics interactions
- **Projects.jsx** - Featured projects grid with filtering capabilities
- **Services.jsx** - Services offered with hover animations
- **SkillsSphere.jsx** - Interactive 3D sphere displaying technical skills
- **SocialLinks.jsx** - Social media links with hover effects
- **Stats.jsx** - Animated statistics counters
- **Testimonials.jsx** - Client testimonials carousel
- **Workflow.jsx** - Development process visualization

## 🚀 Projects Components (`projects/`)
Components specifically for project-related pages:
- **AnimatedText.jsx** - Text animations with stagger effects using Framer Motion
- **ContactForm.jsx** - Contact form with EmailJS integration and validation
- **Hero.jsx** - Full-screen hero section with animated elements
- **ProjectCard.jsx** - Interactive project display cards with hover effects

## 🎨 Design Patterns

### Component Architecture
- **Functional Components**: All components use modern React hooks
- **Custom Hooks**: Shared logic extracted into reusable hooks
- **Context Integration**: Components consume theme and cursor contexts
- **Animation Framework**: Framer Motion used for complex animations

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Theme Support**: Light/dark mode compatibility across all components
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Custom Properties**: CSS variables for consistent theming

### Performance Considerations
- **Lazy Loading**: Components loaded as needed
- **Memoization**: Expensive computations cached where appropriate
- **Animation Optimization**: GPU-accelerated animations using transform properties
- **Bundle Splitting**: Components organized for optimal code splitting

## 🔄 Integration Points

### Context Dependencies
- **ThemeContext**: Theme state and toggle functionality
- **CursorContext**: Custom cursor interactions and states

### External Libraries
- **Framer Motion**: Animation and gesture handling
- **Three.js**: 3D graphics and WebGL rendering
- **EmailJS**: Contact form email functionality
- **React Router**: Navigation between project details

## 📱 Responsive Behavior

All components are designed with responsive principles:
- **Mobile First**: Base styles target mobile devices
- **Breakpoint System**: Utilizes Tailwind's responsive breakpoints
- **Touch Interactions**: Optimized for touch devices
- **Performance**: Lightweight animations on smaller screens

## 🎯 Usage Guidelines

### Import Patterns
```jsx
// Named imports for specific components
import { About, Projects, Services } from '../components/home';

// Default imports for individual components
import CustomCursor from '../components/common/CustomCursor';
```

### Props Convention
- **Consistent naming**: camelCase for all props
- **Type safety**: PropTypes or TypeScript for prop validation
- **Default values**: Sensible defaults for optional props
- **Event handlers**: Follow onClick, onHover naming convention

### Animation Guidelines
- **Entrance animations**: Components animate in when they enter viewport
- **Interaction feedback**: Visual feedback for user interactions
- **Performance first**: Animations optimized for 60fps
- **Accessibility**: Respects user's motion preferences

## 🛠️ Development Notes

### Adding New Components
1. Determine appropriate folder (`common/`, `home/`, or `projects/`)
2. Create component file with JSDoc documentation
3. Follow existing naming conventions
4. Add responsive design considerations
5. Update this README if adding new categories

### Maintenance
- Regular dependency updates for security
- Performance monitoring for animation-heavy components
- Accessibility audits for interactive elements
- Cross-browser testing for consistency
