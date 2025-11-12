import React, { useState, useEffect } from 'react';
import './About.css';
import useReveal from '../hooks/useReveal';

const About = () => {
  const containerRef = useReveal();
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [showCode, setShowCode] = useState(true);
  const [attentionAnimation, setAttentionAnimation] = useState(true);

  const codeSnippet = `// Portfolio Introduction Script
// Author: Kieu Van Son
// Language: JavaScript (Node.js)

const portfolio = {
  name: "Kieu Van Son",
  role: "Backend Developer",
  location: "Hanoi, Vietnam",
  education: "IT - Women's Academy Vietnam",

  introduce() {
    console.log("🚀 Welcome to my Portfolio!");
    console.log(\`👋 Hello! I am \${this.name}\`);
    console.log(\`\${this.role} | \${this.location}\`);
    console.log("");

    console.log("💡 About me:");
    console.log("I am a Backend Developer passionate about creating efficient APIs");
    console.log("and building robust backend systems. I enjoy exploring new technologies,");
    console.log("optimizing code, and always finding ways to make applications run smoothly and securely.");
    console.log("");

    this.showJourney();
    this.showSkills();
    this.showPhilosophy();
    this.showGoals();

    console.log("✨ Thank you for visiting my portfolio!");
  },

  showJourney() {
    console.log("🛤️ My Journey:");
    console.log("  - 4th year IT student at Women's Academy Vietnam");
    console.log("  - Started programming in 2020");
    console.log("  - Specialized in Backend Development since 2022");
    console.log("  - Participated in real projects and hackathons");
    console.log("  - Always learning and updating knowledge every day");
    console.log("");
  },

  showSkills() {
    console.log("🛠️ Technical Skills:");
    console.log("  - Backend: Node.js, Express.js, Python, Django, FastAPI");
    console.log("  - Database: MySQL, PostgreSQL, MongoDB, Redis");
    console.log("  - API: RESTful APIs, GraphQL, API Security, Authentication");
    console.log("  - Tools: Git, Docker, AWS, Linux, Postman");
    console.log("  - Languages: JavaScript, Python, SQL, Bash");
    console.log("");
  },

  showPhilosophy() {
    console.log("🎯 Work Philosophy:");
    console.log("  - 'Code should not only run, but be maintainable and scalable'");
    console.log("  - Always prioritize end-user experience");
    console.log("  - Security is the top priority in every project");
    console.log("  - Learn from every mistake and improve continuously");
    console.log("  - Teamwork and communication are keys to success");
    console.log("");
  },

  showGoals() {
    console.log("🎯 Future Goals:");
    console.log("  - Become a Senior Backend Developer in 2-3 years");
    console.log("  - Contribute to the open source community");
    console.log("  - Build technology products with positive impact");
    console.log("  - Share knowledge and mentor new developers");
    console.log("  - Always stay updated with the latest technology trends");
    console.log("");
  }
};

// Execute the introduction
portfolio.introduce();`;

  const runScript = () => {
    setIsRunning(true);
    setAttentionAnimation(false);
    setOutput('');

    const fullText = `🚀 Welcome to my Portfolio!
👋 Hello! I am Kieu Van Son
Backend Developer | Hanoi, Vietnam

💡 About me:
I am a Backend Developer passionate about creating efficient APIs
and building robust backend systems. I enjoy exploring new technologies,
optimizing code, and always finding ways to make applications run smoothly and securely.

🛤️ My Journey:
  - 4th year IT student at Women's Academy Vietnam
  - Started programming in 2020
  - Specialized in Backend Development since 2022
  - Participated in real projects and hackathons
  - Always learning and updating knowledge every day

🛠️ Technical Skills:
  - Backend: Node.js, Express.js, Python, Django, FastAPI
  - Database: MySQL, PostgreSQL, MongoDB, Redis
  - API: RESTful APIs, GraphQL, API Security, Authentication
  - Tools: Git, Docker, AWS, Linux, Postman
  - Languages: JavaScript, Python, SQL, Bash

🎯 Work Philosophy:
  - 'Code should not only run, but be maintainable and scalable'
  - Always prioritize end-user experience
  - Security is the top priority in every project
  - Learn from every mistake and improve continuously
  - Teamwork and communication are keys to success

🎯 Future Goals:
  - Become a Senior Backend Developer in 2-3 years
  - Contribute to the open source community
  - Build technology products with positive impact
  - Share knowledge and mentor new developers
  - Always stay updated with the latest technology trends

✨ Thank you for visiting my portfolio!`;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setOutput(prev => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setShowCode(false);
      }
    }, 1); // 1ms delay between characters for very fast typing effect (0.5s total)
  };

  const resetTerminal = () => {
    setIsRunning(false);
    setOutput('');
    setShowCode(true);
  };

  const backToCode = () => {
    setShowCode(true);
    setAttentionAnimation(false);
  };

  useEffect(() => {
    // Tắt animation chú ý sau 5 giây
    const timer = setTimeout(() => {
      setAttentionAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const getLineClass = (line) => {
    if (line.startsWith('//')) return 'comment';
    if (line.includes('const') || line.includes('function') || line.includes('console.log')) return 'keyword';
    if (line.includes('"') || line.includes('`')) return 'string';
    if (line.includes('this.') || line.includes('portfolio.')) return 'property';
    return 'default';
  };

  return (
    <section id="about" className="about reveal" ref={containerRef}>
      <div className="container">
        <div className="section-header" data-reveal data-delay="0ms">
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="code-editor-container" data-reveal data-delay="100ms">
          <div className="code-editor-window">
            <div className="editor-header">
              <div className="editor-tabs">
                <div className="tab active">
                  <span className="file-icon">🟨</span>
                  portfolio.js
                </div>
              </div>
              <div className="editor-controls">
                {showCode ? (
                  <button
                    className={`run-button ${attentionAnimation ? 'attention' : ''}`}
                    onClick={runScript}
                    disabled={isRunning}
                  >
                    {isRunning ? '⏳ Running...' : '▶️ Run Script'}
                  </button>
                ) : (
                  <button className="back-button" onClick={backToCode}>
                    🔙 Back to Code
                  </button>
                )}
                <button className="reset-button" onClick={resetTerminal}>
                  🔄 Reset
                </button>
              </div>
            </div>
            <div className="editor-body">
              {showCode ? (
                <div className="code-panel">
                  <div className="code-header">
                    <span className="language-badge">JavaScript</span>
                    <span className="line-count">{codeSnippet.split('\n').length} lines</span>
                  </div>
                  <div className="code-content">
                    <pre className="code-text">
{codeSnippet.split('\n').map((line, index) => (
  <div key={index} className="code-line">
    <span className="line-number">{(index + 1).toString().padStart(2, ' ')}</span>
    <span className={`line-content ${getLineClass(line)}`}>{line}</span>
  </div>
))}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="output-panel full">
                  <div className="output-header">
                  <span className="output-title">Terminal Output</span>
                  <span className="output-status">✅ Completed</span>
                  </div>
                  <div className="output-content">
                    <pre className="output-text">{output}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


