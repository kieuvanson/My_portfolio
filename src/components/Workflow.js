import React from 'react';
import './Workflow.css';
import useReveal from '../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';

const Workflow = () => {
  const containerRef = useReveal();
  const { lang } = useLanguage();

  const tv = lang === 'vi' ? {
    title: 'Quy trình hợp tác',
    subtitle: 'Quy trình làm việc điềm tĩnh, hợp tác, giữ được nhịp độ và chăm chút cho từng bước.',
    steps: [
      { number: '01', title: 'Khám phá', description: 'Trao đổi mục tiêu, người dùng và tầm nhìn thương hiệu để thống nhất ngay từ đầu.' },
      { number: '02', title: 'Lập kế hoạch', description: 'Vẽ hành trình sản phẩm, làm rõ yêu cầu và xác định lộ trình thực hiện.' },
      { number: '03', title: 'Thiết kế', description: 'Từ wireframe đến giao diện gọn gàng, tập trung vào khả năng dùng, câu chuyện và sự hứng thú.' },
      { number: '04', title: 'Xây dựng', description: 'Phát triển frontend responsive và backend ổn định, lặp nhanh dựa trên phản hồi.' },
      { number: '05', title: 'Ra mắt & Hỗ trợ', description: 'Kiểm thử, triển khai và cải tiến liên tục với analytics, tối ưu và hỗ trợ sau phát hành.' }
    ]
  } : {
    title: 'How we build together',
    subtitle: 'A calm, collaborative process that keeps momentum while giving every step the care it deserves.',
    steps: [
      { number: '01', title: 'Discover', description: 'We talk through your goals, users, and brand vision to make sure we are aligned from day one.' },
      { number: '02', title: 'Plan', description: 'I map the product journey, clarify requirements, and outline the roadmap we will follow.' },
      { number: '03', title: 'Design', description: 'Wireframes evolve into clean interfaces with a focus on usability, storytelling, and delight.' },
      { number: '04', title: 'Build', description: 'I develop responsive frontends and reliable backends, iterating quickly with your feedback.' },
      { number: '05', title: 'Launch & Support', description: 'We test, deploy, and keep improving with analytics, optimisation, and post-launch support.' }
    ]
  };

  return (
    <section id="workflow" className="workflow reveal section-divider" ref={containerRef}>
      <div className="container">
        <div className="workflow-header" data-reveal data-delay="0ms">
          <h2 className="workflow-title">{tv.title}</h2>
          <p className="workflow-subtitle">{tv.subtitle}</p>
        </div>

        <div className="workflow-steps">
          {tv.steps.map((step, index) => (
            <div
              key={index}
              className="workflow-step"
              data-reveal
              data-delay={`${index * 50}ms`}
            >
              <div className="step-badge">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;






