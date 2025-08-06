# 🎯 Quick Start Guide for New EWB-UTK Developers

## 🚀 Getting Started in 5 Minutes

### 1. **Clone & Setup** ⏱️ ~2 minutes
```bash
git clone https://github.com/jubeju555/EWB-UTK.git
cd EWB-UTK
npm install
```

### 2. **Start Development** ⏱️ ~30 seconds
```bash
npm run dev
# Website opens at http://localhost:3000
```

### 3. **Understanding the Structure** ⏱️ ~2 minutes

**🔧 Want to edit the website?** → Go to `src/components/sections/`
- `Hero.jsx` - Landing page banner
- `About.jsx` - About EWB-UTK section  
- `Projects.jsx` - Project showcase
- `Contact.jsx` - Contact form

**🎨 Want to add animations?** → Check `src/components/animations/`
- `SplitText.jsx` - Character animations
- `GlitchText.jsx` - Cool cyberpunk effects
- `RotatingText.jsx` - Smooth text rotation

**📝 Need to update docs?** → Edit files in `docs/`

**⚙️ Need to change config?** → Files in `config/`

**🚀 Ready to deploy?** → Run `./scripts/deploy.sh`

---

## 📁 What Each Folder Does

| Folder | Purpose | When to Use |
|--------|---------|-------------|
| 📁 `src/` | Website code | Making website changes |
| 📁 `docs/` | Documentation | Reading guides, updating docs |
| 📁 `config/` | Settings | Changing build settings |  
| 📁 `scripts/` | Automation | Deploying to production |
| 📁 `public/` | Static files | Adding images, assets |
| 📁 `assets-legacy/` | Old files | Reference only (don't edit) |

---

## ⚡ Common Tasks

### 🎨 Adding a New Page Section
1. Create `NewSection.jsx` in `src/components/sections/`
2. Add to `src/App.jsx`:
   ```jsx
   import NewSection from './components/sections/NewSection'
   // Add <NewSection /> to the JSX
   ```

### 🖼️ Adding Images
1. Put image in `public/images/`
2. Use in component: `<img src="/images/your-image.jpg" />`

### 🎭 Adding Cool Animations
1. Copy pattern from existing animation component
2. Use GSAP or Framer Motion (already installed)
3. Import and use in any section

### 🚀 Publishing Changes
```bash
npm run build          # Test the build
./scripts/deploy.sh     # Deploy to UTK hosting
git add .               # Save to GitHub
git commit -m "Update: description"
git push
```

---

## 🆘 Troubleshooting

**❌ Build fails?**
- Check for typos in JSX files
- Make sure all imports are correct
- Run `npm install` if dependencies missing

**❌ Website not updating?**
- Hard refresh: `Ctrl + F5`
- Check if you're editing the right file in `src/`
- Restart dev server: `Ctrl + C`, then `npm run dev`

**❌ Scripts not working?**
- Make sure you're in the project root folder
- Check file permissions: `chmod +x scripts/*.sh`

---

## 📞 Getting Help

1. **File Structure**: Read [`docs/FILE_STRUCTURE.md`](./FILE_STRUCTURE.md)
2. **Deployment**: Read [`docs/DEPLOYMENT.md`](./DEPLOYMENT.md)
3. **Full Guide**: Read [`docs/README.md`](./README.md)
4. **Issues**: Ask current EWB-UTK webmaster
5. **Emergency**: Check website status at `/status.html`

---

**🎉 You're ready to start building awesome stuff for EWB-UTK!**
