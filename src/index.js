import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

// Console log thông tin khi app khởi động
console.log('%c🚀 Portfolio Kiều Vân Sơn - Backend Developer', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cWebsite đang chạy tại:', 'color: #ffffff; font-size: 14px;');
console.log(`%c${window.location.origin}${window.location.pathname}`, 'color: #764ba2; font-size: 14px; font-weight: bold;');
console.log('%cChúc bạn có trải nghiệm tuyệt vời!', 'color: #888; font-size: 12px;');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
