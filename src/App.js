import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [doorsOpened, setDoorsOpened] = useState(false);

  useEffect(() => {
    // Start door opening animation after 1 second
    const doorTimer = setTimeout(() => {
      setDoorsOpened(true);
    }, 1000);

    // Hide loading screen after doors open
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={`loading-screen ${doorsOpened ? 'loaded' : ''}`}>
        <div className="door-container">
          <div className="door-left">
            <div className="loading-content">
              <div className="loading-logo">
                <span className="logo-text">Portfolio</span>
                <div className="logo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="loading-bar">
                <div className="loading-progress"></div>
              </div>
              <p className="loading-text">Đang tải...</p>
            </div>
          </div>
          <div className="door-right">
            <div className="loading-content">
              <div className="loading-logo">
                <span className="logo-text">Portfolio</span>
                <div className="logo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="loading-bar">
                <div className="loading-progress"></div>
              </div>
              <p className="loading-text">Đang tải...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

