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
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
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
          <h2 className="section-title">Liên hệ</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">
          Có dự án thú vị? Hãy liên hệ với tôi, tôi luôn sẵn sàng hợp tác!
        </p>
        <div className="contact-content">
          <div className="contact-info" data-reveal data-delay="200ms">
            <h3 className="contact-subtitle">Hãy kết nối với tôi</h3>
            <p className="contact-text">
              Tôi luôn mở cửa để thảo luận về các dự án mới, cơ hội hợp tác hoặc 
              chỉ đơn giản là trò chuyện về công nghệ. Đừng ngần ngại gửi tin nhắn!
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
                  <h4>Số điện thoại</h4>
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
                  <h4>Địa chỉ</h4>
                  <p>Việt Nam</p>
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
              <label htmlFor="name">Tên của bạn</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nhập tên của bạn"
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
              <label htmlFor="message">Tin nhắn</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Nhập tin nhắn của bạn..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
      <footer className="footer" data-reveal data-delay="600ms">
        <p>&copy; 2024 Kiều Vân Sơn. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;

