import React, { useState } from 'react';
import '../App.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main>
      <section className="contact-section" style={{ paddingTop: '120px' }}>
        <div className="contact-content">
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you. Whether you're interested in our work, want to partner with us, or wish to join our community, reach out today.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="contact@spaceandcontext.com">co@spaceandcontext.com</a>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+91 9739341133</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>West Alabama Region<br />United States</p>
            </div>
          </div>

          <div style={{ marginTop: '60px', maxWidth: '600px', margin: '60px auto 0' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="learn-more-btn"
                style={{ padding: '14px 40px', fontSize: '1rem', alignSelf: 'center' }}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="social-links" style={{ marginTop: '60px' }}>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">@</a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
          </div>
        </div>
      </section>
    </main>
  );
}
