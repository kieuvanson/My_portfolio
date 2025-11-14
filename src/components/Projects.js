import React, { useEffect } from 'react';
import './Projects.css';
import useReveal from '../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const containerRef = useReveal();
  const { lang } = useLanguage();
  const tt = lang === 'vi' ? {
    sectionTitle: 'Dự án của tôi',
    link: 'Xem mã nguồn / Nền tảng',
    footerText: 'Nếu bạn muốn xem toàn bộ dự án, hãy ghé trang GitHub của tôi.',
    footerCta: 'Tới GitHub cá nhân',
    category_backend: 'Backend E-Commerce',
    desc1: 'Backend cho NuiTeaCT: hệ thống API chuẩn REST, bảo mật JWT, thiết kế CSDL tối ưu.',
    labels: {
      languages: 'Ngôn ngữ',
      frameworks: 'Framework',
      database: 'Cơ sở dữ liệu'
    },
    hl: [
      'Xây dựng chuẩn RESTful API có khả năng mở rộng',
      'Tự động ghi lịch sử thay đổi sản phẩm (auditing)',
      'Bảo vệ API bằng middleware và JWT',
      'Tối ưu thiết kế lược đồ CSDL cho hiệu năng cao',
      'Xử lý lỗi và logging chi tiết'
    ]
  } : {
    sectionTitle: 'My project',
    link: 'Link to the platform',
    footerText: 'Want to see all of my projects? Visit my GitHub profile.',
    footerCta: 'Go to my GitHub',
    category_backend: 'E-Commerce Backend',
    desc1: 'NuiTeaCT backend: clean REST APIs, JWT security, optimized database design.',
    labels: {
      languages: 'Languages',
      frameworks: 'Frameworks',
      database: 'Database'
    },
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
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.55 }
    );

    const projectCards = document.querySelectorAll('[data-project-card]');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Website bán trà sữa online - NuiTea',
      description: tt.desc1,
      tech: ['React', 'ASP.NET Core', 'PostgreSQL', 'JWT', 'RESTful API'],
      languages: ['JavaScript', 'C#'],
      frameworks: ['React', '.NET'],
      database: ['PostgreSQL'],
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
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
                  <div className="stack-lines">
                    <div className="stack-line"><span className="stack-label">{tt.labels.languages}:</span> <span className="stack-values">{project.languages.join(', ')}</span></div>
                    <div className="stack-line"><span className="stack-label">{tt.labels.frameworks}:</span> <span className="stack-values">{project.frameworks.join(', ')}</span></div>
                    <div className="stack-line"><span className="stack-label">{tt.labels.database}:</span> <span className="stack-values">{project.database.join(', ')}</span></div>
                  </div>
                  <div className="stack-groups">
                    <div className="stack-group">
                      <span className="stack-group-label">{tt.labels.languages}</span>
                      <div className="stack-chips">
                        {project.languages.map((item, i) => (
                          <span key={`lang-${i}`} className="chip chip-lang">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="stack-group">
                      <span className="stack-group-label">{tt.labels.frameworks}</span>
                      <div className="stack-chips">
                        {project.frameworks.map((item, i) => (
                          <span key={`fw-${i}`} className="chip chip-fw">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="stack-group">
                      <span className="stack-group-label">{tt.labels.database}</span>
                      <div className="stack-chips">
                        {project.database.map((item, i) => (
                          <span key={`db-${i}`} className="chip chip-db">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
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
        <div className="projects-footer" data-reveal data-delay="200ms">
          <p className="projects-footer-text">{tt.footerText}</p>
          <a className="projects-footer-link" href="https://github.com/kieuvanson" target="_blank" rel="noopener noreferrer">{tt.footerCta}</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
