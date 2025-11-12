import React from 'react';
import './Skills.css';
import useReveal from '../hooks/useReveal';

const Skills = () => {
  const containerRef = useReveal();
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: '🟨', description: 'Primary language for web development' },
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
        { name: 'Express.js', icon: '🚀', description: 'Web framework for Node.js' },
        { name: 'Spring Boot', icon: '🌱', description: 'Java web framework' },
        { name: 'Qt', icon: '🔧', description: 'C++ GUI framework' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        {
          name: 'Relational Databases',
          icon: '🗄️',
          description: 'ACID-compliant databases for structured data',
          subSkills: [
            { name: 'PostgreSQL', icon: '🐘', description: 'Advanced open-source RDBMS' },
            { name: 'MySQL', icon: '🦭', description: 'Popular relational database' }
          ]
        },
        {
          name: 'NoSQL Databases',
          icon: '📊',
          description: 'Flexible databases for unstructured data',
          subSkills: [
            { name: 'MongoDB', icon: '🍃', description: 'Document-oriented NoSQL database' },
            { name: 'Redis', icon: '🔴', description: 'In-memory key-value store' }
          ]
        }
      ]
    },
    {
      title: 'Tools & DevOps',
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
          <h2 className="section-title">Skills Bag</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">
          The achievements I've accumulated in my learning and working journey. The bag is always open to acquire new skills.
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
                  <div key={skillIndex}>
                    {skill.subSkills ? (
                      <div className="skill-category-group" data-reveal data-delay={`${300 + skillIndex*80}ms`}>
                        <div className="skill-card main-skill">
                          <div className="skill-icon">{skill.icon}</div>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <p className="skill-description">{skill.description}</p>
                          </div>
                        </div>
                        <div className="sub-skills-list">
                          {skill.subSkills.map((subSkill, subIndex) => (
                            <div key={subIndex} className="skill-card sub-skill" data-reveal data-delay={`${350 + skillIndex*80 + subIndex*50}ms`}>
                              <div className="skill-icon">{subSkill.icon}</div>
                              <div className="skill-info">
                                <h4 className="skill-name">{subSkill.name}</h4>
                                <p className="skill-description">{subSkill.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="skill-card" data-reveal data-delay={`${300 + skillIndex*80}ms`}>
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <p className="skill-description">{skill.description}</p>
                        </div>
                      </div>
                    )}
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

