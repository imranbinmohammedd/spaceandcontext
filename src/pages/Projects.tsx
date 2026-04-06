import React from 'react';
import '../App.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Community Center Renovation',
      category: 'Community Spaces',
      description: 'Transforming a historic building into a vibrant community hub featuring sustainable design principles, improved accessibility, and modern amenities while preserving architectural heritage.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Rural Housing Project',
      category: 'Residential',
      description: 'Designing affordable, sustainable housing solutions for underserved rural communities using locally sourced materials and passive design strategies.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Agricultural Education Center',
      category: 'Education',
      description: 'Building sustainable facilities that connect communities with agricultural innovation, featuring hands-on learning spaces and agricultural demonstration areas.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Water Infrastructure Project',
      category: 'Infrastructure',
      description: 'Engineering sustainable solutions for clean water access in remote areas, integrating community input into technical design processes.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Public Gathering Space',
      category: 'Public Space',
      description: 'Creating inclusive outdoor spaces that foster community connection and engagement, designed for cultural events and social gatherings.',
      image: 'https://images.unsplash.com/photo-1465014849326-f0cead9f96c6?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'School Expansion',
      category: 'Education',
      description: 'Expanding educational facilities to serve growing rural populations sustainably with flexible learning spaces and environmental literacy integration.',
      image: 'https://images.unsplash.com/photo-1427504494785-cdde41ad2186?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Health Clinic Facility',
      category: 'Healthcare',
      description: 'Designing accessible healthcare facilities tailored to rural needs with emphasis on patient-centered design and community wellness.',
      image: 'https://images.unsplash.com/photo-1576091160550-112405c3e141?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Community Garden',
      category: 'Environmental',
      description: 'Creating green spaces that promote food security and community health through participatory design and sustainable agriculture practices.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop'
    }
  ];

  return (
    <main>
      <section className="projects-section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="projects-title">
            <h2>Portfolio</h2>
            <p>Explore our portfolio of community-driven architectural projects creating lasting impact in rural communities</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
