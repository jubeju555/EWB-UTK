# Engineers Without Borders - UTK Chapter Website

🌍 **Building sustainable engineering solutions for communities worldwide**

## 🚀 Quick Start

1. **Install dependencies**: `npm install`
2. **Start development**: `npm run dev`
3. **Build for production**: `npm run build`

## 🔄 **UPDATE WEBSITE WITH CHANGES**

**After editing any React components, run this command to deploy your changes:**

```bash
cp index-dev.html index.html; npm run build; cp dist/index.html . && cp dist/assets/* assets/
```

**What this does:**
1. `cp index-dev.html index.html` - Reset to clean HTML template
2. `npm run build` - Build your React code into optimized files  
3. `cp dist/index.html . && cp dist/assets/* assets/` - Deploy to public website

**Files you can edit:**
- `src/components/Hero.jsx` - Main landing section
- `src/components/About.jsx` - About section  
- `src/components/Projects.jsx` - Projects section
- `src/components/ExecBoard.jsx` - Team/Leadership section
- `src/components/GetInvolved.jsx` - Get Involved section
- `src/components/Footer.jsx` - Footer section

## 📁 Project Organization

```
📂 Current Working Directory
├── 📄 index.html              # 🌐 PUBLIC WEBSITE (live)
├── 📄 index-dev.html          # 🛠️ Development version
├── 📄 package.json            # 📦 Project dependencies
├── 📄 vite.config.js          # ⚙️ Build configuration
├── 📄 postcss.config.js       # 🎨 CSS processing
├── 📄 tailwind.config.js      # 💄 Styling framework
│
├── 📂 src/                    # 💻 React source code
├── 📂 public/                 # 📁 Static website assets
├── 📂 assets/                 # 🏗️ Built website files
├── 📂 node_modules/           # 📚 Installed packages
│
├── 📂 documentation-and-guides/     # 📖 All project docs
├── 📂 development-tools/            # 🔧 Scripts & utilities
├── 📂 configuration-files/          # ⚙️ Config archive
├── 📂 backup-and-archive/           # 💾 Backup files
└── 📂 legacy-theme-files/           # 📜 Old theme files
```

## 📚 Documentation

- **📖 Full documentation**: See `documentation-and-guides/` folder
- **🚀 Deployment guide**: `documentation-and-guides/DEPLOYMENT.md`
- **📋 Project structure**: `documentation-and-guides/PROJECT_STRUCTURE.md`

## 🔧 Development Tools

All scripts are in `development-tools/`:
- **📤 Deploy**: `./development-tools/deploy.sh`
- **🔄 Update**: `./development-tools/update-website.sh`
- **📊 Performance**: `./development-tools/check-performance.sh`

## 🌐 Live Website

**Public URL**: http://volweb2.utk.edu/~ewb/

---

*For detailed documentation, see the `documentation-and-guides/` folder*
