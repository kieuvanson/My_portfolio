import React, { useState } from 'react';
import './Hero.css';
import useReveal from '../hooks/useReveal';
// react-pdf imports
import { Document, Page, pdfjs } from 'react-pdf';

// Tell react-pdf where to load pdf.worker.js from (uses pdfjs-dist)
// Use local worker copied to public to avoid CDN/CORS/module fetch issues
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

const Hero = () => {
  const containerRef = useReveal();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isCvOpen, setIsCvOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  const openCv = (e) => {
    e.preventDefault();
    setIsCvOpen(true);
  };

  const closeCv = () => {
    setIsCvOpen(false);
  };

  const goToPrev = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNext = () => setPageNumber((p) => Math.min(numPages || p + 1, p + 1));

  return (
    <section id="hero" className="hero reveal" ref={containerRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge" data-reveal data-delay="0ms">
            <span>Backend Developer</span>
          </div>
          <h1 className="hero-title" data-reveal data-delay="100ms">
            Hello, I'm <span className="gradient-text">Kieu Van Son</span>
          </h1>
          <p className="hero-description" data-reveal data-delay="200ms">
            Passionate about API development, database management, and building stable, secure, and scalable backend systems.
          </p>
          <div className="hero-buttons" data-reveal data-delay="300ms">
            <button className="btn-primary" onClick={scrollToContact}>
              Contact Me
            </button>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <button type="button" className="btn-cv btn-secondary" onClick={openCv} aria-haspopup="dialog" aria-controls="cv-modal">
              View CV
            </button>
            {/* Removed Download CV per request - only View CV remains */}
          </div>
          <div className="hero-stats" data-reveal data-delay="400ms">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Years Studying</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Backend Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Tech Passion</div>
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
  name: "Kieu Van Son",
  role: "Backend Developer",
  education: "Women's Academy Vietnam - Year 4",
  skills: [
    "Node.js", "Express.js", "PostgreSQL",
    "JWT Authentication", "RESTful API",
    "Git/GitHub", "Docker"
  ],
  passion: "Building stable and secure backend systems"
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      {isCvOpen && (
        <div className="cv-modal" role="dialog" aria-modal="true">
          <div className="cv-modal-backdrop" onClick={closeCv}></div>
          <div className="cv-modal-content">
            <div className="cv-modal-header">
              <h3>Curriculum Vitae</h3>
              <button className="cv-close" onClick={closeCv} aria-label="Close CV">✕</button>
            </div>
            <div className="cv-controls">
              <button onClick={goToPrev} disabled={pageNumber <= 1}>Prev</button>
              <span>Page {pageNumber}{numPages ? ` / ${numPages}` : ''}</span>
              <button onClick={goToNext} disabled={numPages ? pageNumber >= numPages : false}>Next</button>
            </div>
            <div className="cv-document">
              <Document file="public/cv/Kieu-Van-Son.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={800} />
              </Document>
            </div>
          </div>
        </div>
      )}
      <div className="scroll-indicator" data-reveal data-delay="700ms">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

