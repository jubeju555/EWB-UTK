# Package.json Documentation

## Project Configuration for EWB-UTK Website

### Project Metadata
- **name**: "ewb-utk-website" - Project identifier for npm
- **version**: "1.0.0" - Semantic versioning (MAJOR.MINOR.PATCH)
- **description**: Full project description for SEO and package managers
- **type**: "module" - Enables ES6 import/export syntax

### Build Scripts
- **dev**: `vite` - Starts development server with hot reload on port 3000
- **build**: `vite build` - Creates optimized production build in dist/ folder
- **preview**: `vite preview` - Serves built files locally for testing
- **lint**: `eslint...` - Checks code quality, reports unused variables, max 0 warnings

### Core Dependencies (Production)
- **react**: 18.2.0 - Main UI library
- **react-dom**: 18.2.0 - DOM rendering for React
- **framer-motion**: 10.16.5 - Advanced animations and transitions
- **gsap**: 3.12.2 - Professional animation library for text effects
- **matter-js**: 0.19.0 - Physics engine for interactive elements
- **three**: 0.158.0 - 3D graphics library
- **@react-three/fiber**: 8.15.11 - React renderer for Three.js
- **@react-three/drei**: 9.88.13 - Helper components for Three.js
- **lucide-react**: 0.294.0 - Icon library (lightweight, customizable)

### Development Dependencies
- **@vitejs/plugin-react**: 4.1.1 - Vite plugin for React support
- **tailwindcss**: 3.3.6 - Utility-first CSS framework
- **autoprefixer**: 10.4.16 - Automatically adds vendor prefixes
- **postcss**: 8.4.32 - CSS post-processor
- **eslint**: 8.53.0 - JavaScript linter for code quality
- **eslint-plugin-react**: 7.33.2 - React-specific linting rules
- **eslint-plugin-react-hooks**: 4.6.0 - Hooks linting rules
- **eslint-plugin-react-refresh**: 0.4.4 - Hot reload linting
- **vite**: 4.5.0 - Fast build tool and dev server

### Package Size Analysis
**Total Build Size**: 464KB
- CSS: 34KB (6.36KB gzipped)
- JavaScript: 413KB (140.84KB gzipped)
- HTML: 9.6KB (3.97KB gzipped)

**Efficiency Notes**:
- Excellent compression ratio (67% reduction)
- Code splitting and tree shaking enabled
- All dependencies are production-optimized
- No unnecessary dependencies included
