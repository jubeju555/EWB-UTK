#!/bin/bash

# Performance Check Script for EWB-UTK Website

echo "🔍 EWB-UTK Website Performance Check"
echo "======================================"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found. Run 'npm run build' first."
    exit 1
fi

echo "📊 Bundle Size Analysis:"
echo "------------------------"

# Get file sizes
css_size=$(du -h dist/assets/*.css | cut -f1)
js_main=$(du -h dist/assets/index-*.js | cut -f1)
js_vendor=$(du -h dist/assets/vendor-*.js | cut -f1)
js_animations=$(du -h dist/assets/animations-*.js | cut -f1)
total_assets=$(du -sh dist/assets/ | cut -f1)

echo "CSS:         $css_size"
echo "JS (main):   $js_main"
echo "JS (vendor): $js_vendor"
echo "JS (anim):   $js_animations"
echo "Total:       $total_assets"

# Calculate total JavaScript size in KB for comparison
js_total_kb=$(du -sk dist/assets/*.js | awk '{sum += $1} END {print sum}')

echo ""
echo "📈 Performance Metrics:"
echo "----------------------"

if [ $js_total_kb -lt 300 ]; then
    echo "✅ JavaScript bundle size: ${js_total_kb}KB (under 300KB target)"
else
    echo "⚠️  JavaScript bundle size: ${js_total_kb}KB (exceeds 300KB target)"
fi

# Check critical files
if [ -f "dist/index.html" ]; then
    echo "✅ Main HTML file exists"
else
    echo "❌ Main HTML file missing"
fi

if [ -f "dist/favicon.svg" ]; then
    echo "✅ Favicon exists"
else
    echo "❌ Favicon missing"
fi

if [ -f "dist/robots.txt" ]; then
    echo "✅ Robots.txt exists"
else
    echo "❌ Robots.txt missing"
fi

if [ -f "dist/sitemap.xml" ]; then
    echo "✅ Sitemap exists"
else
    echo "❌ Sitemap missing"
fi

echo ""
echo "🔧 Quick Deployment Check:"
echo "-------------------------"

# Check if all asset files have proper hashes (cache busting)
asset_count=$(ls dist/assets/ | wc -l)
if [ $asset_count -ge 3 ]; then
    echo "✅ Asset files have cache-busting hashes"
else
    echo "⚠️  Some asset files may be missing"
fi

# Check HTML for proper base path
if grep -q '/~ewb/' dist/index.html; then
    echo "✅ HTML has correct base path for UTK hosting"
else
    echo "⚠️  HTML may not have correct base path"
fi

echo ""
echo "🌐 Deployment URLs:"
echo "------------------"
echo "Development:  http://localhost:3000/~ewb/"
echo "Preview:      http://localhost:4173/~ewb/"
echo "Production:   http://volweb2.utk.edu/~ewb/"

echo ""
echo "📋 Manual Testing Checklist:"
echo "----------------------------"
echo "□ Open website in browser"
echo "□ Test mobile menu functionality"
echo "□ Verify smooth scrolling navigation"
echo "□ Check all contact links (email, Instagram)"
echo "□ Test form submission (opens email client)"
echo "□ Verify animations work smoothly"
echo "□ Check responsive design on mobile"
echo "□ Run Lighthouse audit (aim for 90+ in all categories)"

echo ""
echo "✅ Performance check complete!"
