#!/bin/bash

# EWB-UTK Website Update Script
# Run this after making changes to React components

echo "🔄 Updating EWB-UTK Website..."

echo "📋 Step 1: Resetting HTML template..."
cp index-dev.html index.html

echo "🏗️ Step 2: Building React application..."
npm run build

if [ $? -eq 0 ]; then
    echo "📤 Step 3: Deploying to public website..."
    cp dist/index.html . && cp dist/assets/* assets/
    
    echo "✅ Website updated successfully!"
    echo "🌐 Live at: http://volweb2.utk.edu/~ewb/"
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi
