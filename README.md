# Benjamin Liu - Futuristic Portfolio

A modern, interactive React portfolio showcasing full-stack development skills, AI/ML expertise, and impressive project achievements. Built with cutting-edge technologies and featuring stunning animations, cyber-inspired design, and responsive layouts.

## 🚀 Features

- **Futuristic Design**: Cyber-punk inspired UI with neon colors, glassmorphism effects, and animated particles
- **Interactive Animations**: Smooth scroll-triggered animations using Framer Motion
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Built with Vite for lightning-fast development and builds
- **Modern Tech Stack**: React 18, Tailwind CSS, Framer Motion, and more

## 🎯 Highlights

- **200% Client Growth**: Showcasing real business impact from current internship
- **86% ML Accuracy**: Demonstrating advanced AI/ML capabilities
- **Full-Stack Expertise**: React, Node.js, Python, cloud technologies
- **Research Experience**: Published research with 40+ attendees

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion, React Intersection Observer
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Styling**: Custom CSS with Tailwind utilities

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Automatic Deployment

```bash
npm run deploy
```

This command will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Make your site available at `https://besaliu.github.io`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Install gh-pages globally (if not already installed):
   ```bash
   npm install -g gh-pages
   ```

3. Deploy to GitHub Pages:
   ```bash
   gh-pages -d dist
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Hero.jsx         # Hero section with typewriter effect
│   ├── About.jsx        # About section with achievements
│   ├── Experience.jsx   # Work experience showcase
│   ├── Projects.jsx     # Featured projects
│   ├── Skills.jsx       # Technical skills with animations
│   ├── Contact.jsx      # Contact form and information
│   ├── Navigation.jsx   # Sticky navigation with smooth scroll
│   └── ParticleBackground.jsx # Animated particle system
├── App.jsx              # Main application component
├── main.jsx            # React entry point
└── index.css           # Global styles and Tailwind imports

public/
└── index.html          # HTML template

config files:
├── package.json        # Dependencies and scripts
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind customization
└── postcss.config.js  # PostCSS configuration
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- `cyber-blue`: #00D4FF
- `cyber-purple`: #6B46C1
- `cyber-pink`: #EC4899
- `cyber-green`: #10B981
- `dark-bg`: #0A0A0F
- `dark-card`: #1A1A2E

### Animations
Custom animations are defined in the Tailwind config and include:
- `float`: Floating effect for elements
- `glow`: Neon glow effect
- `typewriter`: Typewriter text animation
- `fadeIn`: Smooth fade-in transitions

### Content
Update content in the respective component files:
- Personal information: `src/components/Hero.jsx`
- Work experience: `src/components/Experience.jsx`
- Projects: `src/components/Projects.jsx`
- Skills: `src/components/Skills.jsx`

## 🔧 Configuration

### GitHub Pages Setup
1. Ensure your repository is named `username.github.io`
2. Update the `base` URL in `vite.config.js` if needed
3. Update the `homepage` field in `package.json`

### SEO Optimization
The portfolio includes:
- Semantic HTML structure
- Open Graph meta tags
- Descriptive page titles
- Alt text for images
- Proper heading hierarchy

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**: Ensure all dependencies are installed with `npm install`
2. **GitHub Pages not updating**: Check the Actions tab in your repository for deployment status
3. **Animations not working**: Ensure JavaScript is enabled in the browser
4. **Styling issues**: Clear browser cache and hard refresh

### Performance Optimization

- Images are optimized for web
- Components use React.memo for optimization
- Animations use transform properties for better performance
- Lazy loading implemented for off-screen content

## 📞 Contact

- **Email**: besaliu@ucsc.edu
- **Phone**: 707-779-8697
- **LinkedIn**: [linkedin.com/in/besaliu](https://linkedin.com/in/besaliu)
- **GitHub**: [github.com/besaliu](https://github.com/besaliu)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with React and modern web technologies
- Inspired by cyberpunk and futuristic design trends
- Animations powered by Framer Motion
- Icons provided by Lucide React

---

**Built with ❤️ and cutting-edge technology by Benjamin Liu** 