import React from 'react';
import './Projects.css';
import useReveal from '../hooks/useReveal';

const Projects = () => {
  const containerRef = useReveal();
  const projects = [
    {
      title: 'NuiTeaCT – Backend API',
      description: 'Dự án backend hoàn chỉnh cho cửa hàng trà sữa NuiTeaCT. Phát triển toàn bộ hệ thống API quản lý: đăng nhập/đăng ký người dùng, quản lý sản phẩm, đơn hàng, lịch sử cập nhật. Thiết kế cơ sở dữ liệu PostgreSQL, bảo mật bằng JWT, triển khai RESTful API chuẩn.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'RESTful API'],
      category: 'E-Commerce Backend',
      highlights: [
        'Tạo RESTful API chuẩn với khả năng mở rộng cao',
        'Lưu lịch sử thay đổi sản phẩm tự động (auditing system)',
        'Kiểm tra và bảo vệ API bằng middleware và JWT token',
        'Thiết kế database schema tối ưu cho hiệu suất cao',
        'Triển khai error handling và logging chi tiết'
      ],
      github: 'https://github.com/kieuvanson/NuiTeaCT-Backend'
    }
  ];

  return (
    <section id="projects" className="projects reveal" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <span className="section-number">03</span>
          <h2 className="section-title">Dự án</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">
          Dự án chính mà tôi đang tập trung phát triển - hệ thống backend hoàn chỉnh cho cửa hàng trà sữa NuiTeaCT.
          Đây là dự án thực tế với đầy đủ tính năng thương mại điện tử.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" data-reveal data-delay={`${200 + index*150}ms`}>
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <div className="project-icon">💻</div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.highlights && (
                <div className="project-highlights">
                  <strong>Điểm nổi bật:</strong>
                  <ul>
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-footer">
                <a 
                  href={project.github || 'https://github.com/kieuvanson'} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Xem trên GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

