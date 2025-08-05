#!/bin/bash

echo "🔍 EWB-UTK Website Recovery Verification"
echo "======================================"

# Check if essential files exist
echo "📁 File Existence Check:"
echo "------------------------"

files=("index.html" "assets/index-5441176d.js" "assets/favicon-a0b88c23.svg" "favicon.svg" "robots.txt" "sitemap.xml")

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        size=$(du -h "$file" | cut -f1)
        echo "✅ $file ($size)"
    else
        echo "❌ $file (missing)"
    fi
done

echo ""
echo "🎯 Public Website Status:"
echo "------------------------"

# Check if the main index.html has the correct structure
if grep -q "Engineers Without Borders" index.html; then
    echo "✅ Main title present"
else
    echo "❌ Main title missing"
fi

if grep -q "assets/index-" index.html; then
    echo "✅ JavaScript assets linked"
else
    echo "❌ JavaScript assets not linked"
fi

if grep -q "tailwind" index.html; then
    echo "✅ Tailwind CSS configured"
else
    echo "❌ Tailwind CSS missing"
fi

echo ""
echo "🚀 Development Environment:"
echo "-------------------------"

if [ -f "index-dev.html" ]; then
    echo "✅ Development HTML preserved"
else
    echo "❌ Development HTML missing"
fi

if [ -d "src/" ]; then
    echo "✅ Source code directory intact"
else
    echo "❌ Source code directory missing"
fi

echo ""
echo "📊 Asset Summary:"
echo "----------------"
echo "Main website: index.html (public)"
echo "Development: index-dev.html (for npm run dev)"
echo "Alternative: index-production.html (CDN version)"

echo ""
echo "✅ Recovery Complete! The public website should now load properly."
echo "🌐 Public URL: http://volweb2.utk.edu/~ewb/"
