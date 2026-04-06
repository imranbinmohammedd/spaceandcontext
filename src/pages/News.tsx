import React from 'react';
import '../App.css';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'Community Voices: How Architecture Shapes Rural Futures',
      date: 'March 15, 2026',
      description: 'A comprehensive exploration into how thoughtful design transforms rural communities and the voices of residents who co-create these spaces.'
    },
    {
      id: 2,
      title: 'Sustainable Building Practices in Action',
      date: 'March 10, 2026',
      description: 'Our latest projects showcase innovative approaches to sustainable construction, from passive design to locally-sourced materials.'
    },
    {
      id: 3,
      title: 'Student Stories: Transforming Through Service',
      date: 'March 5, 2026',
      description: 'Hear from our students about how hands-on architectural work changed their perspective and career trajectory.'
    },
    {
      id: 4,
      title: 'Award Recognition for Community-Centered Design',
      date: 'February 28, 2026',
      description: 'Several of our projects have received prestigious awards recognizing excellence in community engagement and sustainable design.'
    },
    {
      id: 5,
      title: 'New Partnership with Regional Communities',
      date: 'February 20, 2026',
      description: 'We are excited to announce new collaborations that will expand our reach and impact in underserved regions.'
    },
    {
      id: 6,
      title: 'Infrastructure Development: From Planning to Implementation',
      date: 'February 15, 2026',
      description: 'An in-depth look at our latest water and sanitation infrastructure project and its community benefits.'
    }
  ];

  return (
    <main>
      <section className="news-section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h2>Blog From The Field</h2>
          <div className="news-grid">
            {newsItems.map((item) => (
              <article key={item.id} className="news-item">
                <span style={{ color: '#999', fontSize: '0.85rem' }}>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="read-more">Read more</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
