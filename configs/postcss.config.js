// PostCSS Configuration for EWB-UTK Website
// PostCSS processes CSS and applies transformations

export default {
  plugins: {
    // Process Tailwind CSS directives (@tailwind base, components, utilities)
    tailwindcss: {},
    
    // Automatically add vendor prefixes for browser compatibility
    // Ensures CSS works across all modern browsers
    autoprefixer: {},
  },
}
