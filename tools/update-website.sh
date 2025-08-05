#!/bin/bash

# EWB-UTK Website Update Script
# Run this script after making changes to update both GitHub and the live website

echo "🔄 Updating EWB-UTK Website..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the correct directory. Please run from project root."
    exit 1
fi

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

# Deploy to public directory (live website)
echo "🚀 Deploying to live website..."
cp -r dist/* .

# Save to GitHub
echo "📁 Saving changes to GitHub..."
git add .
git commit -m "Update website: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# Verify deployment
if [ -f "index.html" ]; then
    echo "✅ Website updated successfully!"
    echo "🌐 Live website: http://volweb2.utk.edu/~ewb/"
    echo "📂 GitHub repo: https://github.com/jubeju555/EWB-UTK.git"
    echo ""
    echo "📊 Updated files:"
    ls -la assets/ | head -5
else
    echo "❌ Deployment failed!"
    exit 1
fi

echo "🎉 Update complete! Both live website and GitHub are updated."
