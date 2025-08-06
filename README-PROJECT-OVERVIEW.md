# 🎓 EWB-UTK Website - Project Overview

## 📁 **FOLDER GUIDE FOR NON-DEVELOPERS**

This project is organized with descriptive folder names so anyone can understand what each part does:

### 📚 **documentation-and-guides/**
- **What it is:** All project documentation, setup guides, and README files
- **Who needs it:** New team members, people setting up the website, anyone deploying updates
- **Contains:** README files, deployment guides, project structure explanations

### 💻 **website-source-code/**
- **What it is:** The actual React code that makes the website work
- **Who needs it:** Developers, people editing website content, designers updating styles
- **Contains:** App.jsx, components, CSS files, JavaScript code

### 🌐 **static-assets/**
- **What it is:** Images, files, and assets served directly to website visitors
- **Who needs it:** Content creators, people adding images, SEO managers
- **Contains:** Photos, logos, download files, robots.txt, sitemap.xml

### 🏗️ **build-output/** *(auto-generated)*
- **What it is:** Final compiled website files ready for deployment
- **Who needs it:** People deploying to servers, developers testing builds
- **Contains:** Optimized HTML, CSS, JavaScript files (don't edit manually)

### 🔧 **development-tools/**
- **What it is:** Scripts and utilities for building, testing, and deploying
- **Who needs it:** Developers, people doing deployment, website maintenance
- **Contains:** deploy.sh, performance testing, automation scripts

### ⚙️ **configuration-files/**
- **What it is:** Settings that control how the website is built and behaves
- **Who needs it:** Advanced developers, people modifying build settings
- **Contains:** Vite config, ESLint rules, Tailwind settings, editor configs

### 📦 **backup-and-archive/**
- **What it is:** Old versions, backup files, and archived code for safety
- **Who needs it:** Developers reverting changes, anyone studying project history
- **Contains:** Backup HTML files, old config versions, previous component code

### 🏛️ **legacy-theme-files/**
- **What it is:** Original website files from before the React redesign
- **Who needs it:** Reference only, historical purposes
- **Contains:** Old CSS, JavaScript, and theme files (not used by current site)

---

## 🚀 **QUICK START**

### For New Team Members:
1. Read `documentation-and-guides/README.md` first
2. Check `documentation-and-guides/DEPLOYMENT.md` for setup instructions

### For Content Updates:
1. Edit files in `website-source-code/`
2. Test with development server
3. Build and deploy using `development-tools/`

### For Deployment:
1. Use scripts in `development-tools/`
2. Upload contents of `build-output/` to server

---

## ⚠️ **IMPORTANT NOTES**

- **Public website files:** `index.html` and core configs remain in root (required by hosting)
- **Don't edit:** Files in `build-output/` (auto-generated)
- **Keep safe:** Files in `backup-and-archive/` (for emergencies)
- **Get help:** Ask a developer before changing `configuration-files/`

---

## 📞 **WHO TO ASK FOR HELP**

- **Content/Images:** Anyone can edit `static-assets/` and some `website-source-code/`
- **Development:** Need JavaScript/React knowledge for `website-source-code/`
- **Deployment:** Use `development-tools/` scripts or ask developer
- **Build Issues:** Check `configuration-files/` or ask developer
- **Emergency:** Use `backup-and-archive/` files to restore previous versions
