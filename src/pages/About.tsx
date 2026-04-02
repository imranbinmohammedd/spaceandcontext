import React from 'react';
import '../App.css';

export default function About() {
  return (
    <main>
      <section id="about" className="content-section">
        <div className="section-content">
          <div className="section-text">
            <h2>About Space & Context</h2>
            <p>
              Space & Context is an innovative architecture program dedicated to educating citizen architects who understand the profound relationship between design, community, and place. We believe that great architecture emerges from deep listening and genuine partnership with the communities we serve.
            </p>
            <p>
              Founded on principles of sustainability, social responsibility, and excellent design, our program integrates rigorous academic study with hands-on project experience. We work directly in underserved communities to create meaningful, lasting solutions that address real needs.
            </p>
            <p>
              Our mission is to cultivate a new generation of architects who see design not just as aesthetic expression, but as a powerful tool for community empowerment and positive social change.
            </p>
            <a href="#projects" className="learn-more-btn">
              View Our Work
            </a>
          </div>
          <div className="section-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
              alt="Team collaboration"
            />
          </div>
        </div>
      </section>

      <section className="study-section">
        <div className="study-content">
          <div className="study-text">
            <h2>Our Core Values</h2>
            <p>
              Everything we do is guided by a commitment to ethical design and community partnership. We believe in:
            </p>
            <ul>
              <li><strong>Community Partnership</strong> - Working with, not for, the communities we serve</li>
              <li><strong>Sustainability</strong> - Creating solutions that protect and restore our environment</li>
              <li><strong>Equity</strong> - Ensuring design benefits reach those who need it most</li>
              <li><strong>Excellence</strong> - Maintaining the highest standards of design and craft</li>
              <li><strong>Education</strong> - Developing architects who understand design's social responsibility</li>
              <li><strong>Innovation</strong> - Exploring new approaches to persistent challenges</li>
            </ul>
          </div>
          <div className="study-image">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=500&fit=crop"
              alt="Architecture design"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
