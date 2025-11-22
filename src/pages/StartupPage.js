// Start / Welcome page (Cora)
import { Globe } from "lucide-react";

const StartupPage = ({
  language,
  setCurrentPage,
  showLanguageMenu,
  setShowLanguageMenu,
  setLanguage,
  elderlyMode,
  logo,
}) => {
  return (
    <div className={`startup-page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="startup-content">
        <div className="logo-container">
          <h1 className="welcome-title">
            {language === "zh"
              ? "欢迎来到中国国家图书馆"
              : "Welcome to the National Library of China"}
          </h1>
          <div className="logo-placeholder">
            {logo ? (
              <img src={logo} width="250" height="200" alt="logo" />
            ) : null}
          </div>
          <p className="welcome-subtitle">
            {language === "zh" ? "您的知识之门" : "Your Gateway to Knowledge"}
          </p>
        </div>
      </div>

      <div className="startup-actions">
        <button
          onClick={() => setCurrentPage("login")}
          className="btn btn-primary"
        >
          {language === "zh" ? "登录" : "Log In"}
        </button>
        <button
          onClick={() => setCurrentPage("register")}
          className="btn btn-secondary"
        >
          {language === "zh" ? "注册" : "Register"}
        </button>

        <div className="language-selector">
          <button
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            className="language-btn"
          >
            <Globe size={20} />
            <span>{language === "zh" ? "中文" : "English"}</span>
          </button>

          {showLanguageMenu && (
            <div className="language-menu">
              <button
                onClick={() => {
                  setLanguage("zh");
                  setShowLanguageMenu(false);
                }}
              >
                中文
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  setShowLanguageMenu(false);
                }}
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupPage;
