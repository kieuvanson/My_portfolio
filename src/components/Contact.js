import React, { useState } from 'react';
import './Contact.css';
import useReveal from '../hooks/useReveal';

const Contact = () => {
  const containerRef = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting me! I will respond as soon as possible.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/kieuvanson' },
    { name: 'Email', icon: '✉️', url: 'mailto:sonkieuvan@gmail.com' },
    { name: 'Phone', icon: '📱', url: 'tel:0867859033' },
  ];

  return (
    <section id="contact" className="contact reveal" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <span className="section-number">04</span>
          <h2 className="section-title">Contact</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">
          Have an interesting project? Contact me, I'm always ready to collaborate!
        </p>
        <div className="contact-content">
          <div className="contact-info" data-reveal data-delay="200ms">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-text">
              I'm always open to discuss new projects, collaboration opportunities, or
              simply chat about technology. Don't hesitate to send a message!
            </p>
            <div className="contact-details">
              <div className="detail-item" data-reveal data-delay="250ms">
                <span className="detail-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sonkieuvan@gmail.com" className="contact-link">sonkieuvan@gmail.com</a>
                </div>
              </div>
              <div className="detail-item" data-reveal data-delay="300ms">
                <span className="detail-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:0867859033" className="contact-link">0867859033</a>
                </div>
              </div>
              <div className="detail-item" data-reveal data-delay="350ms">
                <span className="detail-icon">💻</span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/kieuvanson" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/kieuvanson</a>
                </div>
              </div>
              <div className="detail-item" data-reveal data-delay="400ms">
                <span className="detail-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Vietnam</p>
                </div>
              </div>
            </div>
            <div className="social-links" data-reveal data-delay="450ms">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} data-reveal data-delay="250ms">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="footer" data-reveal data-delay="600ms">
        <p>&copy; 2024 Kieu Van Son. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;

