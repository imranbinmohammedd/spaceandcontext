import React from 'react';
import '../App.css';

export default function Study() {
  const programs = [
    { title: 'Professional Architecture', description: 'A comprehensive program for aspiring architects combining design theory with real-world practice.' },
    { title: 'Summer Intensive', description: 'A focused program for students seeking hands-on experience in community-based design.' },
    { title: 'Workshop Series', description: 'Specialized workshops covering sustainable design, community engagement, and advanced techniques.' },
    { title: 'Community Partnership', description: 'Collaborative programs developed with communities to address specific local needs.' }
  ];

  return (
    <main>
      <section className="study-section" style={{ paddingTop: '120px' }}>
        <div className="study-content">
          <div className="study-text">
            <h2>Services</h2>
            <p>
              Join our community of passionate architects and designers committed to making a difference. Our educational approach integrates rigorous academic training with real-world projects that matter to real communities.
            </p>
            <p>
              We believe that architects should be citizens first—deeply engaged with the places and people they serve. Our students work alongside experienced mentors on actual building projects that serve underserved communities.
            </p>
            <ul>
              <li>Hands-on project experience in real communities</li>
              <li>Mentorship from practicing architects and educators</li>
              <li>Focus on sustainable and ethical design practices</li>
              <li>Collaboration with community partners</li>
              <li>Development of technical and leadership skills</li>
              <li>Networking with architecture professionals</li>
            </ul>
          </div>
          <div className="study-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="Student learning"
            />
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="projects-title">
            <h2>Our Programs</h2>
            <p>Flexible educational pathways designed for different experience levels and goals</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            {programs.map((program, idx) => (
              <div key={idx} style={{ padding: '40px', background: '#f9f9f9', borderLeft: '3px solid #2c3e50' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>{program.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.7' }}>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
