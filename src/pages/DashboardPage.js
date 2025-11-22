// Dashboard (Paddy)
import { Calendar, MapPin } from "lucide-react";

const DashboardPage = ({
  language,
  elderlyMode,
  user,
  recentActivities = [],
  setShowProfileMenu,
  showProfileMenu,
  setElderlyMode,
  setLanguage,
  handleSignOut,
}) => {
  const events = [
    {
      id: 1,
      title: language === "zh" ? "中国文化讲座" : "Chinese Culture Lecture",
      date: "2025-11-25",
      location: language === "zh" ? "北京分馆" : "Beijing Branch",
    },
    {
      id: 2,
      title: language === "zh" ? "儿童故事时间" : "Children's Story Time",
      date: "2025-11-23",
      location: language === "zh" ? "上海分馆" : "Shanghai Branch",
    },
    {
      id: 3,
      title: language === "zh" ? "数字素养工作坊" : "Digital Literacy Workshop",
      date: "2025-11-26",
      location: language === "zh" ? "广州分馆" : "Guangzhou Branch",
    },
  ];

  return (
    <div className={`page dashboard ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <div className="header-content">
          <div className="library-badge">
            {language === "zh" ? "图书馆" : "LIBRARY"}
          </div>
          <div className="profile-container">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="profile-btn"
            >
              {user?.accountNumber?.[3] || "U"}
            </button>

            {showProfileMenu && (
              <div className="profile-menu">
                <div className="profile-info">
                  <p>{user?.accountNumber}</p>
                </div>

                <div className="menu-item language-selector">
                  <span className="menu-label">
                    {language === "zh" ? "语言" : "Language"}
                  </span>
                  <div className="language-options">
                    <button
                      className={`lang-btn ${
                        language === "zh" ? "active" : ""
                      }`}
                      onClick={() => setLanguage && setLanguage("zh")}
                    >
                      中文
                    </button>
                    <button
                      className={`lang-btn ${
                        language === "en" ? "active" : ""
                      }`}
                      onClick={() => setLanguage && setLanguage("en")}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setElderlyMode && setElderlyMode(!elderlyMode)}
                  className="menu-item"
                >
                  <span>
                    {language === "zh"
                      ? "长者友好模式"
                      : "Elderly Friendly Mode"}
                  </span>
                  <span className={elderlyMode ? "check-mark" : ""}>
                    {elderlyMode ? "✓" : ""}
                  </span>
                </button>

                <button className="menu-item">
                  {language === "zh" ? "账户信息" : "Account Info"}
                </button>

                <button className="menu-item">
                  {language === "zh" ? "停用账户" : "Deactivate Account"}
                </button>

                <button
                  onClick={() => {
                    handleSignOut && handleSignOut();
                    setShowProfileMenu(false);
                  }}
                  className="menu-item sign-out"
                >
                  {language === "zh" ? "登出" : "Sign Out"}
                </button>
              </div>
            )}
          </div>
        </div>
        <h1>{language === "zh" ? "欢迎回来" : "Welcome Back"}</h1>
      </div>

      <div className="page-content">
        <div className="section">
          <h2>{language === "zh" ? "即将举行的活动" : "Upcoming Events"}</h2>
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.title}</h3>
                <div className="event-info">
                  <Calendar size={16} />
                  {event.date}
                </div>
                <div className="event-info">
                  <MapPin size={16} />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>{language === "zh" ? "最近活动" : "Recent Activities"}</h2>
          {recentActivities.length > 0 ? (
            <div className="activities-list">
              {recentActivities.slice(0, 3).map((a, i) => (
                <div key={i} className="activity-card">
                  {a}
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              {language === "zh" ? "暂无活动记录" : "No recent activities"}
            </div>
          )}
        </div>

        <div className="about-section">
          <h2>{language === "zh" ? "关于我们" : "About Us"}</h2>
          <p className="about-text">
            {language === "zh"
              ? "中国国家图书馆致力于为全民提供优质的知识服务，传承文化，启迪智慧。"
              : "The National Library of China is dedicated to providing quality knowledge services to all citizens, preserving culture, and inspiring wisdom."}
          </p>
          <p className="contact-info">
            <strong>{language === "zh" ? "联系我们：" : "Contact Us:"}</strong>
            <br />
            {language === "zh" ? "电话：" : "Phone: "}010-8854-5555
            <br />
            {language === "zh" ? "邮箱：" : "Email: "}info@nlc.cn
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
