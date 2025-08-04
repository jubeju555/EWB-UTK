#!/bin/bash

# EWB-UTK GitHub Repository Setup Script
# This script helps set up the repository for automated deployment

echo "🏗️  Setting up EWB-UTK website repository..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    
    # Set up .gitignore to exclude sensitive files
    echo "📋 Creating .gitignore..."
    # .gitignore already exists, so we're good
    
    # Add all files for initial commit
    echo "📦 Adding files to repository..."
    git add .
    git commit -m "Initial commit: Professional EWB-UTK website with React animations

Features:
- Modern React 18 architecture with Vite
- Professional animations using Framer Motion and GSAP
- UTK branding with official colors
- Responsive design with Tailwind CSS
- Accessibility-first approach (WCAG 2.1 AA)
- SEO optimized with meta tags and structured data
- Contact forms and team member profiles
- Project showcase with current and completed projects
- Get involved section with membership information
- Automatic deployment via GitHub Actions
- Optimized for UTK hosting infrastructure

Ready for deployment to ewb.utk.edu"
    
    echo "✅ Git repository initialized!"
else
    echo "✅ Git repository already exists"
fi

# Check current status
echo ""
echo "📊 Repository Status:"
echo "   Files: $(git ls-files | wc -l) tracked files"
echo "   Size: $(du -sh . | cut -f1) total"
echo "   Built: $(du -sh dist/ 2>/dev/null | cut -f1 || echo 'Not built yet')"

echo ""
echo "🔗 Next Steps for EWB-UTK:"
echo ""
echo "1️⃣  Create GitHub Organization & Repository"
echo "   • Go to github.com"
echo "   • Create organization: 'ewb-utk'"
echo "   • Create repository: 'website'"
echo "   • Make it public for GitHub Pages"
echo ""
echo "2️⃣  Connect Local Repository to GitHub"
echo "   git remote add origin https://github.com/ewb-utk/website.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3️⃣  Configure GitHub Repository"
echo "   • Go to Settings → Pages"
echo "   • Source: GitHub Actions"
echo "   • Enable Actions in Actions tab"
echo ""
echo "4️⃣  Set Up UTK Deployment (Optional)"
echo "   • Get UTK account credentials for EWB"
echo "   • Add secrets in GitHub Settings → Secrets:"
echo "     - UTK_USERNAME: EWB's UTK account"
echo "     - UTK_PRIVATE_KEY: SSH private key"
echo ""
echo "5️⃣  Request UTK Domain"
echo "   • Contact OIT HelpDesk: helpdesk@utk.edu"
echo "   • Request vanity domain: ewb.utk.edu"
echo "   • Provide organization details and faculty sponsor"
echo ""
echo "🌐 After setup, your website will be available at:"
echo "   • Preview: https://ewb-utk.github.io/website"
echo "   • Production: https://ewb.utk.edu (after UTK setup)"
echo ""
echo "💡 Run './deploy.sh' anytime to build and check deployment readiness"
echo ""

# Check if we should run the deployment build
read -p "🚀 Would you like to build the website now? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📦 Building EWB-UTK website..."
    npm run build
    
    if [ -d "dist" ]; then
        echo "✅ Build successful!"
        echo "📊 Website ready for deployment ($(du -sh dist/ | cut -f1))"
    else
        echo "❌ Build failed. Check for errors above."
    fi
fi

echo ""
echo "🎉 EWB-UTK website setup complete!"
echo "📚 See DEPLOYMENT.md for detailed deployment instructions"
