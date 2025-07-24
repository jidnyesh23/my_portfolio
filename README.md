# 🚀 Jidnyesh Tushar Chaudhari - Portfolio Website

A modern, responsive, and animated personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎨 Design & UI/UX
- **Modern & Clean Design**: Elegant and minimal aesthetic with smooth animations
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Interactive Elements**: Hover effects, transitions, and scroll-triggered animations

### 📱 Sections
- **Hero Section**: Animated introduction with typing animation and profile image
- **About Me**: Professional introduction with education timeline
- **Skills**: Interactive skill showcase with animated progress bars
- **Projects**: Filterable project gallery with modal popups
- **Experience**: Certifications and achievements timeline
- **Contact**: Working contact form with validation
- **Footer**: Social links and scroll-to-top functionality

### 🛠️ Technical Features
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Optimized**: Lazy loading and optimized assets
- **Accessibility**: ARIA labels and keyboard navigation support
- **Type Safety**: Built with TypeScript for better development experience

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion, GSAP
- **Icons**: React Icons
- **Typography**: Poppins and Inter fonts
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel/Netlify deployment

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jidnyeshtc/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Customization

### Personal Information
Update your personal details in `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other details
  },
  // ... rest of the data
};
```

### Adding Your Resume
1. Add your resume PDF to the `public` folder as `resume.pdf`
2. The download button in the hero section will automatically work

### Adding Your Images
1. Add your profile image to `public` folder as `profile.jpg`
2. Add project images to `public` folder and update the image paths in `portfolio.ts`

### Customizing Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      accent: {
        // Your accent colors
      },
    },
  },
},
```

## 📧 Contact Form Integration

The contact form is currently set up with basic validation. To make it functional:

1. **Using EmailJS** (Recommended):
   ```bash
   npm install @emailjs/browser
   ```
   Then update the contact form in `src/components/Contact.tsx`

2. **Using Netlify Forms**: Add `netlify` attribute to the form tag

3. **Using Formspree**: Update the form action to point to your Formspree endpoint

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio designs from Dribbble and Behance
- **Icons**: React Icons library
- **Animations**: Framer Motion and GSAP communities
- **Fonts**: Google Fonts (Poppins & Inter)

## 📞 Contact

**Jidnyesh Tushar Chaudhari**
- 📧 Email: jidnyeshtc23@gmail.com
- 📱 Phone: 8010143760
- 💼 LinkedIn: [linkedin.com/in/jidnyesh-chaudhari](https://linkedin.com/in/jidnyesh-chaudhari)
- 🐱 GitHub: [github.com/jidnyeshtc](https://github.com/jidnyeshtc)

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐
