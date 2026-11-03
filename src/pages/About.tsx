const aboutParagraphs = [
  'Space & Context is an architecture, interior, engineering and construction practice working across the built environment.',
  'We believe architecture exists where space and context meet — where the physical qualities of a place connect with its people, culture, environment and purpose.',
  'Our work is driven by a simple ambition: to create spaces that are not only functional and technically resolved, but also capable of creating an emotional connection with the people who experience them.',
  'We bring together architectural thinking, technical understanding and construction knowledge to deliver solutions that are purposeful, contextual and enduring.',
];

export function AboutCopy() {
  return (
    <>
      {aboutParagraphs.map((paragraph) => (
        <p className="about-copy-paragraph" key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}

export function ApproachSection() {
  const approachSteps = [
    { title: 'Understand', description: 'People, place, programme and opportunity.' },
    { title: 'Research', description: 'Environmental, cultural and social context.' },
    { title: 'Interpret', description: 'Identify opportunities and develop the response.' },
    { title: 'Design', description: 'Explore spatial, material and experiential ideas.' },
    { title: 'Resolve', description: 'Integrate structure, services, cost and constructability.' },
    { title: 'Deliver', description: 'Documentation, tendering, construction and completion.' },
  ];

  return (
    <section className="about-approach" id="approach" aria-labelledby="approach-title">
      <div className="about-container">
        <p className="about-eyebrow">Our approach</p>
        <div className="approach-process-grid">
          <div className="approach-content">
            <div className="approach-heading">
              <h2 id="approach-title">From idea<br />to impact</h2>
              <p>
                Our design process is collaborative, iterative and grounded in context. It
                connects creative thinking with technical expertise and construction reality.
              </p>
            </div>
            <ol className="approach-steps">
              {approachSteps.map((step, index) => (
                <li className="approach-step" key={step.title}>
                  <span className="approach-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
          <img
            className="approach-image"
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
            alt="Contemporary brick architecture with carefully detailed openings"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  const philosophyElements = [
    {
      title: 'Place',
      description: 'Physical and cultural context.',
      icon: <svg viewBox="0 0 32 32" focusable="false"><path d="M16 28s10-9 10-17a10 10 0 1 0-20 0c0 8 10 17 10 17Z" /><circle cx="16" cy="11" r="3" /></svg>,
    },
    {
      title: 'People',
      description: 'Users and communities.',
      icon: <svg viewBox="0 0 32 32" focusable="false"><circle cx="12" cy="10" r="4" /><circle cx="22" cy="12" r="3" /><path d="M4 26v-2a8 8 0 0 1 16 0v2H4Z" /><path d="M21 19a6 6 0 0 1 7 6v1h-5" /></svg>,
    },
    {
      title: 'Purpose',
      description: 'Function and aspiration.',
      icon: <svg viewBox="0 0 32 32" focusable="false"><circle cx="16" cy="16" r="12" /><circle cx="16" cy="16" r="7" /><circle cx="16" cy="16" r="2" /></svg>,
    },
    {
      title: 'Performance',
      description: 'Sustainability and longevity.',
      icon: <svg viewBox="0 0 32 32" focusable="false"><path d="M27 5C16 5 7 9 7 19a7 7 0 0 0 7 7c10 0 13-10 13-21Z" /><path d="M5 28c5-7 10-12 18-17" /></svg>,
    },
  ];

  const values = [
    {
      title: 'Design',
      description: 'Creative. Contextual. Meaningful.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Architectural drawings on a design desk',
    },
    {
      title: 'Quality',
      description: 'Technical. Buildable. Lasting.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Carefully detailed contemporary interior',
    },
    {
      title: 'Trust',
      description: 'Transparent. Collaborative. Accountable.',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Sculptural architectural stairway',
    },
    {
      title: 'Professionalism',
      description: 'Ethical. Reliable. Future-focused.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=85',
      imageAlt: 'Modern building facade framed by trees',
    },
  ];

  return (
    <div className="about-page">
      <section className="about-intro" id="about" aria-labelledby="about-title">
        <div className="about-container">
          <p className="about-eyebrow">About us</p>
          <div className="about-intro-grid">
            <div className="about-intro-copy">
              <h1 id="about-title">Space &amp; Context</h1>
              <AboutCopy />
            </div>
            <figure className="about-intro-figure">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary home set into its landscape"
              />
              <figcaption>Architecture is a dialogue between people, place and time.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="about-philosophy" id="philosophy" aria-labelledby="philosophy-title">
        <div className="about-container">
          <p className="about-eyebrow">Our philosophy</p>
          <div className="philosophy-heading">
            <h2 id="philosophy-title">Space <span aria-hidden="true">×</span> Context</h2>
          </div>
          <div className="philosophy-intro-copy">
            <p className="philosophy-statement">Architecture does not exist in isolation.</p>
            <p>
              Every project begins with a relationship between place, people, purpose and
              performance.
            </p>
          </div>
          <dl className="philosophy-elements">
            {philosophyElements.map((element) => (
              <div className="philosophy-element" key={element.title}>
                <dt><span className="philosophy-icon" aria-hidden="true">{element.icon}</span>{element.title}</dt>
                <dd>{element.description}</dd>
              </div>
            ))}
          </dl>
          <p className="philosophy-summary">
            We study the physical, cultural, environmental and social conditions of each
            project and translate those influences into architectural decisions.
          </p>
        </div>
      </section>

      <ApproachSection />

      <section className="about-values" id="values" aria-labelledby="values-title">
        <div className="about-container">
          <p className="about-eyebrow">Our values</p>
          <h2 id="values-title">What guides us</h2>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-item" key={value.title}>
                <img src={value.image} alt={value.imageAlt} />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function About() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
