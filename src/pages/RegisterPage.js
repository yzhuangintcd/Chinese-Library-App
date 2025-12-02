// Register Page - Emma

import { useState } from "react";
import { Globe, HelpCircle } from "lucide-react";

const RegisterPage = ({
  language,
  setCurrentPage,
  elderlyMode,
  onRegister,
  setLanguage,
  showLanguageMenu,
  setShowLanguageMenu,
}) => {
  const [userType, setUserType] = useState("");
  const [showPassportHelp, setShowPassportHelp] = useState(false);
  const [formData, setFormData] = useState({
    idNumber: "",
    phone: "",
    guardianId: "",
    nationality: "",
    passport: "",
    passportImage: null,
    tempAddress: "",
    visa: "",
    // password removed: users will login with account id
    agreedToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRegister) onRegister(formData);
    setCurrentPage("dashboard");
  };

  const handlePassportImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, passportImage: e.target.files[0] });
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div className="page-header">
        <button onClick={() => setCurrentPage("startup")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "注册" : "Register"}</h1>
      </div>

      <div className="page-content" style={{ flex: 1 }}>
        {!userType ? (
          <div>
            <p className="section-title">
              {language === "zh" ? "选择用户类型" : "Select User Type"}
            </p>
            <button
              onClick={() => setUserType("adult_chinese")}
              className="user-type-btn"
            >
              <p className="user-type-title">
                {language === "zh"
                  ? "成人（中国公民）"
                  : "Adult (Chinese Citizen)"}
              </p>
              <p className="user-type-desc">
                {language === "zh"
                  ? "使用身份证注册"
                  : "Register with ID number"}
              </p>
            </button>
            <button
              onClick={() => setUserType("child")}
              className="user-type-btn"
            >
              <p className="user-type-title">
                {language === "zh" ? "儿童" : "Child"}
              </p>
              <p className="user-type-desc">
                {language === "zh"
                  ? "需要监护人身份证"
                  : "Requires guardian ID"}
              </p>
            </button>
            <button
              onClick={() => setUserType("foreign")}
              className="user-type-btn"
            >
              <p className="user-type-title">
                {language === "zh" ? "外籍人士" : "Foreign National"}
              </p>
              <p className="user-type-desc">
                {language === "zh" ? "使用护照注册" : "Register with passport"}
              </p>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="register-form">
            {userType === "adult_chinese" && (
              <>
                <div className="form-group">
                  <label>
                    {language === "zh" ? "身份证号码" : "ID Number"}
                  </label>
                  <input
                    type="text"
                    value={formData.idNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, idNumber: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    {language === "zh" ? "手机号码" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </>
            )}

            {userType === "child" && (
              <>
                <div className="form-group">
                  <label>
                    {language === "zh" ? "监护人身份证" : "Guardian ID Number"}
                  </label>
                  <input
                    type="text"
                    value={formData.guardianId}
                    onChange={(e) =>
                      setFormData({ ...formData, guardianId: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    {language === "zh" ? "手机号码" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </>
            )}

            {userType === "foreign" && (
              <>
                <div className="form-group">
                  <label>{language === "zh" ? "国籍" : "Nationality"}</label>
                  <input
                    type="text"
                    value={formData.nationality}
                    onChange={(e) =>
                      setFormData({ ...formData, nationality: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    {language === "zh" ? "护照号码" : "Passport Number"}
                  </label>
                  <input
                    type="text"
                    value={formData.passport}
                    onChange={(e) =>
                      setFormData({ ...formData, passport: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Passport Image Upload with Help Icon */}
                <div className="form-group">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 6,
                    }}
                  >
                    <label>
                      {language === "zh" ? "护照照片" : "Passport Image"}
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassportHelp(!showPassportHelp)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        color: "#2563EB",
                      }}
                      title={
                        language === "zh"
                          ? "查看护照要求"
                          : "View passport requirements"
                      }
                    >
                      <HelpCircle size={18} />
                    </button>
                  </div>

                  {/* Passport Help Popup */}
                  {showPassportHelp && (
                    <div
                      style={{
                        background: "#F0F9FF",
                        border: "1px solid #BFE7FF",
                        borderRadius: 8,
                        padding: 12,
                        marginBottom: 12,
                        fontSize: "0.875em",
                        color: "#0369A1",
                      }}
                    >
                      <p style={{ margin: "0 0 8px 0", fontWeight: 600 }}>
                        {language === "zh"
                          ? "护照照片要求："
                          : "Passport Image Requirements:"}
                      </p>
                      <ul style={{ margin: "0 0 0 16px", paddingLeft: 0 }}>
                        <li>
                          {language === "zh"
                            ? "清晰的、正面的护照首页照片"
                            : "Clear, front-facing photo of passport cover page"}
                        </li>
                        <li>
                          {language === "zh"
                            ? "个人信息页面必须清晰可见"
                            : "Personal information page must be clearly visible"}
                        </li>
                        <li>
                          {language === "zh"
                            ? "文件格式：JPG、PNG 或 PDF"
                            : "File formats: JPG, PNG, or PDF"}
                        </li>
                        <li>
                          {language === "zh"
                            ? "文件大小不超过 5MB"
                            : "File size not exceeding 5MB"}
                        </li>
                      </ul>
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/jpeg,image/png,application/pdf"
                    onChange={handlePassportImageChange}
                    required
                    style={{ width: "100%", padding: 8 }}
                  />
                  {formData.passportImage && (
                    <p
                      style={{
                        color: "#10B981",
                        fontSize: "0.875em",
                        marginTop: 4,
                      }}
                    >
                      ✓ {formData.passportImage.name}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label>
                    {language === "zh" ? "临时地址" : "Temporary Address"}
                  </label>
                  <input
                    type="text"
                    value={formData.tempAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, tempAddress: e.target.value })
                    }
                    placeholder={
                      language === "zh"
                        ? "请输入您在中国的地址"
                        : "Enter your address in China"
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    {language === "zh" ? "手机号码" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
              </>
            )}

            {/* Password field removed: users will sign in with account ID */}

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreedToTerms: e.target.checked,
                    })
                  }
                  required
                />
                <span>
                  {language === "zh" ? "我同意" : "I agree to the "}{" "}
                  <a href="#" className="link">
                    {language === "zh" ? "条款和条件" : "Terms and Conditions"}
                  </a>
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              {language === "zh" ? "注册" : "Register"}
            </button>
            <button
              type="button"
              onClick={() => setUserType("")}
              className="btn btn-secondary"
            >
              {language === "zh" ? "返回" : "Back"}
            </button>
          </form>
        )}
      </div>

      <div style={{ padding: "24px 24px 32px", textAlign: "center" }}>
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
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
