import React, { useEffect, useState } from 'react';
import './Contact.css';
import useReveal from '../hooks/useReveal';
import * as SimpleIcons from 'simple-icons';
import emailjs from '@emailjs/browser';
import zaloQR from '../img/zaloqr.jpg';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const containerRef = useReveal();
  const { lang } = useLanguage();
  const t = lang === 'vi' ? {
    contact: 'Liên hệ',
    description: 'Bạn có dự án thú vị? Hãy liên hệ với mình, mình luôn sẵn sàng hợp tác!',
    connect: 'Kết nối',
    connectText: 'Mình luôn sẵn sàng trao đổi về dự án mới, cơ hội hợp tác, hoặc đơn giản là trò chuyện về công nghệ. Đừng ngần ngại gửi tin nhắn!',
    email: 'Email',
    phone: 'Điện thoại',
    github: 'GitHub',
    location: 'Địa điểm',
    country: 'Việt Nam',
    qrCaption: 'Bạn có thể liên hệ với mình qua Zalo bằng cách quét mã QR này.'
  } : {
    contact: 'Contact',
    description: "Have an interesting project? Contact me, I'm always ready to collaborate!",
    connect: "Let's Connect",
    connectText: "I'm always open to discuss new projects, collaboration opportunities, or simply chat about technology. Don't hesitate to send a message!",
    email: 'Email',
    phone: 'Phone',
    github: 'GitHub',
    location: 'Location',
    country: 'Vietnam',
    qrCaption: 'You can contact me on Zalo by scanning this QR code.'
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Initialize EmailJS once with public key
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
    if (publicKey && !publicKey.startsWith('YOUR_')) {
      try {
        emailjs.init({ publicKey });
      } catch (e) {
        // no-op
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

    if (!serviceId || !templateId || !publicKey || serviceId.startsWith('YOUR_') || templateId.startsWith('YOUR_') || publicKey.startsWith('YOUR_')) {
      alert('Email service is not configured yet. Please set your EmailJS keys in .env.');
      return;
    }

    // Match your EmailJS template variables: {{name}}, {{email}}, {{message}}
    const templateParams = {
      // Common keys used across EmailJS templates
      name: formData.name,
      email: formData.email,
      message: formData.message,
      // Aliases to ensure Reply-To works regardless of template field names
      from_name: formData.name,
      reply_to: formData.email
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then(() => {
        alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert('Gửi thất bại. Vui lòng kiểm tra cấu hình EmailJS (Service ID, Template ID, Public Key) và thử lại.');
      });
  };

  const getIcon = (key) => {
    try {
      if (key === 'phone') {
        return { path: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l1.98-1.98a1 1 0 011.02-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1v3.25a1 1 0 01-1 1C11.04 21.99 2 12.96 2 2.99a1 1 0 011-1H6.25a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1 1 0 01-.24 1.02l-1.96 1.99z' };
      }
      const name = `si${key.charAt(0).toUpperCase() + key.slice(1)}`;
      const icon = SimpleIcons[name];
      if (icon && icon.path) return { path: icon.path };
    } catch { }
    return null;
  };

  const socialLinks = [
    { name: 'GitHub', key: 'github', url: 'https://github.com/kieuvanson' },
    { name: 'Email', key: 'gmail', url: 'mailto:sonkieuvan@gmail.com' },
    { name: 'Phone', key: 'phone', url: 'tel:0867859033' },
  ];

  return (
    <section id="contact" className="contact reveal section-divider" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <h2 className="section-title">{t.contact}</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">{t.description}</p>
        <div className="contact-content">
          <div className="contact-info" data-reveal data-delay="200ms">
            <h3 className="contact-subtitle">{t.connect}</h3>
            <p className="contact-text">{t.connectText}</p>
            <div className="contact-details">
              <div className="detail-item" data-reveal data-delay="250ms">
                <span className="detail-icon">
                  <svg className="contact-svg" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={getIcon('gmail')?.path || ''} />
                  </svg>
                </span>
                <div>
                  <h4>{t.email}</h4>
                  <a href="mailto:sonkieuvan@gmail.com" className="contact-link">sonkieuvan@gmail.com</a>
                </div>
              </div>
              <div className="detail-item" data-reveal data-delay="300ms">
                <span className="detail-icon">
                  <svg className="contact-svg" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={getIcon('phone')?.path || ''} />
                  </svg>
                </span>
                <div>
                  <h4>{t.phone}</h4>
                  <a href="tel:0867859033" className="contact-link">0867859033</a>
                </div>
              </div>
              <div className="detail-item" data-reveal data-delay="350ms">
                <span className="detail-icon">
                  <svg className="contact-svg" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={getIcon('github')?.path || ''} />
                  </svg>
                </span>
                <div>
                  <h4>{t.github}</h4>
                  <a href="https://github.com/kieuvanson" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/kieuvanson</a>
                </div>
              </div>
              <div className="detail-item" data-reveal data-delay="400ms">
                <span className="detail-icon">📍</span>
                <div>
                  <h4>{t.location}</h4>
                  <p>{t.country}</p>
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
                  <span className="social-icon">
                    <svg className="contact-svg" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d={getIcon(social.key)?.path || ''} />
                    </svg>
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form qr-block" data-reveal data-delay="250ms">
            <div className="form-group">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <img src={zaloQR} alt="Scan this Zalo QR code to contact me" style={{ width: '100%', maxWidth: '320px', borderRadius: '12px' }} />
                <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{t.qrCaption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer" data-reveal data-delay="600ms">
        <p>&copy; 2024 Kieu Van Son. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
