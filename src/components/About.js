import React from 'react';
import './About.css';
import useReveal from '../hooks/useReveal';
import * as SimpleIcons from 'simple-icons';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const containerRef = useReveal();
  const { lang } = useLanguage();

  const t = lang === 'vi' ? {
    title: 'Về tôi',
    intro1: 'Tôi là một lập trình viên Web đam mê tạo ra trải nghiệm web đẹp, hữu dụng và thân thiện.',
    intro2: 'Với kinh nghiệm cả frontend và backend, tôi hiện thực hóa ý tưởng bằng mã sạch, giao diện trực quan và hệ thống vững chắc. Tôi chuyên xây dựng ứng dụng web responsive vừa đẹp vừa hoạt động mượt trên mọi thiết bị.',
    intro3: 'Tôi thích biến vấn đề phức tạp thành giải pháp đơn giản, tinh gọn. Từ UI mượt mà, API mở rộng tốt đến tối ưu hiệu năng, tôi luôn chú trọng chi tiết và chất lượng.',
    contact: 'Liên hệ',
    phone: 'Điện thoại',
    email: 'Email',
    github: 'GitHub',
    facebook: 'Facebook'
  } : {
    title: 'About Me',
    intro1: 'I am a Web Developer passionate about crafting beautiful, functional, and user-friendly web experiences.',
    intro2: 'With expertise spanning both frontend and backend development, I bring ideas to life through clean code, intuitive interfaces, and robust systems. I specialize in building responsive web applications that not only look great but also perform flawlessly across all devices.',
    intro3: "I love turning complex problems into simple, elegant solutions. Whether it's creating seamless user interfaces, designing scalable APIs, or optimizing performance, I approach every project with attention to detail and a commitment to excellence.",
    contact: 'Contact',
    phone: 'Phone',
    email: 'Email',
    github: 'GitHub',
    facebook: 'Facebook'
  };

  const getIcon = (iconKey) => {
    try {
      const key = iconKey.toLowerCase();
      if (key === 'phone') {
        // Custom minimal phone handset icon
        return {
          path: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l1.98-1.98a1 1 0 011.02-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1v3.25a1 1 0 01-1 1C11.04 21.99 2 12.96 2 2.99a1 1 0 011-1H6.25a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1 1 0 01-.24 1.02l-1.96 1.99z'
        };
      }

      const iconName = `si${key.charAt(0).toUpperCase() + key.slice(1)}`;
      const icon = SimpleIcons[iconName];

      if (icon && icon.path) {
        return {
          path: icon.path
        };
      }
    } catch (e) {
      // If icon not found, return null
    }
    return null;
  };

  const contactInfo = [
    {
      type: 'phone',
      label: t.phone,
      value: '0867 859 033',
      iconKey: 'phone',
      href: 'tel:+84867859033'
    },
    {
      type: 'email',
      label: t.email,
      value: 'sonkieuvan@gmail.com',
      iconKey: 'gmail',
      href: 'mailto:sonkieuvan@gmail.com'
    },
    {
      type: 'github',
      label: t.github,
      value: 'github.com/kieuvanson',
      iconKey: 'github',
      href: 'https://github.com/kieuvanson'
    },
    {
      type: 'facebook',
      label: t.facebook,
      value: 'facebook.com/son.kieuvan.731',
      iconKey: 'facebook',
      href: 'https://www.facebook.com/son.kieuvan.731/'
    }
  ];

  return (
    <section id="about" className="about reveal section-divider" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="about-layout">
          <div className="about-left" data-reveal data-delay="100ms">
            <div className="about-intro">
              <p className="intro-large">{t.intro1}</p>
              <p className="intro-text">{t.intro2}</p>
              <p className="intro-text">{t.intro3}</p>
                </div>
              </div>

          <div className="about-right" data-reveal data-delay="200ms">
            <div className="contact-section">
              <div className="section-label">{t.contact}</div>
              <div className="contact-list">
                {contactInfo.map((contact, index) => {
                  const icon = getIcon(contact.iconKey);
                  const iconColor = '#f5f5f5';

                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.type === 'email' || contact.type === 'phone' ? '_self' : '_blank'}
                      rel={contact.type === 'email' || contact.type === 'phone' ? '' : 'noopener noreferrer'}
                      className="contact-item"
                      data-reveal
                      data-delay={`${300 + index * 100}ms`}
                      style={{ '--icon-color': iconColor }}
                  >
                      <div className="contact-icon">
                        {icon ? (
                          <svg
                            className="contact-svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d={icon.path} />
                          </svg>
                ) : (
                          <span className="contact-fallback">•</span>
                )}
                      </div>
                      <div className="contact-info">
                        <span className="contact-label">{contact.label}</span>
                        <span className="contact-value">{contact.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

