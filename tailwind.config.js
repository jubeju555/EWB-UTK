// Tailwind CSS Configuration for EWB-UTK Website
// This file customizes the utility-first CSS framework with UTK branding

/** @type {import('tailwindcss').Config} */
export default {
  // Specify which files to scan for CSS classes (for tree-shaking unused styles)
  content: [
    "./index.html",                    // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}",     // All source files (JavaScript, TypeScript, JSX, TSX)
  ],
  
  theme: {
    extend: {
      // Custom color palette for UTK and EWB branding
      colors: {
        // University of Tennessee Knoxville official colors
        utk: {
          orange: '#e87722',       // Primary UTK orange (main brand color)
          'orange-dark': '#d1651a', // Darker shade for hover states
          'orange-light': '#f58a3c', // Lighter shade for backgrounds
          smokey: '#58595b',        // UTK Smokey gray
          white: '#ffffff',         // Pure white
          black: '#000000',         // Pure black
        },
        // Engineers Without Borders complementary colors
        ewb: {
          blue: '#1e40af',    // Professional blue for accents
          green: '#059669',   // Growth/sustainability green
          earth: '#92400e',   // Earth tone brown
        }
      },
      
      // Custom font families (loaded via Google Fonts or locally)
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],        // Body text (readable)
        'display': ['Poppins', 'system-ui', 'sans-serif'],   // Headlines (modern)
        'mono': ['JetBrains Mono', 'monospace'],             // Code/technical content
      },
      
      // Custom animations for enhanced user experience
      animation: {
        'bounce-slow': 'bounce 3s infinite',      // Slow bounce for subtle movement
        'pulse-slow': 'pulse 4s infinite',        // Slow pulse for breathing effects
        'float': 'float 6s ease-in-out infinite', // Custom floating animation
      },
      
      // Define custom keyframe animations
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },   // Start and end position
          '50%': { transform: 'translateY(-20px)' },      // Middle position (floating up)
        }
      },
      
      // Custom background patterns and gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Subtle dot pattern for hero sections (low opacity UTK orange)
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e87722' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }
    },
  },
  
  // Plugins extend Tailwind's functionality (none currently used)
  plugins: [],
}
