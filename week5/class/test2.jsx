import "./test2.css";

import React from "react";

// 스타일을 외부 CSS로 분리하는 경우

const PortfolioCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-5 py-10">
      <div className="card">
        <div className="card-header">
          <div className="profile-circle">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="profile-img"
            />
          </div>
          <div className="name">최민서</div>
          <div className="mbti">👑 ENTJ 👑</div>
        </div>

        <div className="card-body">
          <div className="info-section">
            <div className="section-title">소개</div>
            <div className="section-content">
              안녕하세요! 저는 경성대 소프트웨어학과 4학년에 재학 중인
              최민서입니다. 현재 게임 개발자가 되기 위해 열심히 공부하고
              있습니다.
            </div>
          </div>

          <div className="info-section">
            <div className="section-title">목표</div>
            <div className="section-content">
              C++과 C#을 깊이 있게 이해하여 모두가 함께 즐길 수 있는 게임을
              만드는 것이 제 목표입니다. 창의적인 게임 디자인과 견고한
              프로그래밍을 통해 플레이어들에게 특별한 경험을 선사하고 싶습니다.
            </div>
          </div>

          <div className="section-title">관심사 & 취미</div>
          <div>
            <div className="interest-item">💻 C++</div>
            <div className="interest-item">💻 C#</div>
            <div className="interest-item">🎮 게임하기</div>
            <div className="interest-item">🍳 요리하기</div>
            <div className="interest-item">🎨 그림 그리기</div>
            <div className="interest-item">🎯 게임 개발</div>
          </div>
        </div>
      </div>

      {/* CSS in JS 또는 글로벌 CSS에 포함 */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Noto Sans KR', sans-serif;
        }
        .card {
          background-color: white;
          width: 100%;
          max-width: 600px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          position: relative;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .card-header {
          background: linear-gradient(to right, #a18cd1, #fbc2eb);
          padding: 30px;
          text-align: center;
          position: relative;
        }
        .profile-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: #f8f9fa;
          border: 5px solid white;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 60px;
          overflow: hidden;
        }
        .name {
          margin-top: 15px;
          color: white;
          font-size: 28px;
          font-weight: 700;
        }
        .mbti {
          color: white;
          font-size: 18px;
          margin-top: 5px;
          opacity: 0.9;
        }
        .card-body {
          padding: 30px;
        }
        .info-section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #a18cd1;
          display: flex;
          align-items: center;
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .section-title::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #a18cd1;
          border-radius: 50%;
          margin-right: 10px;
        }
        .section-content {
          line-height: 1.7;
          color: #666;
          font-size: 16px;
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .interest-item {
          display: inline-block;
          background-color: #f0f4ff;
          border-radius: 20px;
          padding: 8px 15px;
          margin: 5px;
          font-size: 14px;
          color: #5165a5;
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .info-section:nth-child(1) .section-title,
        .info-section:nth-child(1) .section-content {
          animation-delay: 0.3s;
        }
        .info-section:nth-child(2) .section-title,
        .info-section:nth-child(2) .section-content {
          animation-delay: 0.6s;
        }
        .info-section:nth-child(3) .section-title {
          animation-delay: 0.9s;
        }
        .interest-item:nth-child(1) { animation-delay: 1.0s; }
        .interest-item:nth-child(2) { animation-delay: 1.1s; }
        .interest-item:nth-child(3) { animation-delay: 1.2s; }
        .interest-item:nth-child(4) { animation-delay: 1.3s; }
        .interest-item:nth-child(5) { animation-delay: 1.4s; }
        .interest-item:nth-child(6) { animation-delay: 1.5s; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioCard;
