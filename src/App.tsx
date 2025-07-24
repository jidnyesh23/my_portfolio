import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  useEffect(() => {
    // Set up SEO meta tags
    document.title = `${portfolioData.personal.name} - ${portfolioData.personal.title}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', portfolioData.personal.subtitle);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = portfolioData.personal.subtitle;
      document.head.appendChild(meta);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: `${portfolioData.personal.name} - ${portfolioData.personal.title}` },
      { property: 'og:description', content: portfolioData.personal.subtitle },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${portfolioData.personal.name} - ${portfolioData.personal.title}` },
      { name: 'twitter:description', content: portfolioData.personal.subtitle },
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"], meta[name="${tag.name}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": portfolioData.personal.name,
      "jobTitle": portfolioData.personal.title,
      "description": portfolioData.about,
      "email": portfolioData.personal.email,
      "telephone": portfolioData.personal.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": portfolioData.personal.location
      },
      "sameAs": [
        portfolioData.social.github,
        portfolioData.social.linkedin
      ],
      "knowsAbout": [
        "React.js",
        "JavaScript",
        "Node.js",
        "Full Stack Development",
        "Web Development",
        "AI Integration"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-poppins">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
