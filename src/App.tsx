import { useState } from 'react';
import { HashRouter  as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Study from './pages/Study';
import News from './pages/News';
import Contact from './pages/Contact';

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Study with Us', path: '/study' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>
          <img src="/logo.svg" alt="Space & Context Logo" className="logo-image" />
          <span className="logo-title">Space & Context</span>
        </div>

        <nav className="main-nav desktop-only">
  {menuItems.map((item) => (
    <a
      key={item.name}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleNavigation(item.path);
      }}
    >
      {item.name}
    </a>
  ))}
</nav>

        <div
          className={`hamburger ${isMenuOpen ? 'hidden' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button
          className="close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <nav className="mobile-nav">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Dark overlay */}
      {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 500 }} />}
    </>
  );
}

function App() {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/study" element={<Study />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer style={{ background: '#2c3e50', color: '#ffffff', padding: '60px 5%', textAlign: 'center', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p>© 2026 Space & Context. All rights reserved.</p>
        <p style={{ marginTop: '10px', fontSize: '0.85rem', color: '#ccc' }}>Designing for communities, building for change.</p>
      </footer>
    </Router>
  );
}

export default App;