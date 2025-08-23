# Common Components

Shared utility components used throughout the application that provide core functionality and UI enhancements.

## 📋 Component Overview

| Component | Purpose | Key Features |
|-----------|---------|-------------|
| `CustomCursor` | Interactive custom cursor | Multiple variants, smooth animations, context-aware |
| `Galaxy` | 3D starfield background | Three.js integration, particle system, responsive |
| `MouseFollower` | Blur effect follower | Smooth tracking, performance optimized |
| `ScrollToTop` | Route change handler | Auto-scroll, smooth transitions |
| `ThemeToggle` | Theme switcher | Light/dark modes, persistent storage |

## 🎯 CustomCursor.jsx

**Purpose**: Replaces the default cursor with an interactive custom cursor that responds to different UI elements and user interactions.

**Key Features**:
- Multiple cursor variants (default, pointer, text, loading)
- Smooth animations using CSS transforms
- Context-aware behavior based on hover targets
- Performance-optimized with GPU acceleration

**Usage**:
```jsx
import CustomCursor from './components/common/CustomCursor';

// Rendered globally in main.jsx
<CustomCursor />
```

## 🌌 Galaxy.jsx

**Purpose**: Creates an animated 3D starfield background using Three.js for visual appeal and depth.

**Key Features**:
- Three.js WebGL rendering for smooth 60fps animations
- Particle system with randomized star positions
- Responsive canvas that adapts to viewport changes
- Memory-efficient cleanup on component unmount

**Technical Details**:
- Uses `useEffect` for Three.js scene setup and cleanup
- Implements `requestAnimationFrame` for smooth animations
- Responsive design with window resize handling

## 🔄 MouseFollower.jsx

**Purpose**: Provides a subtle blur effect that follows mouse movement to enhance visual feedback.

**Key Features**:
- Smooth mouse tracking with CSS transforms
- Optimized performance using `requestAnimationFrame`
- Customizable blur intensity and size
- Automatic show/hide based on mouse activity

**Performance Notes**:
- Uses hardware acceleration for smooth animations
- Debounced mouse events to reduce CPU usage
- Lightweight DOM manipulation

## ⬆️ ScrollToTop.jsx

**Purpose**: Automatically scrolls to the top of the page when navigating between routes.

**Key Features**:
- Integrates with React Router location changes
- Smooth scrolling behavior
- Configurable scroll timing and easing
- Memory leak prevention with proper cleanup

**Implementation**:
```jsx
// Listens to location changes
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [location]);
```

## 🌓 ThemeToggle.jsx

**Purpose**: Provides a toggle switch for switching between light and dark themes with persistent storage.

**Key Features**:
- Smooth theme transitions using CSS custom properties
- Local storage persistence for user preferences
- Animated toggle switch with visual feedback
- System preference detection and respect

**Theme Integration**:
- Works with `ThemeContext` for global state management
- CSS variables for consistent color schemes
- Smooth transitions between theme states

## 🚀 Performance Considerations

### Optimization Strategies
- **GPU Acceleration**: Components use `transform` properties for animations
- **Memory Management**: Proper cleanup in `useEffect` return functions  
- **Event Debouncing**: Mouse events are optimized to prevent excessive updates
- **Lazy Rendering**: Components only render when necessary

### Bundle Size Impact
- **Three.js**: Only imports necessary modules to minimize bundle size
- **Tree Shaking**: Modern ES modules for optimal dead code elimination
- **Code Splitting**: Components can be lazy-loaded if needed

## 🎨 Styling Guidelines

### CSS Architecture
- **Tailwind Classes**: Utility-first approach for consistent styling
- **Custom Properties**: CSS variables for theme-aware colors
- **Animation Classes**: Reusable animation utilities
- **Responsive Design**: Mobile-first breakpoint system

### Theme Integration
All components support automatic theme switching through:
- CSS custom properties (`--background-color`, `--text-color`)
- Tailwind's dark mode utilities (`dark:bg-slate-900`)
- Context-aware styling based on theme state

## 🔧 Development Guidelines

### Adding New Common Components
1. **Determine Reusability**: Component should be used in multiple places
2. **Follow Naming Convention**: PascalCase with descriptive names
3. **Add JSDoc Documentation**: Comprehensive function and prop documentation
4. **Performance Testing**: Ensure smooth animations and minimal re-renders
5. **Theme Compatibility**: Support both light and dark themes
6. **Responsive Design**: Work across all device sizes

### Testing Considerations
- **Cross-browser compatibility** for Three.js and CSS animations
- **Performance testing** on lower-end devices
- **Accessibility testing** for cursor and theme interactions
- **Memory leak testing** for components with animations

## 🤝 Integration with Other Components

### Context Dependencies
- **CursorContext**: For cursor state management
- **ThemeContext**: For theme switching functionality

### Global Usage
These components are typically rendered at the application root level to provide functionality across all pages:

```jsx
// In main.jsx
<CursorProvider>
  <MouseFollower />
  <CustomCursor />
  <ScrollToTop />
  <App />
</CursorProvider>
```

## 📱 Mobile Considerations

### Touch Device Optimizations
- **CustomCursor**: Disabled on touch devices to prevent conflicts
- **MouseFollower**: Reduced animations on mobile for battery optimization
- **Galaxy**: Simplified particle count on smaller screens
- **Performance**: Lighter animations to maintain smooth scrolling
