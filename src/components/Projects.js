import React, { useEffect } from 'react';
import './Projects.css';
import useReveal from '../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const containerRef = useReveal();
  const { lang } = useLanguage();
  const tt = lang === 'vi' ? {
    sectionTitle: 'Dự án tiêu biểu',
    link: 'Xem mã nguồn / Nền tảng',
    category_backend: 'Backend E-Commerce',
    desc1: 'Dự án backend hoàn chỉnh cho cửa hàng trà sữa NuiTeaCT. Phát triển hệ thống API đầy đủ: đăng nhập/đăng ký, quản lý sản phẩm, đơn hàng, lịch sử cập nhật. Thiết kế cơ sở dữ liệu PostgreSQL, bảo mật JWT, tuân thủ RESTful API.',
    hl: [
      'Xây dựng chuẩn RESTful API có khả năng mở rộng',
      'Tự động ghi lịch sử thay đổi sản phẩm (auditing)',
      'Bảo vệ API bằng middleware và JWT',
      'Tối ưu thiết kế lược đồ CSDL cho hiệu năng cao',
      'Xử lý lỗi và logging chi tiết'
    ]
  } : {
    sectionTitle: 'My best projects',
    link: 'Link to the platform',
    category_backend: 'E-Commerce Backend',
    desc1: 'Complete backend project for NuiTeaCT bubble tea shop. Developed full API system for: user login/registration, product management, orders, update history. Designed PostgreSQL database, secured with JWT, implemented standard RESTful API.',
    hl: [
      'Created scalable RESTful API standards',
      'Automatic product change history logging (auditing system)',
      'API protection with middleware and JWT tokens',
      'Optimized database schema design for high performance',
      'Implemented detailed error handling and logging'
    ]
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCard = entry.target.closest('.project-card');
            if (projectCard) {
              projectCard.classList.add('is-visible');
            }
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('[data-project-card]');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'NuiTeaCT – Backend API',
      description: tt.desc1,
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'RESTful API'],
      category: tt.category_backend,
      highlights: tt.hl,
      github: 'https://github.com/kieuvanson/NuiTeaCT',
      image: require('../img/Ảnh chụp màn hình 2025-08-14 224150.png')
    }
  ];

  return (
    <section id="projects" className="projects reveal section-divider" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <h2 className="section-title">{tt.sectionTitle}</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" data-reveal data-delay={`${100 + index*100}ms`}>
              <div className="project-layout" data-project-card>
                <div className="project-info-left">
                  <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
                  {project.github && (
                <a
                      href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                      {tt.link}
                    </a>
                  )}
                </div>
                <div className="project-laptop-right">
                  <div className="project-laptop">
                    <div className="laptop-screen">
                      <div className="screen-content">
                        <div className="browser-wrapper">
                          <div className="browser-bar">
                            <div className="browser-dots">
                              <span className="dot red"></span>
                              <span className="dot yellow"></span>
                              <span className="dot green"></span>
                            </div>
                            <div className="browser-url-bar">
                              <div className="browser-url-icon">🔒</div>
                              <div className="browser-url-text">localhost:3000</div>
                            </div>
                            <div className="browser-actions">
                              <button className="browser-action-btn">+</button>
                              <button className="browser-action-btn">□</button>
                              <button className="browser-action-btn">×</button>
                            </div>
                          </div>
                          <div className="browser-content">
                            {project.image ? (
                              <img src={project.image} alt={project.title} className="project-preview" />
                            ) : (
                              <div className="project-preview-placeholder">
                                <div className="content-grid">
                                  <div className="content-item"></div>
                                  <div className="content-item"></div>
                                  <div className="content-item"></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="laptop-base">
                      <div className="laptop-keyboard">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="keyboard-key"></div>
                        ))}
                      </div>
                      <div className="laptop-base-feet"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
