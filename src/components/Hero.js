import React from 'react';
import './Hero.css';
import useReveal from '../hooks/useReveal';

const Hero = () => {
  const containerRef = useReveal();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero reveal" ref={containerRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge" data-reveal data-delay="0ms">
            <span>Backend Developer</span>
          </div>
          <h1 className="hero-title" data-reveal data-delay="100ms">
            Xin chào, tôi là <span className="gradient-text">Kiều Vân Sơn</span>
          </h1>
          <p className="hero-description" data-reveal data-delay="200ms"> 
            Đam mê phát triển API, quản lý cơ sở dữ liệu và xây dựng các hệ thống backend ổn định, bảo mật, dễ mở rộng.
          </p>
          <div className="hero-buttons" data-reveal data-delay="300ms">
            <button className="btn-primary" onClick={scrollToContact}>
              Liên hệ với tôi
            </button>
            <a href="#projects" className="btn-secondary">
              Xem dự án
            </a>
          </div>
          <div className="hero-stats" data-reveal data-delay="400ms">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Năm học</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Dự án backend</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Đam mê công nghệ</div>
            </div>
          </div>
        </div>
        <div className="hero-visual" data-reveal data-delay="500ms">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
            </div>
            <div className="code-content">
              <pre>
{`const developer = {
  name: "Kiều Vân Sơn",
  role: "Backend Developer",
  education: "Học viện Phụ nữ Việt Nam - Năm 4",
  skills: [
    "Node.js", "Express.js", "PostgreSQL",
    "JWT Authentication", "RESTful API",
    "Git/GitHub", "Docker"
  ],
  passion: "Xây dựng hệ thống backend ổn định và bảo mật"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" data-reveal data-delay="700ms">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

