# Context Directory

React context providers for global state management across the application, handling theme preferences and custom cursor interactions.

## 📋 Context Overview

| Context | Purpose | Key Features |
|---------|---------|-------------|
| `CursorContext` | Global cursor state management | Cursor variants, hover states, animations |
| `ThemeContext` | Theme switching and persistence | Light/dark modes, localStorage, system preferences |

## 🎯 CursorContext.jsx

**Purpose**: Manages global cursor state and interactions for the custom cursor system throughout the application.

**State Management**:
- Current cursor variant (default, pointer, text, loading)
- Hover state tracking for different UI elements
- Cursor position and movement data
- Animation states and transitions

**Key Features**:
- Context-based state sharing across all components
- Performance-optimized state updates
- Cursor variant management for different UI interactions
- Integration with mouse event handling

**Usage Pattern**:
```jsx
const { cursorVariant, setCursorVariant } = useCursorContext();

// Set cursor variant on hover
onMouseEnter={() => setCursorVariant('pointer')}
onMouseLeave={() => setCursorVariant('default')}
```

**Cursor Variants**:
- `default`: Standard cursor for general use
- `pointer`: Interactive elements (buttons, links)
- `text`: Text selection and input areas
- `loading`: Processing or loading states

## 🌓 ThemeContext.jsx

**Purpose**: Handles global theme state management with persistence and system preference detection.

**State Management**:
- Current theme (light, dark, system)
- Theme preference persistence in localStorage
- System theme detection and automatic switching
- Smooth transition management between themes

**Key Features**:
- Automatic system theme detection using `prefers-color-scheme`
- localStorage persistence for user preferences
- Smooth CSS transitions between theme states
- Context-based theme sharing across components

**Theme Integration**:
- CSS custom properties for color management
- Tailwind CSS dark mode utilities
- Component-level theme awareness
- Consistent styling across all elements

**Usage Pattern**:
```jsx
const { theme, toggleTheme, isDark } = useThemeContext();

// Toggle between light and dark themes
<button onClick={toggleTheme}>
  {isDark ? '☀️' : '🌙'}
</button>
```

## 🏗️ Provider Architecture

### Context Hierarchy
```jsx
<BrowserRouter>
  <ThemeProvider>
    <CursorProvider>
      <App />
    </CursorProvider>
  </ThemeProvider>
</BrowserRouter>
```

**Nesting Rationale**:
- `ThemeProvider` at the top level for global theme access
- `CursorProvider` nested inside to inherit theme context
- Both providers available throughout the entire application

### State Isolation
- **Theme State**: Independent theme management without cursor dependencies
- **Cursor State**: Can access theme context for theme-aware cursor styling
- **Performance**: Minimal re-renders through optimized context splitting

## 🚀 Performance Optimizations

### Context Splitting Strategy
- **Separate Contexts**: Theme and cursor contexts are isolated to prevent unnecessary re-renders
- **Selective Updates**: Components only re-render when their specific context changes
- **Memoization**: Context values are memoized to prevent object recreation

### State Update Optimization
```jsx
// Optimized context value creation
const contextValue = useMemo(() => ({
  theme,
  toggleTheme,
  isDark: theme === 'dark'
}), [theme]);
```

### LocalStorage Efficiency
- **Debounced Writes**: Theme changes are debounced to reduce localStorage writes
- **Error Handling**: Graceful fallback when localStorage is unavailable
- **Sync Handling**: Multi-tab synchronization for theme changes

## 🎨 Theme System Architecture

### CSS Custom Properties
```css
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --accent-color: #3b82f6;
}

[data-theme="dark"] {
  --background-color: #0f172a;
  --text-color: #f1f5f9;
  --accent-color: #60a5fa;
}
```

### Tailwind Integration
- Dark mode classes automatically applied based on theme context
- Custom color utilities using CSS variables
- Responsive design considerations for both themes

### Component Theme Awareness
```jsx
// Components can access theme state
const { isDark } = useThemeContext();
const bgClass = isDark ? 'bg-slate-900' : 'bg-white';
```

## 🎭 Cursor System Architecture

### Cursor Variant Management
```jsx
// Cursor variants with associated styles
const cursorVariants = {
  default: { scale: 1, opacity: 0.8 },
  pointer: { scale: 1.5, opacity: 1 },
  text: { scale: 0.8, opacity: 0.6 },
  loading: { scale: 1.2, opacity: 0.9, rotate: 360 }
};
```

### Event Handling Integration
- Global mouse move tracking for cursor position
- Element-specific hover state management
- Performance-optimized event listeners

### Animation System
- Smooth transitions between cursor variants
- CSS transform-based animations for performance
- Reduced motion support for accessibility

## 🔧 Development Guidelines

### Adding New Context Providers
1. **Create Provider Component**: Follow existing patterns for state and methods
2. **Add Custom Hook**: Provide convenient access to context values
3. **Update Provider Hierarchy**: Consider nesting order and dependencies
4. **Add TypeScript Types**: Define interfaces for context values and props
5. **Test Integration**: Ensure compatibility with existing contexts

### Context Value Optimization
```jsx
// Avoid object recreation on every render
const contextValue = useMemo(() => ({
  state,
  actions: {
    updateState,
    resetState
  }
}), [state]);
```

### Error Boundary Integration
- Context providers include error boundaries for graceful failure handling
- Fallback states for when context is unavailable
- Development warnings for improper context usage

## 📱 Responsive Considerations

### Theme Responsive Behavior
- **System Integration**: Respects system dark mode preferences
- **Auto-switching**: Automatic theme changes based on time or system settings
- **User Override**: Manual theme selection takes precedence over system

### Cursor Mobile Behavior
- **Touch Device Detection**: Cursor system disabled on touch devices
- **Performance**: Reduced animations on mobile for battery optimization
- **Fallback**: Standard cursor behavior when custom cursor is disabled

## 🧪 Testing Strategies

### Context Testing
```jsx
// Test context providers with custom render
const renderWithContext = (component, { theme = 'light' } = {}) => {
  return render(
    <ThemeProvider initialTheme={theme}>
      <CursorProvider>
        {component}
      </CursorProvider>
    </ThemeProvider>
  );
};
```

### Integration Testing
- **Cross-component Communication**: Test context sharing between components
- **State Persistence**: Verify localStorage integration
- **Performance Testing**: Monitor re-render frequency and optimization
- **Accessibility Testing**: Ensure theme changes don't break accessibility

## 🔍 Debugging and Monitoring

### Development Tools
```jsx
// Debug context values in development
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Theme Context:', { theme, isDark });
  }
}, [theme, isDark]);
```

### Performance Monitoring
- **Re-render Tracking**: Monitor unnecessary re-renders
- **Memory Usage**: Watch for memory leaks in context providers
- **Animation Performance**: Track cursor animation frame rates
- **Bundle Analysis**: Monitor context provider bundle impact
