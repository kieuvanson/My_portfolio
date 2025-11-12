import React from 'react';
import './Projects.css';
import useReveal from '../hooks/useReveal';

const Projects = () => {
  const containerRef = useReveal();
  const projects = [
    {
      title: 'NuiTeaCT – Backend API',
      description: 'Complete backend project for NuiTeaCT bubble tea shop. Developed full API system for: user login/registration, product management, orders, update history. Designed PostgreSQL database, secured with JWT, implemented standard RESTful API.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'RESTful API'],
      category: 'E-Commerce Backend',
      highlights: [
        'Created scalable RESTful API standards',
        'Automatic product change history logging (auditing system)',
        'API protection with middleware and JWT tokens',
        'Optimized database schema design for high performance',
        'Implemented detailed error handling and logging'
      ],
      github: 'https://github.com/kieuvanson/NuiTeaCT'
    }
  ];

  return (
    <section id="projects" className="projects reveal" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <span className="section-number">03</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">
          The main project I'm focusing on developing - a complete backend system for NuiTeaCT bubble tea shop.
          This is a real-world project with full e-commerce features.
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
                  <strong>Highlights:</strong>
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
                  View on GitHub
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

