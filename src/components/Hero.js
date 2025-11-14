import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const visualRef = useRef(null);
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { lang } = useLanguage();
  const t = lang === 'vi' ? {
    tag: 'Full‑stack hướng đám mây',
    hello: 'Xin chào, tôi là ',
    name: 'Kiều Vân Sơn',
    tagline: 'Thiết kế các nền tảng web bền vững, mượt mà và dễ mở rộng.',
    p1: 'Tôi xây dựng giải pháp web end-to-end nơi trải nghiệm người dùng tinh gọn gặp kiến trúc backend đáng tin cậy. Trọng tâm của tôi là hiệu năng, rõ ràng và tác động đo lường được cho mỗi lần phát hành.',
    p2: 'Từ prototyping tới tự động hóa triển khai, tôi đồng bộ kỹ thuật với mục tiêu sản phẩm, xây dựng API minh bạch và tối ưu pipeline giao hàng để đội nhóm phát hành tự tin.',
    cta1: 'Liên hệ',
    cta2: 'Dự án'
  } : {
    tag: 'Web Developer · Cloud‑Ready Full‑stack',
    hello: "Hello, I’m ",
    name: 'Kiều Vân Sơn',
    tagline: 'Designing resilient web platforms that feel effortless and scale with ambition.',
    p1: 'I craft end-to-end web solutions where refined user journeys meet dependable backend architecture. My focus is on performance, clarity, and measurable impact for every release.',
    p2: 'From prototyping to production automation, I align engineering with product goals, build transparent APIs, and keep delivery pipelines smooth so teams can ship with confidence.',
    cta1: 'Contact',
    cta2: 'Projects'
  };

  useEffect(() => {
    const el = visualRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('open');
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-indicator"></span>
            <span>{t.tag}</span>
          </div>
          <h1 className="hero-title">
            {t.hello}<span className="gradient-text">{t.name}</span>
          </h1>
          <p className="hero-tagline">{t.tagline}</p>
          <div className="hero-description">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToContact}>{t.cta1}</button>
            <a href="#projects" className="btn-secondary">{t.cta2}</a>
          </div>
        </div>
        <div className="hero-visual" ref={visualRef}>
          <div className="hero-glow"></div>
          <div className="hero-panel">
            <div className="panel-header">
              <span className="panel-tab">/platform/core.ts</span>
              <span className="panel-status">deploy · ready</span>
            </div>
            <pre className="panel-code">
              {`export const buildPlatform = (vision) => {
  const blueprint = designService(vision);
  const api = createAPI({
    gateways: ['rest', 'graphql'],
    resilience: 'circuit-breakers'
  });

  return orchestrateDelivery({
    blueprint,
    api,
    observability: ['metrics', 'distributed-tracing'],
    deployment: 'zero-downtime'
  });
};`}
            </pre>
          </div>
          <div className="hero-card hero-card-metrics">
            <span className="card-label">Impact</span>
            <div className="card-metric">
              <span>5x</span>
              <p>Increase in release cadence after workflow automation.</p>
            </div>
          </div>
          <div className="hero-card hero-card-stack">
            <span className="card-label">Toolbox</span>
            <div className="stack-chips">
              <span className="stack-chip">Node.js</span>
              <span className="stack-chip">TypeScript</span>
              <span className="stack-chip">Spring</span>
              <span className="stack-chip">PostgreSQL</span>
              <span className="stack-chip">Docker</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

