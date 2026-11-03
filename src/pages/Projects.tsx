export default function Projects() {
  const sectors = [
    {
      title: 'Residential',
      description: 'Villas, apartments, housing, communities.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&h=850&q=85',
      imageAlt: 'Contemporary residential villa',
    },
    {
      title: 'Commercial',
      description: 'Offices, retail, mixed-use.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&h=850&q=85',
      imageAlt: 'Modern commercial office buildings',
    },
    {
      title: 'Hospitality',
      description: 'Hotels, resorts, restaurants.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&h=850&q=85',
      imageAlt: 'Warm contemporary hospitality interior',
    },
    {
      title: 'Institutional',
      description: 'Education, healthcare, community.',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&h=850&q=85',
      imageAlt: 'Contemporary institutional architecture',
    },
    {
      title: 'Development & Masterplanning',
      description: 'Large developments.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&h=850&q=85',
      imageAlt: 'Aerial view of a planned development',
    },
    {
      title: 'Interiors',
      description: 'Residential, commercial, workplace, hospitality.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&h=850&q=85',
      imageAlt: 'Refined contemporary interior with natural materials',
    },
  ];

  return (
    <main className="portfolio-page">
      <section className="portfolio-section" aria-labelledby="portfolio-title">
        <div className="portfolio-container">
          <p className="portfolio-eyebrow">Our sectors</p>
          <h1 id="portfolio-title">Building for<br />diverse needs</h1>
          <p className="portfolio-intro">
            We work across a range of sectors, creating spaces that respond to different
            people, places and purposes.
          </p>
          <div className="portfolio-grid">
            {sectors.map((sector) => (
              <article className="portfolio-sector" key={sector.title}>
                <img src={sector.image} alt={sector.imageAlt} />
                <h2>{sector.title}</h2>
                <p>{sector.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
