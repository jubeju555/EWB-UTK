# Engineers Without Borders - UTK Chapter Website

A modern, interactive website for the Engineers Without Borders chapter at the University of Tennessee Knoxville. Built with React, featuring professional animations and responsive design.

## 🚀 Features

- **Modern React Architecture** - Built with React 18, Vite, and modern ES6+
- **Professional Animations** - Powered by Framer Motion and GSAP with React Bits-inspired components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Accessibility First** - WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **SEO Ready** - Meta tags, structured data, and Open Graph support

## 🎨 Design Features

### Interactive Text Animations
- **SplitText** - Character and word-level animations on scroll
- **RotatingText** - Smooth text rotation with stagger effects  
- **DecryptedText** - Matrix-style text decryption animations
- **CircularText** - Text arranged in circular patterns with hover effects
- **GlitchText** - Cyberpunk-style glitch effects

### Professional UI Components
- **Hero Section** - Dynamic background with floating elements
- **Project Showcase** - Interactive project cards with progress indicators
- **Team Profiles** - Animated member cards with contact information
- **Contact Forms** - Validated forms with smooth interactions
- **Navigation** - Sticky header with smooth scroll navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS with custom UTK branding
- **Animations**: Framer Motion, GSAP
- **Build Tool**: Vite
- **Icons**: Lucide React
- **3D Graphics**: Three.js (for advanced effects)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ewb-utk-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Project Structure

```
src/
├── components/
│   ├── animations/          # Reusable animation components
│   │   ├── SplitText.jsx
│   │   ├── RotatingText.jsx
│   │   ├── DecryptedText.jsx
│   │   ├── CircularText.jsx
│   │   └── GlitchText.jsx
│   └── sections/            # Page sections
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Projects.jsx
│       ├── GetInvolved.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── assets/                  # Static assets
├── utils/                   # Utility functions
├── App.jsx                  # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎨 Customization

### Colors
The site uses UTK's official brand colors:
- **Primary Orange**: #e87722
- **Dark Orange**: #d1651a
- **Light Orange**: #f58a3c

### Typography
- **Headings**: Poppins (display font)
- **Body**: Inter (readable font)
- **Code**: JetBrains Mono

### Animations
All animations are configurable through component props:
- Duration, delay, and easing
- Scroll triggers and thresholds
- Hover and click interactions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```env
VITE_API_URL=your_api_endpoint
VITE_CONTACT_EMAIL=ewb@utk.edu
VITE_ANALYTICS_ID=your_analytics_id
```

### Build Configuration
Modify `vite.config.js` for custom build settings:
```javascript
export default defineConfig({
  // Custom configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization
- High contrast mode support
- Focus indicators
- Skip to content links

## 🔍 SEO Optimization

- Meta tags and descriptions
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- Sitemap generation
- Robot.txt configuration

## 📈 Performance

- Lazy loading for images and components
- Code splitting for optimal bundle size
- Asset optimization and compression
- Critical CSS inlining
- Service worker for caching

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Build and test
npm run build
npm run preview
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import project from Git
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web server
3. Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 Content Management

### Adding New Projects
Edit `src/components/sections/Projects.jsx`:
- Add project data to `currentProjects` or `completedProjects` arrays
- Include images in the `public/images` directory

### Updating Team Members
Edit `src/components/sections/Contact.jsx`:
- Update the `teamMembers` array with current leadership
- Add member photos to `public/images/team/`

### Modifying Contact Information
Update contact details in:
- `src/components/sections/Contact.jsx`
- `src/components/sections/Header.jsx`
- `src/components/sections/Footer.jsx`

## 🔐 Security

- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS enforcement in production
- Content Security Policy headers
- Regular dependency updates

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Bits](https://reactbits.dev/) for animation inspiration
- [UTK Brand Guidelines](https://brand.utk.edu/) for official colors and fonts
- [Engineers Without Borders USA](https://www.ewb-usa.org/) for mission guidance
- All contributors and team members

## 📞 Support

For questions or support:
- Email: ewb@utk.edu
- Instagram: [@ewb_utk](https://instagram.com/ewb_utk)
- Meetings: Tuesdays 7:00 PM, Engineering Building Room 205

---

**Built with ❤️ by UTK Engineering Students**

