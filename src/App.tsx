import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'projects', name: 'Projects' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Space and Context" />
        </div>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="close-btn" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <nav className="side-nav">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Dark overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}

      <main>
        {/* Homepage with Image Background (since video was not showing) */}
        <section id="home" className="hero-section">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1>Space and Context</h1>
            <p>Architecture that breathes meaning</p>
          </div>
        </section>

        {/* Other sections */}
        <section id="about" className="section about-section">
          <h2>About Us</h2>
          <p>Here you can add your firm’s story, values, team photos, etc.</p>
        </section>

        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <p>Showcase your best work here.</p>
        </section>

        <section id="portfolio" className="section portfolio-section">
          <h2>Portfolio</h2>
          <p>Gallery of your projects.</p>
        </section>

        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <p>Get in touch with us.</p>
        </section>
      </main>

      <footer>© 2025 Space and Context. All rights reserved.</footer>
    </>
  );
}

export default App;