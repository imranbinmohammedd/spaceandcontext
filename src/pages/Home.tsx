import React, { useState } from 'react';
import '../App.css';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Community Center Renovation',
      category: 'Community Spaces',
      description: 'Transforming a historic building into a vibrant community hub with sustainable design principles.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Rural Housing Project',
      category: 'Residential',
      description: 'Designing affordable, sustainable housing solutions for underserved rural communities.',
      image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Agricultural Education Center',
      category: 'Education',
      description: 'Building sustainable facilities that connect communities with agricultural innovation.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Water Infrastructure',
      category: 'Infrastructure',
      description: 'Engineering solutions for clean water access in remote areas.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Public Gathering Space',
      category: 'Public Space',
      description: 'Creating inclusive outdoor spaces that foster community connection and engagement.',
      image: 'https://images.unsplash.com/photo-1465014849326-f0cead9f96c6?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'School Expansion',
      category: 'Education',
      description: 'Expanding educational facilities to serve growing rural populations sustainably.',
      image: 'https://images.unsplash.com/photo-1427504494785-cdde41ad2186?w=600&h=400&fit=crop'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Community Voices: How Architecture Shapes Rural Futures',
      description: 'Exploring the intersection of design and community development in underserved regions.'
    },
    {
      id: 2,
      title: 'Sustainable Building Practices in Action',
      description: 'Our latest projects showcase innovative approaches to sustainable construction.'
    },
    {
      id: 3,
      title: 'Student Stories: Transforming Through Service',
      description: 'Hear from our students about how hands-on architectural work changed their perspective.'
    }
  ];

  return (
    <main style={{ paddingTop: 0 }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ marginTop: '-70px' }}>
        <div className="hero-bg">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=900&fit=crop"
            alt="Architecture and design"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="hero-fallback"></div>
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">SPACE & CONTEXT</h1>
          <p className="hero-subtitle">Designing for Community, Building for Change</p>

          <div className="scroll-indicator">
            <span>Scroll down</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 5%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', width: '100%' }}>
          <div style={{ padding: '60px' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 300, marginBottom: '25px', color: '#2c3e50', lineHeight: 1.2, letterSpacing: '-0.5px' }}>About Space & Context</h2>
            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.8, marginBottom: '35px' }}>Space & Context is an innovative architecture program dedicated to educating citizen architects who understand the profound relationship between design, community, and place. We believe that great architecture emerges from deep listening and genuine partnership with the communities we serve.</p>
            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.8, marginBottom: '35px' }}>Our work focuses on creating meaningful, sustainable solutions that address real needs in underserved communities, combining rigorous design thinking with community involvement and environmental responsibility.</p>
            <a href="/projects" style={{ display: 'inline-block', padding: '14px 40px', background: '#2c3e50', color: '#ffffff', textDecoration: 'none', fontWeight: 500, fontSize: '14px', letterSpacing: '0.5px', border: '2px solid #2c3e50', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2c3e50'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#2c3e50'; e.currentTarget.style.color = '#ffffff'; }}>View Our Projects</a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" alt="Team collaboration" style={{ width: '100%', height: 'auto', borderRadius: 0, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '120px 5%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 300, color: '#2c3e50', marginBottom: '15px', letterSpacing: '-0.5px' }}>Our Projects</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>Explore our portfolio of community-driven architectural projects creating lasting impact</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {projects.map((project) => (
              <div key={project.id} style={{ background: '#ffffff', overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid #f0f0f0' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '30px' }}>
                  <span style={{ display: 'inline-block', padding: '6px 14px', background: '#f0f0f0', color: '#444', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '15px' }}>{project.category}</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#2c3e50', marginBottom: '10px' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, marginBottom: '15px' }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Section */}
      <section style={{ padding: '120px 5%', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 300, marginBottom: '25px', color: '#2c3e50', lineHeight: 1.2 }}>Study With Us</h2>
            <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.8, marginBottom: '20px' }}>Join our community of passionate architects and designers committed to making a difference. Our educational approach integrates rigorous academic study with hands-on project experience.</p>
            <ul style={{ listStyle: 'none', margin: '30px 0' }}>
              {['Hands-on project experience in real communities', 'Mentorship from practicing architects', 'Focus on sustainable design practices', 'Collaboration with community partners', 'Development of technical and leadership skills'].map((item, idx) => (
                <li key={idx} style={{ fontSize: '1rem', color: '#666', padding: '12px 0', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#2c3e50', fontWeight: 'bold' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" alt="Student learning" style={{ width: '100%', borderRadius: 0, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section style={{ padding: '120px 5%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 300, color: '#2c3e50', textAlign: 'center', marginBottom: '80px', letterSpacing: '-0.5px' }}>News From The Field</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
            {news.map((item) => (
              <article key={item.id} style={{ padding: '40px', background: '#f9f9f9', borderLeft: '3px solid #2c3e50', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#2c3e50', marginBottom: '15px', lineHeight: 1.4 }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>{item.description}</p>
                <a href="#" style={{ color: '#2c3e50', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px', display: 'inline-block', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '120px 5%', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 300, color: '#2c3e50', marginBottom: '30px', letterSpacing: '-0.5px' }}>Get In Touch</h2>
          <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.8, marginBottom: '40px' }}>We'd love to hear from you. Whether you're interested in our work, want to partner with us, or wish to join our community, reach out today.</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', marginBottom: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#2c3e50', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Email</h3>
              <a href="mailto:info@spaceandcontext.org" style={{ color: '#666', textDecoration: 'none', fontSize: '1rem' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#2c3e50'; e.currentTarget.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; e.currentTarget.style.textDecoration = 'none'; }}>info@spaceandcontext.org</a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#2c3e50', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Phone</h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>+1 (555) 123-4567</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#2c3e50', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>Location</h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>West Alabama Region</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
            {['f', '@', '𝕏', 'in'].map((icon, idx) => (
              <a key={idx} href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: '#e5e5e5', borderRadius: '50%', color: '#2c3e50', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#2c3e50'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#e5e5e5'; e.currentTarget.style.color = '#2c3e50'; e.currentTarget.style.transform = 'translateY(0)'; }}>{icon}</a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
