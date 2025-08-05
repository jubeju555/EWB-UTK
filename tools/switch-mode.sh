#!/bin/bash

# EWB-UTK Website Development Mode Script
# This script switches between public and development modes

MODE=${1:-"public"}

case $MODE in
    "dev"|"development")
        echo "🔧 Switching to Development Mode..."
        if [ -f "index-dev.html" ]; then
            mv index.html index-public.html 2>/dev/null
            mv index-dev.html index.html
            echo "✅ Development mode activated"
            echo "🚀 Run: npm run dev"
            echo "🌐 URL: http://localhost:5173/~ewb/"
        else
            echo "❌ Development index.html not found"
            exit 1
        fi
        ;;
    "public"|"production")
        echo "🌐 Switching to Public Mode..."
        if [ -f "index-public.html" ]; then
            mv index.html index-dev.html 2>/dev/null
            mv index-public.html index.html
            echo "✅ Public mode activated"
            echo "🌐 URL: http://volweb2.utk.edu/~ewb/"
        else
            echo "✅ Already in public mode"
        fi
        ;;
    *)
        echo "Usage: $0 [dev|public]"
        echo "  dev    - Switch to development mode"
        echo "  public - Switch to public mode (default)"
        exit 1
        ;;
esac
