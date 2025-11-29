// Login Page

import { useState } from "react";

const LoginPage = ({ language, setCurrentPage, elderlyMode, onLogin }) => {
  const [accountNum, setAccountNum] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (onLogin) onLogin(accountNum);
    setCurrentPage("dashboard");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <button onClick={() => setCurrentPage("startup")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "登录" : "Log In"}</h1>
      </div>

      <div className="login-container">
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
            {language === "zh" ? "忘记密码?" : "Forgot your ID?"}
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
