# EWB-UTK Website Deployment Guide

This guide helps Engineers Without Borders UTK Chapter deploy their professional website to UTK's hosting infrastructure.

## 🎯 Target URLs

**Primary Goal:** `http://ewb.utk.edu` (recommended vanity domain)
**Fallback:** `http://volweb2.utk.edu/~ewb` (if EWB has UTK account)

## 📋 Prerequisites

### 1. UTK Account Setup
Contact **OIT HelpDesk** to:
- [ ] Create an organizational account for Engineers Without Borders UTK
- [ ] Request vanity domain: `ewb.utk.edu` or `ewb-utk.utk.edu`
- [ ] Set up `public_html` folder with proper permissions
- [ ] Configure any necessary database access (for future features)

**Contact Info:**
- **Email:** helpdesk@utk.edu
- **Phone:** (865) 974-9900
- **Online:** https://oit.utk.edu/helpdesk/

### 2. Required Information for OIT
When contacting OIT, provide:
- **Organization:** Engineers Without Borders - UTK Chapter
- **Purpose:** Student organization website
- **Requested Domain:** ewb.utk.edu
- **Faculty Sponsor:** [Insert faculty sponsor name]
- **Student Contact:** [Insert current president/webmaster]

## 🚀 Deployment Methods

### Method 1: Automated Deployment (Recommended)

#### Setup GitHub Repository
1. **Create GitHub Repository**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial EWB-UTK website"
   
   # Create repository on GitHub: ewb-utk/website
   git remote add origin https://github.com/ewb-utk/website.git
   git push -u origin main
   ```

2. **Configure GitHub Secrets** (in repository settings)
   - `UTK_USERNAME`: EWB's UTK account username
   - `UTK_PRIVATE_KEY`: SSH private key for automated deployment

3. **Enable GitHub Pages** (for preview/backup)
   - Go to Repository Settings → Pages
   - Source: GitHub Actions
   - Website will be available at: `https://ewb-utk.github.io/website`

#### Automatic Deployment Features
- ✅ **Build on every push** to main branch
- ✅ **Run tests and linting** to ensure quality
- ✅ **Deploy to GitHub Pages** for preview
- ✅ **Deploy to UTK servers** (when configured)
- ✅ **Store build artifacts** for manual deployment

### Method 2: Manual Deployment

#### Step 1: Build the Website
```bash
# Run the deployment script
./deploy.sh

# Or manually:
npm run build
```

#### Step 2: Upload to UTK Server
Use **FileZilla**, **WinSCP**, or **Cyberduck**:

**Connection Settings:**
- **Protocol:** SFTP
- **Host:** linux.oit.utk.edu
- **Port:** 22
- **Username:** [EWB UTK account]
- **Password:** [EWB UTK password]

**Upload Process:**
1. Navigate to `public_html` folder on server
2. Upload all contents from local `dist/` folder
3. Ensure structure:
   ```
   /home/ewb/public_html/
   ├── index.html
   └── assets/
       ├── index-[hash].css
       └── index-[hash].js
   ```

#### Step 3: Set Permissions
```bash
# Connect via SSH
ssh ewb@linux.oit.utk.edu

# Set correct permissions
chmod 755 ~/public_html
chmod 644 ~/public_html/index.html
chmod 755 ~/public_html/assets
chmod 644 ~/public_html/assets/*
```

## 🔧 Configuration Updates

### Update Base URL for UTK Hosting
The website is already configured for static hosting, but ensure proper asset paths:

**File: `vite.config.js`**
```javascript
export default defineConfig({
  // ... existing config
  base: '/', // For vanity domain (ewb.utk.edu)
  // base: '/~ewb/', // If using subdirectory hosting
})
```

### Environment Variables (if needed)
Create `.env.production`:
```env
VITE_API_URL=https://api.ewb.utk.edu
VITE_CONTACT_EMAIL=ewb@utk.edu
VITE_SITE_URL=https://ewb.utk.edu
```

## 📊 Monitoring and Updates

### Regular Updates
1. **Content Updates:** Edit React components and push to GitHub
2. **Automatic Deployment:** Changes deploy automatically via GitHub Actions
3. **Manual Override:** Use `./deploy.sh` for manual deployments

### Backup Strategy
- **GitHub Repository:** Source code backup
- **GitHub Pages:** Live backup at ewb-utk.github.io
- **UTK Server:** Production site
- **Build Artifacts:** 30-day retention on GitHub

## 🛠️ Maintenance

### Monthly Tasks
- [ ] Update dependencies: `npm update`
- [ ] Check for security updates: `npm audit`
- [ ] Test all animations and interactions
- [ ] Verify contact information is current
- [ ] Check broken links

### Semester Tasks
- [ ] Update team member information
- [ ] Add new project updates
- [ ] Update meeting times and locations
- [ ] Refresh event calendar

## 🚨 Troubleshooting

### Common Issues

**1. Permission Denied Errors**
```bash
# Fix permissions on UTK server
chmod 755 public_html
find public_html -type f -exec chmod 644 {} \;
find public_html -type d -exec chmod 755 {} \;
```

**2. Build Failures**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

**3. Broken Animations**
- Check browser console for JavaScript errors
- Verify GSAP and Framer Motion are loaded correctly
- Test on different browsers

**4. Mobile Responsiveness Issues**
- Test on actual devices
- Use browser developer tools
- Check Tailwind CSS breakpoints

## 📞 Support Contacts

### UTK Support
- **OIT HelpDesk:** helpdesk@utk.edu | (865) 974-9900
- **Web Hosting:** For technical server issues

### EWB-UTK Internal
- **Webmaster:** [Current webmaster contact]
- **President:** [Current president contact]
- **Faculty Advisor:** [Faculty advisor contact]

### Technical Support
- **GitHub Issues:** For code-related problems
- **React Documentation:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com

## 🎉 Success Checklist

After deployment, verify:
- [ ] Website loads at correct URL
- [ ] All animations work smoothly
- [ ] Contact forms function properly
- [ ] Mobile responsiveness works
- [ ] All links are functional
- [ ] SEO meta tags are correct
- [ ] Performance is optimal (< 3 second load time)

---

**🚀 Ready to deploy your professional EWB-UTK website!**

For questions or issues, contact the current webmaster or create an issue in the GitHub repository.
