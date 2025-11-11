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
// Author: Kiều Vân Sơn
// Language: JavaScript (Node.js)

const portfolio = {
  name: "Kiều Vân Sơn",
  role: "Backend Developer",
  location: "Hà Nội, Việt Nam",
  education: "CNTT - Học viện Phụ nữ Việt Nam",

  introduce() {
    console.log("🚀 Chào mừng đến với Portfolio của tôi!");
    console.log(\`👋 Xin chào! Tôi là \${this.name}\`);
    console.log(\`\${this.role} | \${this.location}\`);
    console.log("");

    console.log("💡 Về tôi:");
    console.log("Tôi là một Backend Developer đam mê việc tạo ra các API hiệu quả");
    console.log("và xây dựng hệ thống backend vững chắc. Tôi thích khám phá công nghệ mới,");
    console.log("tối ưu code, và luôn tìm cách giúp ứng dụng hoạt động mượt mà và an toàn hơn.");
    console.log("");

    this.showJourney();
    this.showSkills();
    this.showPhilosophy();
    this.showGoals();

    console.log("✨ Cảm ơn bạn đã ghé thăm portfolio của tôi!");
  },

  showJourney() {
    console.log("🛤️ Hành trình của tôi:");
    console.log("  - Sinh viên năm 4 ngành CNTT tại Học viện Phụ nữ Việt Nam");
    console.log("  - Bắt đầu với lập trình từ năm 2020");
    console.log("  - Chuyên sâu vào Backend Development từ 2022");
    console.log("  - Tham gia các dự án thực tế và hackathon");
    console.log("  - Luôn học hỏi và cập nhật kiến thức mới mỗi ngày");
    console.log("");
  },

  showSkills() {
    console.log("🛠️ Kỹ năng kỹ thuật:");
    console.log("  - Backend: Node.js, Express.js, Python, Django, FastAPI");
    console.log("  - Database: MySQL, PostgreSQL, MongoDB, Redis");
    console.log("  - API: RESTful APIs, GraphQL, API Security, Authentication");
    console.log("  - Tools: Git, Docker, AWS, Linux, Postman");
    console.log("  - Languages: JavaScript, Python, SQL, Bash");
    console.log("");
  },

  showPhilosophy() {
    console.log("🎯 Triết lý làm việc:");
    console.log("  - 'Code không chỉ để chạy, mà phải dễ bảo trì và mở rộng'");
    console.log("  - Luôn ưu tiên trải nghiệm người dùng cuối");
    console.log("  - Bảo mật là ưu tiên hàng đầu trong mọi dự án");
    console.log("  - Học hỏi từ mỗi lỗi và cải thiện liên tục");
    console.log("  - Teamwork và communication là chìa khóa thành công");
    console.log("");
  },

  showGoals() {
    console.log("🎯 Mục tiêu tương lai:");
    console.log("  - Trở thành Senior Backend Developer trong 2-3 năm tới");
    console.log("  - Đóng góp vào cộng đồng open source");
    console.log("  - Xây dựng sản phẩm công nghệ có tác động tích cực");
    console.log("  - Chia sẻ kiến thức và mentor cho developer mới");
    console.log("  - Luôn cập nhật với xu hướng công nghệ mới nhất");
    console.log("");
  }
};

// Execute the introduction
portfolio.introduce();`;

  const runScript = () => {
    setIsRunning(true);
    setAttentionAnimation(false);
    setOutput('');

    const fullText = `🚀 Chào mừng đến với Portfolio của tôi!
👋 Xin chào! Tôi là Kiều Vân Sơn
Backend Developer | Hà Nội, Việt Nam

💡 Về tôi:
Tôi là một Backend Developer đam mê việc tạo ra các API hiệu quả
và xây dựng hệ thống backend vững chắc. Tôi thích khám phá công nghệ mới,
tối ưu code, và luôn tìm cách giúp ứng dụng hoạt động mượt mà và an toàn hơn.

🛤️ Hành trình của tôi:
  - Sinh viên năm 4 ngành CNTT tại Học viện Phụ nữ Việt Nam
  - Bắt đầu với lập trình từ năm 2020
  - Chuyên sâu vào Backend Development từ 2022
  - Tham gia các dự án thực tế và hackathon
  - Luôn học hỏi và cập nhật kiến thức mới mỗi ngày

🛠️ Kỹ năng kỹ thuật:
  - Backend: Node.js, Express.js, Python, Django, FastAPI
  - Database: MySQL, PostgreSQL, MongoDB, Redis
  - API: RESTful APIs, GraphQL, API Security, Authentication
  - Tools: Git, Docker, AWS, Linux, Postman
  - Languages: JavaScript, Python, SQL, Bash

🎯 Triết lý làm việc:
  - 'Code không chỉ để chạy, mà phải dễ bảo trì và mở rộng'
  - Luôn ưu tiên trải nghiệm người dùng cuối
  - Bảo mật là ưu tiên hàng đầu trong mọi dự án
  - Học hỏi từ mỗi lỗi và cải thiện liên tục
  - Teamwork và communication là chìa khóa thành công

🎯 Mục tiêu tương lai:
  - Trở thành Senior Backend Developer trong 2-3 năm tới
  - Đóng góp vào cộng đồng open source
  - Xây dựng sản phẩm công nghệ có tác động tích cực
  - Chia sẻ kiến thức và mentor cho developer mới
  - Luôn cập nhật với xu hướng công nghệ mới nhất

✨ Cảm ơn bạn đã ghé thăm portfolio của tôi!`;

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
          <h2 className="section-title">Về tôi</h2>
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
                    {isRunning ? '⏳ Đang chạy...' : '▶️ Chạy Script'}
                  </button>
                ) : (
                  <button className="back-button" onClick={backToCode}>
                    🔙 Quay lại Code
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


