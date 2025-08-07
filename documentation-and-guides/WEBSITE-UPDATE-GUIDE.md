# Website Update & Deployment Guide

## 🔄 **Quick Update Command**

After making any changes to React components, run this single command:

```bash
cp index-dev.html index.html; npm run build; cp dist/index.html . && cp dist/assets/* assets/
```

## 📝 **Step-by-Step Explanation**

### Step 1: Reset HTML Template
```bash
cp index-dev.html index.html
```
**Why:** Ensures we start with a clean HTML template without old asset references that can cause build errors.

### Step 2: Build React Application
```bash
npm run build
```
**What it does:**
- Compiles your React components into optimized JavaScript
- Processes CSS and other assets
- Creates production-ready files in `dist/` folder
- Generates new filenames with cache-busting hashes

### Step 3: Deploy to Public Website
```bash
cp dist/index.html . && cp dist/assets/* assets/
```
**What it does:**
- Copies the built HTML file to your public directory
- Copies all compiled assets (JS, CSS) to the `assets/` folder
- Makes your changes live on http://volweb2.utk.edu/~ewb/

## 🎯 **Files You Can Edit**

### Main Content Sections
- **`src/components/Hero.jsx`** - Landing page banner and title
- **`src/components/About.jsx`** - About Us section
- **`src/components/Projects.jsx`** - Projects showcase
- **`src/components/ExecBoard.jsx`** - Executive board/team members
- **`src/components/GetInvolved.jsx`** - Contact and join information
- **`src/components/Footer.jsx`** - Footer links and info

### Navigation & Layout
- **`src/components/sections/Header.jsx`** - Top navigation menu
- **`src/App.jsx`** - Overall page structure and routing

## 🚨 **Troubleshooting**

### Build Errors About Missing Assets
If you get errors like "failed to resolve import", run:
```bash
cp index-dev.html index.html
```
Then try building again.

### Website Not Updating
1. **Hard refresh your browser:** `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache** for the site
3. **Check asset filename** in `index.html` matches what's in `assets/` folder

### Cache Issues
The `.htaccess` file prevents most caching issues, but if needed:
```bash
# Check what JavaScript file is being loaded
grep "index-.*\.js" index.html

# Check if that file exists in assets/
ls -la assets/index-*.js
```

## 📁 **File Structure After Build**

```
📂 public_html/
├── 📄 index.html              # 🌐 Live website HTML
├── 📄 index-dev.html          # 🛠️ Clean template
├── 📂 assets/                 # 🏗️ Built website files
│   ├── index-[hash].js        # ← Main React application
│   ├── index-[hash].css       # ← Compiled styles
│   └── ...other assets
├── 📂 dist/                   # 📦 Fresh build output
└── 📂 src/                    # 💻 Your editable React code
```

## 🎯 **Quick Reference**

**Make changes → Run command → Website updated!**

```bash
# The magic command:
cp index-dev.html index.html; npm run build; cp dist/index.html . && cp dist/assets/* assets/
```

**Website URL:** http://volweb2.utk.edu/~ewb/
