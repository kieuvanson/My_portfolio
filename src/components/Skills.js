import React from 'react';
import './Skills.css';
import useReveal from '../hooks/useReveal';

const Skills = () => {
  const containerRef = useReveal();
  const skillCategories = [
    {
      title: 'Ngôn ngữ lập trình',
      skills: [
        { name: 'JavaScript', icon: '🟨', description: 'Ngôn ngữ chính cho web development' },
        { name: 'Java', icon: '☕', description: 'Object-oriented programming language' },
        { name: 'C++', icon: '⚙️', description: 'Systems programming language' },
        { name: 'SQL', icon: '🗄️', description: 'Database querying' },
        { name: 'Bash/Shell', icon: '💻', description: 'System scripting' },
      ]
    },
    {
      title: 'Backend Frameworks',
      skills: [
        { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime' },
        { name: 'Express.js', icon: '🚀', description: 'Web framework cho Node.js' },
        { name: 'Spring Boot', icon: '🌱', description: 'Java web framework' },
        { name: 'Qt', icon: '🔧', description: 'C++ GUI framework' },
      ]
    },
    {
      title: 'Cơ sở dữ liệu',
      skills: [
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced relational database' },
        { name: 'MySQL', icon: '🦭', description: 'Popular relational database' },
        { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database' },
        { name: 'Redis', icon: '🔴', description: 'In-memory data structure store' },
      ]
    },
    {
      title: 'Công cụ & DevOps',
      skills: [
        { name: 'Git', icon: '📚', description: 'Version control system' },
        { name: 'Docker', icon: '🐳', description: 'Containerization platform' },
        { name: 'AWS', icon: '☁️', description: 'Cloud computing platform' },
        { name: 'Linux', icon: '🐧', description: 'Operating system' },
        { name: 'Postman', icon: '📮', description: 'API testing tool' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills reveal" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <span className="section-number">02</span>
          <h2 className="section-title">Túi kỹ năng</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">
          Những thành quả tôi đã tích góp được trong hành trình học tập và làm việc. Túi vẫn luôn mở để tiếp thu thêm nhiều kỹ năng mới.
        </p>
        <div className="skills-bag">
          <div className="bag-container">
            <div className="bag-opening">
              <div className="bag-flap"></div>
            </div>
            <div className="bag-body">
              <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" data-reveal data-delay={`${200 + index*100}ms`}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card" data-reveal data-delay={`${300 + skillIndex*80}ms`}>
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

