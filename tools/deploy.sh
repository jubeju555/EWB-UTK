#!/bin/bash

# EWB-UTK Website Deployment Script
# This script prepares your website for upload to UTK's web hosting

echo "🚀 Preparing EWB-UTK website for deployment..."

# Navigate to project root (script is in scripts/ folder)
cd "$(dirname "$0")/.."

# Build the production version
echo "📦 Building production version..."
npm run build

# Check build success
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo "📊 Website size: $(du -sh dist/ | cut -f1)"
    echo ""
    echo "📂 Files to upload to public_html:"
    echo "   • dist/index.html"
    echo "   • dist/assets/ (entire folder)"
    echo ""
    echo "🌐 EWB-UTK website will be available at:"
    echo "   http://volweb2.utk.edu/~ewb (if EWB has UTK account)"
    echo "   OR request: http://ewb.utk.edu (vanity domain)"
    echo ""
    echo "📋 Next steps for EWB-UTK deployment:"
    echo "   1. Contact OIT HelpDesk to set up EWB organization account"
    echo "   2. Request vanity domain: ewb.utk.edu or ewb-utk.utk.edu"
    echo "   3. Use FileZilla/WinSCP to connect to linux.oit.utk.edu"
    echo "   4. Upload contents of 'dist' folder to public_html directory"
    echo "   5. Set permissions: 755 for folders, 644 for files"
    echo "   6. Configure any necessary redirects"
    echo ""
    echo "💡 Recommended: Request ewb.utk.edu domain for professional appearance"
else
    echo "❌ Build failed. Check for errors above."
    exit 1
fi
