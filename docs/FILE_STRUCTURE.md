# 🗂️ EWB-UTK Website File Structure

## 📋 Overview
This document explains the organized file structure for the Engineers Without Borders UTK website, making it easy for future team members to understand and maintain the codebase.

## 🌳 Directory Structure

```
EWB-UTK/
├── 📁 docs/                           # 📚 Documentation & Guides
│   ├── DEPLOYMENT.md                  # Step-by-step deployment instructions
│   ├── PACKAGE_DOCUMENTATION.md       # Dependencies and package info
│   ├── README.md                      # Main project documentation
│   └── LEGACY_README.pdf              # Original project PDF (archive)
│
├── 📁 config/                         # ⚙️ Configuration Files
│   ├── .eslintrc.json                 # Code quality and linting rules
│   ├── postcss.config.js              # CSS processing configuration
│   ├── tailwind.config.js             # Tailwind CSS customization
│   └── vite.config.js                 # Build tool and dev server config
│
├── 📁 scripts/                        # 🚀 Automation Scripts
│   ├── deploy.sh                      # Production deployment script
│   └── setup-repository.sh            # Initial repository setup
│
├── 📁 src/                            # 💻 Source Code (React Application)
│   ├── main.jsx                       # Application entry point
│   ├── App.jsx                        # Main app component
│   ├── index.css                      # Global styles
│   ├── 📁 components/                 # React components
│   │   ├── 📁 animations/             # Reusable animation components
│   │   │   ├── CircularText.jsx       # Circular text animations
│   │   │   ├── DecryptedText.jsx      # Matrix-style text effects
│   │   │   ├── GlitchText.jsx/.css    # Cyberpunk glitch effects
│   │   │   ├── RotatingText.jsx       # Smooth text rotation
│   │   │   └── SplitText.jsx          # Character-level animations
│   │   └── 📁 sections/               # Page section components
│   │       ├── Header.jsx             # Site navigation
│   │       ├── Hero.jsx               # Landing section
│   │       ├── About.jsx              # About EWB-UTK
│   │       ├── Projects.jsx           # Project showcase
│   │       ├── GetInvolved.jsx        # Membership information
│   │       ├── Contact.jsx            # Contact form
│   │       └── Footer.jsx             # Site footer
│
├── 📁 public/                         # 🌐 Public Assets
│   ├── 📁 images/                     # Website images
│   │   ├── 📁 interface/              # UI icons and graphics
│   │   └── 📁 nivo/                   # Theme-specific images
│   ├── 📁 fonts/                      # Custom web fonts (if any)
│   └── status.html                    # Deployment status page
│
├── 📁 assets-legacy/                  # 📦 Legacy Files (Archive)
│   ├── legacy-styles.css              # Old CSS styles (for reference)
│   └── 📁 library/                    # Original theme files
│
├── 📁 .github/                        # 🔄 GitHub Automation
│   └── 📁 workflows/                  # CI/CD automation scripts
│
├── 📁 dist/                           # 🏗️ Built Files (Generated)
│   ├── index.html                     # Production HTML
│   └── 📁 assets/                     # Optimized CSS, JS, images
│
├── index.html                         # 🏠 Main HTML template
├── package.json                       # 📦 Project dependencies
├── package-lock.json                  # 🔒 Dependency lock file
├── postcss.config.js                  # PostCSS configuration (root)
├── .gitignore                         # Git ignore rules
└── node_modules/                      # 📚 Installed packages (ignored)
```

## 📖 File Purpose Guide

### 🔑 Key Development Files
- **`src/main.jsx`** - Application entry point, renders React app
- **`src/App.jsx`** - Main component that assembles all sections
- **`src/index.css`** - Global styles and Tailwind imports
- **`index.html`** - HTML template with meta tags and initial structure

### ⚙️ Configuration Files (`config/`)
- **`vite.config.js`** - Build tool configuration (paths, optimization)
- **`tailwind.config.js`** - CSS framework customization (UTK colors)
- **`postcss.config.js`** - CSS processing (autoprefixer, etc.)
- **`.eslintrc.json`** - Code quality rules and linting

### 🚀 Scripts (`scripts/`)
- **`deploy.sh`** - Builds website and prepares for UTK hosting
- **`setup-repository.sh`** - Initializes Git repository and GitHub setup

### 📚 Documentation (`docs/`)
- **`README.md`** - Main project overview and setup instructions
- **`DEPLOYMENT.md`** - Detailed deployment guide for UTK hosting
- **`PACKAGE_DOCUMENTATION.md`** - Dependencies and build information

### 🎨 Assets
- **`public/images/`** - Static images used in the website
- **`assets-legacy/`** - Original theme files kept for reference
- **`dist/`** - Production build output (automatically generated)

## 🔄 Workflow for New Developers

### 1. Initial Setup
```bash
# Clone repository
git clone https://github.com/jubeju555/EWB-UTK.git
cd EWB-UTK

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Development Process
```bash
# Make changes to src/ files
# Test locally at http://localhost:3000

# Build for production
npm run build

# Test production build
npm run preview
```

### 3. Deployment
```bash
# Run deployment script
./scripts/deploy.sh

# Or deploy manually (see docs/DEPLOYMENT.md)
```

## 📝 Naming Conventions

### 📁 Folders
- `kebab-case` for folder names (`assets-legacy`, `src`)
- Descriptive names indicating purpose

### 📄 Files
- **React Components**: `PascalCase.jsx` (`Header.jsx`, `Hero.jsx`)
- **Scripts**: `kebab-case.sh` (`deploy.sh`, `setup-repository.sh`)
- **Config**: `lowercase.config.js` (`vite.config.js`, `tailwind.config.js`)
- **Documentation**: `UPPERCASE.md` (`README.md`, `DEPLOYMENT.md`)

### 🎯 Component Organization
- **Sections**: Page-level components (`Header`, `Hero`, `Footer`)
- **Animations**: Reusable animation components (`SplitText`, `GlitchText`)
- **Utils**: Helper functions and utilities (future)

## 🔧 Maintenance Notes

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Update documentation if significant

### Adding New Animations
1. Create component in `src/components/animations/`
2. Follow existing patterns (GSAP, Framer Motion)
3. Export from component for reuse

### Updating Styles
1. Use Tailwind classes when possible
2. Add custom styles to `src/index.css`
3. Update `config/tailwind.config.js` for new colors/utilities

### Configuration Changes
1. Update config files in `config/` directory
2. Test build process after changes
3. Update documentation if user-facing

## 🎯 Future Improvements
- Add `src/utils/` for helper functions
- Add `src/hooks/` for custom React hooks
- Add `src/assets/` for component-specific assets
- Add `tests/` for unit and integration tests
- Add `storybook/` for component documentation

---

**📞 Questions?** Check `docs/README.md` or contact current EWB-UTK webmaster.
