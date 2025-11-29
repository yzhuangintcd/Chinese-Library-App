// Register Page - Emma

import { useState } from "react";

const RegisterPage = ({
  language,
  setCurrentPage,
  elderlyMode,
  onRegister,
}) => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    idNumber: "",
    phone: "",
    guardianId: "",
    nationality: "",
    passport: "",
    visa: "",
    // password removed: users will login with account id
    agreedToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRegister) onRegister(formData);
    setCurrentPage("dashboard");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <button onClick={() => setCurrentPage("startup")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "注册" : "Register"}</h1>
      </div>

      <div className="page-content">
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
                <div className="form-group">
                  <label>
                    {language === "zh" ? "签证信息" : "Visa Information"}
                  </label>
                  <input
                    type="text"
                    value={formData.visa}
                    onChange={(e) =>
                      setFormData({ ...formData, visa: e.target.value })
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
    </div>
  );
};

export default RegisterPage;
