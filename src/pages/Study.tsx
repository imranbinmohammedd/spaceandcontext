export default function Study() {
  const services = [
    { title: 'Architecture', description: 'Design, owner planning, approvals, construction documentation.' },
    { title: 'Interiors', description: 'Spatial planning, materiality, lighting, the arts and furniture.' },
    { title: 'Engineering & Technical Coordination', description: 'Structural, M&P, specifications, buildability and consultant coordination.' },
    { title: 'Project Management', description: 'Planning, coordination, procurement, quality and reporting.' },
    { title: 'Construction & Project Delivery', description: 'Site supervision, contractor management, quality control and completion.' },
    { title: 'Cost Management', description: 'BOQ, estimation, tendering, cost control and value management.' },
  ];

  return (
    <main className="services-page">
      <section className="services-panel" aria-labelledby="services-title">
        <div className="services-image">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&h=1600&q=85"
            alt="Portrait view of a modern building framed by trees"
          />
        </div>
        <div className="services-content">
          <p className="services-eyebrow">Our services</p>
          <h1 id="services-title">Integrated Design<br />&amp; Delivery</h1>
          <p className="services-intro">
            From concept to completion, we offer a comprehensive range of services across
            the built environment.
          </p>
          <ol className="services-list">
            {services.map((service) => (
              <li className="services-item" key={service.title}>
                <span className="services-marker" aria-hidden="true" />
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
