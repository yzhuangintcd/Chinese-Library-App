// Login Page

import { useState } from "react";
import { Globe } from "lucide-react";

const LoginPage = ({
  language,
  setCurrentPage,
  elderlyMode,
  onLogin,
  setLanguage,
  showLanguageMenu,
  setShowLanguageMenu,
}) => {
  const [accountNum, setAccountNum] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (onLogin) onLogin(accountNum);
    setCurrentPage("dashboard");
  };

  return (
    <div
      className={`page ${elderlyMode ? "elderly-mode" : ""}`}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="page-header">
        <button onClick={() => setCurrentPage("startup")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "登录" : "Log In"}</h1>
      </div>

      <div className="login-container" style={{ flex: 1 }}>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>{language === "zh" ? "账户号码" : "Account Number"}</label>
            <input
              type="text"
              value={accountNum}
              onChange={(e) => setAccountNum(e.target.value)}
              placeholder="LIB..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {language === "zh" ? "登录" : "Log In"}
          </button>

          <div className="divider">
            <span>{language === "zh" ? "或" : "OR"}</span>
          </div>

          <button type="button" className="btn btn-biometric">
            {language === "zh" ? "生物识别登录" : "Biometric Login"}
          </button>
          <br />
          <a href="#" className="link">
            {language === "zh" ? "忘记账户号码?" : "Forgot your account ID?"}
          </a>
        </form>
      </div>

      {/* Language selector at bottom */}
      <div style={{ padding: "24px ", textAlign: "center" }}>
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
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px 12px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "0.875em",
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

export default LoginPage;
