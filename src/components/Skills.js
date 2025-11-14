import React from 'react';
import './Skills.css';
import useReveal from '../hooks/useReveal';
import * as SimpleIcons from 'simple-icons';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const containerRef = useReveal();
  const { lang } = useLanguage();
  const t = lang === 'vi' ? {
    title: 'Kỹ năng',
    description: 'Công nghệ và công cụ mình sử dụng để xây dựng các ứng dụng web mạnh mẽ và có khả năng mở rộng.',
    categories: {
      languages: 'Ngôn ngữ lập trình',
      frameworks: 'Frameworks & Thư viện',
      tools: 'Tool & Cơ sở dữ liệu'
    }
  } : {
    title: 'Skills',
    description: 'Technologies and tools I use to build robust and scalable web applications.',
    categories: {
      languages: 'Programming Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tool & Database'
    }
  };
  
  const iconSlugMap = {
    java: 'Java',
    javascript: 'Javascript',
    'c++': 'Cplusplus',
    cplusplus: 'Cplusplus',
    csharp: 'Csharp',
    python: 'Python',
    'node.js': 'Nodedotjs',
    nodejs: 'Nodedotjs',
    spring: 'Spring',
    dotnet: 'Dotnet',
    git: 'Git',
    github: 'Github',
    mysql: 'Mysql',
    postgresql: 'Postgresql',
    mongodb: 'Mongodb',
    docker: 'Docker',
    vercel: 'Vercel'
  };

  const colorOverrides = {
    github: '#f5f5f5',
    vercel: '#ffffff',
    java: '#f4971c',
    csharp: '#6f4bd8',
    python: '#3776AB',
    cplusplus: '#2f74c0',
    postgresql: '#6da7d6',
    mysql: '#f29111',
    mongodb: '#4db33d',
    docker: '#2395ec'
  };

  // 获取图标函数
  const getIcon = (iconKey) => {
    try {
      const key = iconKey.toLowerCase();
      const primary = iconSlugMap[key] || iconKey;
      // Candidate priority: enforce correct brand for Java and C#
      let candidates = [primary];
      if (key === 'java') {
        candidates = ['Java', 'Openjdk']; // try Java, fallback to OpenJDK
      } else if (key === 'csharp') {
        candidates = ['Csharp']; // avoid .NET logo
      } else if (key === 'nodejs' || key === 'node.js') {
        candidates.push('Nodedotjs');
      }

      let icon = null;
      for (const cand of candidates) {
        const pascal = cand.charAt(0).toUpperCase() + cand.slice(1);
        const name = `si${pascal}`;
        if (SimpleIcons[name]) {
          icon = SimpleIcons[name];
          break;
        }
      }

      if (icon && icon.path) {
        return {
          path: icon.path,
          color: colorOverrides[key] || `#${icon.hex}`
        };
      }
    } catch (e) {
      // 如果找不到图标，返回 null
    }
    return null;
  };

  const skillCategories = [
    {
      title: t.categories.languages,
      skills: [
        { name: 'Java', iconKey: 'java' },
        { name: 'JavaScript', iconKey: 'javascript' },
        { name: 'C++', iconKey: 'c++' },
        { name: 'Python', iconKey: 'python' },
      ]
    },
    {
      title: t.categories.frameworks,
      skills: [
        { name: 'Node.js', iconKey: 'node.js' },
        { name: 'Spring', iconKey: 'spring' },
        { name: '.NET', iconKey: 'dotnet' },
      ]
    },
    {
      title: t.categories.tools,
      skills: [
        { name: 'Git', iconKey: 'git' },
        { name: 'GitHub', iconKey: 'github' },
        { name: 'MySQL', iconKey: 'mysql' },
        { name: 'PostgreSQL', iconKey: 'postgresql' },
        { name: 'MongoDB', iconKey: 'mongodb' },
        { name: 'Docker', iconKey: 'docker' },
        { name: 'Vercel', iconKey: 'vercel' },
          ]
        }
  ];

  // Các lựa chọn cho phần chữ lớn:
  // Option 1: Tập trung vào kỹ năng
  const roles = ['CODE', 'BUILD', 'DEPLOY'];
  
  // Option 2: Frontend/Backend/Fullstack
  // const roles = ['FRONTEND', 'BACKEND', 'FULLSTACK'];
  
  // Option 3: Quy trình phát triển
  // const roles = ['DESIGN', 'DEVELOP', 'DEPLOY'];
  
  // Option 4: Tập trung vào kỹ năng kỹ thuật
  // const roles = ['BUILD', 'OPTIMIZE', 'SCALE'];

  return (
    <section id="skills" className="skills reveal section-divider" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <h2 className="section-title">{t.title}</h2>
        </div>
        <p className="section-description" data-reveal data-delay="100ms">{t.description}</p>
        <div className="skills-container">
          <div className="skills-layout">
            <div className="skills-left">
              <div className="roles-text" data-reveal data-delay="0ms">
                {roles.map((role, index) => (
                  <div 
                    key={index} 
                    className="role-line"
                    data-reveal
                    data-delay={`${index * 150}ms`}
                  >
                    {role}
                    {index === roles.length - 1 && <span className="role-slash">/</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-right">
              <h2 className="skills-title-right" data-reveal data-delay="200ms">{t.title}</h2>
              <div className="skills-columns">
                {skillCategories.map((category, categoryIndex) => (
                  <div 
                    key={categoryIndex} 
                    className="skill-column"
                    data-reveal
                    data-delay={`${300 + categoryIndex * 100}ms`}
                  >
                    <h3 className="column-title">{category.title}</h3>
                    <ul className="skill-list">
                      {category.skills.map((skill, skillIndex) => {
                        const icon = getIcon(skill.iconKey);
                        const iconColor = icon ? icon.color : '#ffffff';
                        
                        return (
                          <li
                            key={skillIndex}
                            className="skill-item"
                            data-reveal
                            data-delay={`${400 + categoryIndex * 100 + skillIndex * 50}ms`}
                            style={{ '--skill-color': iconColor }}
                          >
                            <span className="skill-item-icon">
                              {icon ? (
                                <svg
                                  className="skill-item-svg"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d={icon.path} />
                                </svg>
                              ) : (
                                <span className="skill-item-fallback">•</span>
                              )}
                            </span>
                            <span className="skill-item-name">{skill.name}</span>
                          </li>
                        );
                      })}
                    </ul>
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
