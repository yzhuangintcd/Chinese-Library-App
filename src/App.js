// import React, { useState } from "react";
// import "./App.css";
// import logo from "./assets/logo.png";
// import {
//   StartupPage,
//   RegisterPage,
//   LoginPage,
//   DashboardPage,
//   BookingsPage,
//   BorrowBookPage,
//   PaymentPage,
//   BottomNav,
// } from "./pages";

// const LibraryApp = () => {
//   const [currentPage, setCurrentPage] = useState("startup");
//   const [language, setLanguage] = useState("zh");
//   const [user, setUser] = useState(null);
//   const [elderlyMode, setElderlyMode] = useState(false);
//   const [recentActivities, setRecentActivities] = useState([]);
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const addActivity = (text) => setRecentActivities((s) => [text, ...s]);

//   const handleRegister = (form) => {
//     const accountNumber = "LIB" + Math.random().toString(36).slice(2, 8).toUpperCase();
//     setUser({ ...form, accountNumber });
//     addActivity(`Registered: ${accountNumber}`);
//   };

//   const handleLogin = (accountNum) => {
//     setUser({ accountNumber: accountNum });
//     addActivity(`Logged in: ${accountNum}`);
//   };

//   const handleSignOut = () => {
//     setUser(null);
//     setCurrentPage("startup");
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "startup":
//         return (
//           <StartupPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             showLanguageMenu={showLanguageMenu}
//             setShowLanguageMenu={setShowLanguageMenu}
//             setLanguage={setLanguage}
//             elderlyMode={elderlyMode}
//             logo={logo}
//           />
//         );
//       case "register":
//         return (
//           <RegisterPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             elderlyMode={elderlyMode}
//             onRegister={(f) => { handleRegister(f); setCurrentPage('dashboard'); }}
//           />
//         );
//       case "login":
//         return (
//           <LoginPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             elderlyMode={elderlyMode}
//             onLogin={(a)=>{ handleLogin(a); setCurrentPage('dashboard'); }}
//           />
//         );
//       case "dashboard":
//         return (
//           <DashboardPage
//             language={language}
//             elderlyMode={elderlyMode}
//             user={user}
//             recentActivities={recentActivities}
//             showProfileMenu={showProfileMenu}
//             setShowProfileMenu={setShowProfileMenu}
//             setElderlyMode={setElderlyMode}
//             setShowLanguageMenu={setShowLanguageMenu}
//             handleSignOut={handleSignOut}
//           />
//         );
//       case "bookings":
//         return <BookingsPage language={language} elderlyMode={elderlyMode} setCurrentPage={setCurrentPage} />;
//       case "borrow":
//       case "borrow-book":
//         return <BorrowBookPage language={language} elderlyMode={elderlyMode} setCurrentPage={setCurrentPage} addActivity={addActivity} />;
//       case "payments":
//       case "payment":
//         return <PaymentPage language={language} elderlyMode={elderlyMode} setCurrentPage={setCurrentPage} />;
//       default:
//         return (
//           <StartupPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             showLanguageMenu={showLanguageMenu}
//             setShowLanguageMenu={setShowLanguageMenu}
//             setLanguage={setLanguage}
//             elderlyMode={elderlyMode}
//             logo={logo}
//           />
//         );
//     }
//   };

//   return (
//     <div className="app-container">
//       {renderPage()}
//       <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
//     </div>
//   );
// };

// export default LibraryApp;

// import React, { useState } from "react";
// import "./App.css";
// import logo from "./assets/logo.png";
// import {
//   StartupPage,
//   RegisterPage,
//   LoginPage,
//   DashboardPage,
//   BookingsPage,
//   BorrowBookPage,
//   PaymentPage,
//   BottomNav,
// } from "./pages";

// const LibraryApp = () => {
//   const [currentPage, setCurrentPage] = useState("startup");
//   const [language, setLanguage] = useState("zh");
//   const [user, setUser] = useState(null);
//   const [elderlyMode, setElderlyMode] = useState(false);
//   const [recentActivities, setRecentActivities] = useState([]);
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const addActivity = (text) => setRecentActivities((s) => [text, ...s]);

//   const handleRegister = (form) => {
//     const accountNumber = "LIB" + Math.random().toString(36).slice(2, 8).toUpperCase();
//     setUser({ ...form, accountNumber });
//     addActivity(`Registered: ${accountNumber}`);
//   };

//   const handleLogin = (accountNum) => {
//     setUser({ accountNumber: accountNum });
//     addActivity(`Logged in: ${accountNum}`);
//   };

//   const handleSignOut = () => {
//     setUser(null);
//     setCurrentPage("startup");
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "startup":
//         return (
//           <StartupPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             showLanguageMenu={showLanguageMenu}
//             setShowLanguageMenu={setShowLanguageMenu}
//             setLanguage={setLanguage}
//             elderlyMode={elderlyMode}
//             logo={logo}
//           />
//         );
//       case "register":
//         return (
//           <RegisterPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             elderlyMode={elderlyMode}
//             onRegister={(f) => { handleRegister(f); setCurrentPage('dashboard'); }}
//           />
//         );
//       case "login":
//         return (
//           <LoginPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             elderlyMode={elderlyMode}
//             onLogin={(a)=>{ handleLogin(a); setCurrentPage('dashboard'); }}
//           />
//         );
//       case "dashboard":
//         return (
//           <DashboardPage
//             language={language}
//             elderlyMode={elderlyMode}
//             user={user}
//             recentActivities={recentActivities}
//             showProfileMenu={showProfileMenu}
//             setShowProfileMenu={setShowProfileMenu}
//             setElderlyMode={setElderlyMode}
//             setShowLanguageMenu={setShowLanguageMenu}
//             handleSignOut={handleSignOut}
//           />
//         );
//       case "bookings":
//         return <BookingsPage language={language} elderlyMode={elderlyMode} setCurrentPage={setCurrentPage} />;
//       case "borrow":
//       case "borrow-book":
//         return <BorrowBookPage language={language} elderlyMode={elderlyMode} setCurrentPage={setCurrentPage} addActivity={addActivity} />;
//       case "payments":
//       case "payment":
//         return <PaymentPage language={language} elderlyMode={elderlyMode} setCurrentPage={setCurrentPage} />;
//       default:
//         return (
//           <StartupPage
//             language={language}
//             setCurrentPage={setCurrentPage}
//             showLanguageMenu={showLanguageMenu}
//             setShowLanguageMenu={setShowLanguageMenu}
//             setLanguage={setLanguage}
//             elderlyMode={elderlyMode}
//             logo={logo}
//           />
//         );
//     }
//   };

//   return (
//     <div className="app-container">
//       {renderPage()}
//       <BottomNav currentPage={currentPage} setCurrentPage={setCurrentPage} />
//     </div>
//   );
// };

// export default LibraryApp;
// ------------------------------------------
// import React, { useState } from "react";
// import {
//   Home,
//   BookOpen,
//   CreditCard,
//   ChevronRight,
//   Globe,
//   MapPin,
//   Calendar,
//   Bell,
// } from "lucide-react";
// import "./App.css";

// import logo from "./assets/logo.png";
// import logo2 from "./assets/logo-transparent.png";

// const LibraryApp = () => {
//   const [currentPage, setCurrentPage] = useState("startup");
//   const [language, setLanguage] = useState("zh");
//   const [user, setUser] = useState(null);
//   const [elderlyMode, setElderlyMode] = useState(false);
//   const [recentActivities, setRecentActivities] = useState([]);
//   const [showLanguageMenu, setShowLanguageMenu] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   // Startup Page
//   const StartupPage = () => (
//     <div className={`startup-page ${elderlyMode ? "elderly-mode" : ""}`}>
//       <div className="startup-content">
//         <div className="logo-container">
//           <h1 className="welcome-title">
//             {language === "zh"
//               ? "欢迎来到中国国家图书馆"
//               : "Welcome to the National Library of China"}
//           </h1>
//           <div className="logo-placeholder">
//             <img src={logo2} width="250" height="200"></img>
//           </div>
//           <p className="welcome-subtitle">
//             {language === "zh" ? "您的知识之门" : "Your Gateway to Knowledge"}
//           </p>
//         </div>
//       </div>

//       <div className="startup-actions">
//         <button
//           onClick={() => setCurrentPage("login")}
//           className="btn btn-primary"
//         >
//           {language === "zh" ? "登录" : "Log In"}
//         </button>
//         <button
//           onClick={() => setCurrentPage("register")}
//           className="btn btn-secondary"
//         >
//           {language === "zh" ? "注册" : "Register"}
//         </button>

//         <div className="language-selector">
//           <button
//             onClick={() => setShowLanguageMenu(!showLanguageMenu)}
//             className="language-btn"
//           >
//             <Globe size={20} />
//             <span>{language === "zh" ? "中文" : "English"}</span>
//           </button>

//           {showLanguageMenu && (
//             <div className="language-menu">
//               <button
//                 onClick={() => {
//                   setLanguage("zh");
//                   setShowLanguageMenu(false);
//                 }}
//               >
//                 中文
//               </button>
//               <button
//                 onClick={() => {
//                   setLanguage("en");
//                   setShowLanguageMenu(false);
//                 }}
//               >
//                 English
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // Register Page
//   const RegisterPage = () => {
//     const [userType, setUserType] = useState("");
//     const [formData, setFormData] = useState({
//       idNumber: "",
//       phone: "",
//       guardianId: "",
//       nationality: "",
//       passport: "",
//       visa: "",
//       password: "",
//       useOTP: false,
//       agreedToTerms: false,
//     });
//     const [accountNumber, setAccountNumber] = useState("");

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (!formData.agreedToTerms) {
//         alert(
//           language === "zh"
//             ? "请同意条款和条件"
//             : "Please agree to terms and conditions"
//         );
//         return;
//       }
//       const newAccountNumber =
//         "LIB" + Math.random().toString(36).substr(2, 9).toUpperCase();
//       setAccountNumber(newAccountNumber);
//     };

//     if (accountNumber) {
//       return (
//         <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//           <div className="success-container">
//             <div className="success-icon">✓</div>
//             <h2>
//               {language === "zh" ? "注册成功！" : "Registration Successful!"}
//             </h2>
//             <p className="account-label">
//               {language === "zh" ? "您的账户号码：" : "Your Account Number:"}
//             </p>
//             <p className="account-number">{accountNumber}</p>
//             <div className="biometric-section">
//               <p>
//                 {language === "zh"
//                   ? "启用生物识别登录？"
//                   : "Enable Biometric Login?"}
//               </p>
//               <button className="btn btn-small">
//                 {language === "zh" ? "设置" : "Set Up"}
//               </button>
//             </div>
//             <button
//               onClick={() => {
//                 setUser({ accountNumber });
//                 setCurrentPage("dashboard");
//               }}
//               className="btn btn-primary"
//             >
//               {language === "zh" ? "继续" : "Continue"}
//             </button>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//         <div className="page-header">
//           <button
//             onClick={() => setCurrentPage("startup")}
//             className="back-btn"
//           >
//             ← {language === "zh" ? "返回" : "Back"}
//           </button>
//           <h1>{language === "zh" ? "注册" : "Register"}</h1>
//         </div>

//         <div className="page-content">
//           {!userType ? (
//             <div>
//               <p className="section-title">
//                 {language === "zh" ? "选择用户类型" : "Select User Type"}
//               </p>
//               <button
//                 onClick={() => setUserType("adult_chinese")}
//                 className="user-type-btn"
//               >
//                 <p className="user-type-title">
//                   {language === "zh"
//                     ? "成人（中国公民）"
//                     : "Adult (Chinese Citizen)"}
//                 </p>
//                 <p className="user-type-desc">
//                   {language === "zh"
//                     ? "使用身份证注册"
//                     : "Register with ID number"}
//                 </p>
//               </button>
//               <button
//                 onClick={() => setUserType("child")}
//                 className="user-type-btn"
//               >
//                 <p className="user-type-title">
//                   {language === "zh" ? "儿童" : "Child"}
//                 </p>
//                 <p className="user-type-desc">
//                   {language === "zh"
//                     ? "需要监护人身份证"
//                     : "Requires guardian ID"}
//                 </p>
//               </button>
//               <button
//                 onClick={() => setUserType("foreign")}
//                 className="user-type-btn"
//               >
//                 <p className="user-type-title">
//                   {language === "zh" ? "外籍人士" : "Foreign National"}
//                 </p>
//                 <p className="user-type-desc">
//                   {language === "zh"
//                     ? "使用护照注册"
//                     : "Register with passport"}
//                 </p>
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="register-form">
//               {userType === "adult_chinese" && (
//                 <>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh" ? "身份证号码" : "ID Number"}
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.idNumber}
//                       onChange={(e) =>
//                         setFormData({ ...formData, idNumber: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh" ? "手机号码" : "Phone Number"}
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                 </>
//               )}

//               {userType === "child" && (
//                 <>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh"
//                         ? "监护人身份证"
//                         : "Guardian ID Number"}
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.guardianId}
//                       onChange={(e) =>
//                         setFormData({ ...formData, guardianId: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh" ? "手机号码" : "Phone Number"}
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                 </>
//               )}

//               {userType === "foreign" && (
//                 <>
//                   <div className="form-group">
//                     <label>{language === "zh" ? "国籍" : "Nationality"}</label>
//                     <input
//                       type="text"
//                       value={formData.nationality}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           nationality: e.target.value,
//                         })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh" ? "护照号码" : "Passport Number"}
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.passport}
//                       onChange={(e) =>
//                         setFormData({ ...formData, passport: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh" ? "签证信息" : "Visa Information"}
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.visa}
//                       onChange={(e) =>
//                         setFormData({ ...formData, visa: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       {language === "zh" ? "手机号码" : "Phone Number"}
//                     </label>
//                     <input
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({ ...formData, phone: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                 </>
//               )}

//               <div className="form-group">
//                 <label>{language === "zh" ? "密码" : "Password"}</label>
//                 <input
//                   type="password"
//                   value={formData.password}
//                   onChange={(e) =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                   disabled={formData.useOTP}
//                   required={!formData.useOTP}
//                 />
                
//                 <label className="checkbox-label">
//                   <input
//                     type="checkbox"
//                     checked={formData.useOTP}
//                     onChange={(e) =>
//                       setFormData({ ...formData, useOTP: e.target.checked })
//                     }
//                   />
//                   <span>
//                     {language === "zh"
//                       ? "使用一次性密码（OTP）"
//                       : "Use OTP instead"}
//                   </span>
//                 </label>
//               </div>

//               <div className="form-group">
//                 <label className="checkbox-label">
//                   <input
//                     type="checkbox"
//                     checked={formData.agreedToTerms}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         agreedToTerms: e.target.checked,
//                       })
//                     }
//                     required
//                   />
//                   <span>
//                     {language === "zh" ? "我同意" : "I agree to the "}
//                     <a href="#" className="link">
//                       {language === "zh"
//                         ? "条款和条件"
//                         : "Terms and Conditions"}
//                     </a>
//                   </span>
//                 </label>
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 {language === "zh" ? "注册" : "Register"}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setUserType("")}
//                 className="btn btn-secondary"
//               >
//                 {language === "zh" ? "返回" : "Back"}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // Login Page
//   const LoginPage = () => {
//     const [accountNum, setAccountNum] = useState("");

//     const handleLogin = (e) => {
//       e.preventDefault();
//       setUser({ accountNumber: accountNum });
//       setCurrentPage("dashboard");
//     };

//     return (
//       <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//         <div className="page-header">
//           <button
//             onClick={() => setCurrentPage("startup")}
//             className="back-btn"
//           >
//             ← {language === "zh" ? "返回" : "Back"}
//           </button>
//           <h1>{language === "zh" ? "登录" : "Log In"}</h1>
//         </div>

//         <div className="login-container">
//           <form onSubmit={handleLogin} className="login-form">
//             <div className="form-group">
//               <label>{language === "zh" ? "账户号码" : "Account Number"}</label>
//               <input
//                 type="text"
//                 value={accountNum}
//                 onChange={(e) => setAccountNum(e.target.value)}
//                 placeholder="LIB..."
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               {language === "zh" ? "登录" : "Log In"}
//             </button>

//             <div className="divider">
//               <span>{language === "zh" ? "或" : "OR"}</span>
//             </div>

//             <button type="button" className="btn btn-biometric">
//               {language === "zh" ? "生物识别登录" : "Biometric Login"}
//             </button>
//             <br></br>
//             <a href="#" className="link">{language === "zh" ? "忘记密码?" : "Forgot your password?"}</a>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   // Dashboard Page
//   const DashboardPage = () => {
//     const events = [
//       {
//         id: 1,
//         title: language === "zh" ? "中国文化讲座" : "Chinese Culture Lecture",
//         date: "2025-11-25",
//         location: language === "zh" ? "北京分馆" : "Beijing Branch",
//       },
//       {
//         id: 2,
//         title: language === "zh" ? "儿童故事时间" : "Children's Story Time",
//         date: "2025-11-23",
//         location: language === "zh" ? "上海分馆" : "Shanghai Branch",
//       },
//       {
//         id: 3,
//         title:
//           language === "zh" ? "数字素养工作坊" : "Digital Literacy Workshop",
//         date: "2025-11-26",
//         location: language === "zh" ? "广州分馆" : "Guangzhou Branch",
//       },
//     ];

//     return (
//       <div className={`page dashboard ${elderlyMode ? "elderly-mode" : ""}`}>
//         <div className="page-header">
//           <div className="header-content">
//             <div className="library-badge">
//               {language === "zh" ? "图书馆" : "LIBRARY"}
//             </div>
//             <div className="profile-container">
//               <button
//                 onClick={() => setShowProfileMenu(!showProfileMenu)}
//                 className="profile-btn"
//               >
//                 {user?.accountNumber?.[3] || "U"}
//               </button>

//               {showProfileMenu && (
//                 <div className="profile-menu">
//                   <div className="profile-info">
//                     <p>{user?.accountNumber}</p>
//                   </div>
//                   <button
//                     onClick={() => setShowLanguageMenu(!showLanguageMenu)}
//                     className="menu-item"
//                   >
//                     <span>{language === "zh" ? "语言" : "Language"}</span>
//                     <ChevronRight size={16} />
//                   </button>
//                   <button
//                     onClick={() => setElderlyMode(!elderlyMode)}
//                     className="menu-item"
//                   >
//                     <span>
//                       {language === "zh"
//                         ? "长者友好模式"
//                         : "Elderly Friendly Mode"}
//                     </span>
//                     <span className={elderlyMode ? "check-mark" : ""}>
//                       {elderlyMode ? "✓" : ""}
//                     </span>
//                   </button>
//                   <button className="menu-item">
//                     {language === "zh" ? "更新账户信息" : "Update Account Info"}
//                   </button>
//                   <button className="menu-item">
//                     {language === "zh" ? "停用账户" : "Deactivate Account"}
//                   </button>
//                   <button
//                     onClick={() => {
//                       setUser(null);
//                       setCurrentPage("startup");
//                       setShowProfileMenu(false);
//                     }}
//                     className="menu-item sign-out"
//                   >
//                     {language === "zh" ? "登出" : "Sign Out"}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//           <h1>{language === "zh" ? "欢迎回来" : "Welcome Back"}</h1>
//         </div>

//         <div className="page-content">
//           <div className="section">
//             <h2>{language === "zh" ? "即将举行的活动" : "Upcoming Events"}</h2>
//             <div className="events-list">
//               {events.map((event) => (
//                 <div key={event.id} className="event-card">
//                   <h3>{event.title}</h3>
//                   <div className="event-info">
//                     <Calendar size={16} />
//                     {event.date}
//                   </div>
//                   <div className="event-info">
//                     <MapPin size={16} />
//                     {event.location}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="section">
//             <h2>{language === "zh" ? "最近活动" : "Recent Activities"}</h2>
//             {recentActivities.length > 0 ? (
//               <div className="activities-list">
//                 {recentActivities.slice(0, 3).map((activity, idx) => (
//                   <div key={idx} className="activity-card">
//                     {activity}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="empty-state">
//                 {language === "zh" ? "暂无活动记录" : "No recent activities"}
//               </div>
//             )}
//           </div>

//           <div className="about-section">
//             <h2>{language === "zh" ? "关于我们" : "About Us"}</h2>
//             <p className="about-text">
//               {language === "zh"
//                 ? "中国国家图书馆致力于为全民提供优质的知识服务，传承文化，启迪智慧。"
//                 : "The National Library of China is dedicated to providing quality knowledge services to all citizens, preserving culture, and inspiring wisdom."}
//             </p>
//             <p className="contact-info">
//               <strong>
//                 {language === "zh" ? "联系我们：" : "Contact Us:"}
//               </strong>
//               <br />
//               {language === "zh" ? "电话：" : "Phone: "}010-8854-5555
//               <br />
//               {language === "zh" ? "邮箱：" : "Email: "}info@nlc.cn
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Bookings Page
//   const BookingsPage = () => {
//     return (
//       <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//         <div className="page-header">
//           <h1>{language === "zh" ? "预订" : "Bookings"}</h1>
//         </div>

//         <div className="page-content">
//           <button
//             onClick={() => {
//               setCurrentPage("borrow-book");
//               setRecentActivities([
//                 ...recentActivities,
//                 language === "zh" ? "浏览借书页面" : "Browsed borrowing books",
//               ]);
//             }}
//             className="booking-option-btn"
//           >
//             <BookOpen size={24} />
//             {language === "zh" ? "借阅图书" : "Borrow a Book"}
//           </button>

//           <button
//             onClick={() => {
//               setRecentActivities([
//                 ...recentActivities,
//                 language === "zh"
//                   ? "浏览预订学习空间页面"
//                   : "Browsed booking study space",
//               ]);
//               alert(
//                 language === "zh"
//                   ? "预订学习空间功能即将推出"
//                   : "Book Study Space feature coming soon"
//               );
//             }}
//             className="booking-option-btn secondary"
//           >
//             <Calendar size={24} />
//             {language === "zh" ? "预订学习空间" : "Book a Study Space"}
//           </button>
//         </div>
//       </div>
//     );
//   };

//   // Borrow Book Page
//   const BorrowBookPage = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const [selectedFilters, setSelectedFilters] = useState({
//       genre: "",
//       sort: "popular",
//     });
//     const [showFilters, setShowFilters] = useState(false);

//     const popularBooks = [
//       {
//         id: 1,
//         title: language === "zh" ? "三体" : "The Three-Body Problem",
//         author: language === "zh" ? "刘慈欣" : "Liu Cixin",
//         genre: "Sci-Fi",
//         rating: 4.8,
//         available: true,
//         location: language === "zh" ? "北京分馆" : "Beijing Branch",
//       },
//       {
//         id: 2,
//         title: language === "zh" ? "活着" : "To Live",
//         author: language === "zh" ? "余华" : "Yu Hua",
//         genre: "Fiction",
//         rating: 4.9,
//         available: false,
//         location: language === "zh" ? "上海分馆" : "Shanghai Branch",
//         eta: "3 days",
//       },
//       {
//         id: 3,
//         title: language === "zh" ? "百年孤独" : "One Hundred Years of Solitude",
//         author:
//           language === "zh" ? "加西亚·马尔克斯" : "Gabriel García Márquez",
//         genre: "Fiction",
//         rating: 4.7,
//         available: true,
//         location: language === "zh" ? "北京分馆" : "Beijing Branch",
//       },
//       {
//         id: 4,
//         title: language === "zh" ? "人类简史" : "Sapiens",
//         author: language === "zh" ? "尤瓦尔·赫拉利" : "Yuval Noah Harari",
//         genre: "History",
//         rating: 4.6,
//         available: true,
//         location: language === "zh" ? "广州分馆" : "Guangzhou Branch",
//       },
//     ];

//     const [books, setBooks] = useState(popularBooks);
//     const [expandedBook, setExpandedBook] = useState(null);
//     const [loanConfirmed, setLoanConfirmed] = useState(null);

//     const handleSearch = () => {
//       if (!searchQuery.trim()) {
//         setBooks(popularBooks);
//         return;
//       }

//       const results = popularBooks.filter(
//         (book) =>
//           book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           book.author.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//       if (results.length === 0) {
//         setBooks([]);
//       } else {
//         setBooks(results);
//       }
//     };

//     const handleLoan = (book) => {
//       if (book.available) {
//         const pickupTime = new Date();
//         pickupTime.setHours(pickupTime.getHours() + 2);
//         setLoanConfirmed({
//           ...book,
//           pickupTime: pickupTime.toLocaleString(),
//         });
//         setRecentActivities([
//           ...recentActivities,
//           `${language === "zh" ? "预订了" : "Reserved"} "${book.title}"`,
//         ]);
//       }
//     };

//     const handleOrderIn = (book) => {
//       setLoanConfirmed({
//         ...book,
//         ordered: true,
//         notifyOnArrival: true,
//       });
//       setRecentActivities([
//         ...recentActivities,
//         `${language === "zh" ? "订购了" : "Ordered"} "${book.title}"`,
//       ]);
//     };

//     if (loanConfirmed) {
//       return (
//         <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//           <div className="page-header">
//             <button onClick={() => setLoanConfirmed(null)} className="back-btn">
//               ← {language === "zh" ? "返回" : "Back"}
//             </button>
//             <h1>{language === "zh" ? "预订确认" : "Booking Confirmed"}</h1>
//           </div>

//           <div className="confirmation-container">
//             <div className="success-icon">✓</div>
//             <h2>
//               {loanConfirmed.ordered
//                 ? language === "zh"
//                   ? "订购成功！"
//                   : "Order Placed!"
//                 : language === "zh"
//                 ? "预订成功！"
//                 : "Reservation Confirmed!"}
//             </h2>

//             <div className="confirmation-details">
//               <p className="book-title">{loanConfirmed.title}</p>
//               <p className="book-author">
//                 {language === "zh" ? "作者：" : "by "}
//                 {loanConfirmed.author}
//               </p>

//               {loanConfirmed.ordered ? (
//                 <>
//                   <div className="detail-row">
//                     <MapPin size={18} />
//                     <div>
//                       <p className="detail-label">
//                         {language === "zh" ? "预计到达" : "Estimated Arrival"}
//                       </p>
//                       <p className="detail-value">{loanConfirmed.eta}</p>
//                     </div>
//                   </div>
//                   <div className="detail-row">
//                     <Bell size={18} />
//                     <div>
//                       <p className="detail-label">
//                         {language === "zh" ? "通知" : "Notification"}
//                       </p>
//                       <p className="detail-value">
//                         {language === "zh"
//                           ? "到货时将通知您"
//                           : "You will be notified on arrival"}
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="detail-row">
//                     <MapPin size={18} />
//                     <div>
//                       <p className="detail-label">
//                         {language === "zh" ? "取书地点" : "Pickup Location"}
//                       </p>
//                       <p className="detail-value">{loanConfirmed.location}</p>
//                     </div>
//                   </div>
//                   <div className="detail-row">
//                     <Calendar size={18} />
//                     <div>
//                       <p className="detail-label">
//                         {language === "zh" ? "可取书时间" : "Available From"}
//                       </p>
//                       <p className="detail-value">{loanConfirmed.pickupTime}</p>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>

//             <button
//               onClick={() => {
//                 setLoanConfirmed(null);
//                 setCurrentPage("dashboard");
//               }}
//               className="btn btn-primary"
//             >
//               {language === "zh" ? "返回首页" : "Back to Home"}
//             </button>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//         <div className="page-header search-header">
//           <button
//             onClick={() => setCurrentPage("bookings")}
//             className="back-btn"
//           >
//             ← {language === "zh" ? "返回" : "Back"}
//           </button>
//           <h1>{language === "zh" ? "借阅图书" : "Borrow a Book"}</h1>

//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder={
//                 language === "zh"
//                   ? "搜索书名或作者..."
//                   : "Search by title or author..."
//               }
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//             />
//             <button onClick={handleSearch} className="search-btn">
//               {language === "zh" ? "搜索" : "Search"}
//             </button>
//           </div>
//         </div>

//         <div className="filters-section">
//           <button
//             onClick={() => setShowFilters(!showFilters)}
//             className="filters-toggle"
//           >
//             <span>{language === "zh" ? "筛选" : "Filters"}</span>
//             <ChevronRight className={showFilters ? "rotated" : ""} size={20} />
//           </button>

//           {showFilters && (
//             <div className="filters-content">
//               <div className="filter-group">
//                 <label>{language === "zh" ? "类型" : "Genre"}</label>
//                 <select
//                   value={selectedFilters.genre}
//                   onChange={(e) =>
//                     setSelectedFilters({
//                       ...selectedFilters,
//                       genre: e.target.value,
//                     })
//                   }
//                 >
//                   <option value="">{language === "zh" ? "全部" : "All"}</option>
//                   <option value="Fiction">
//                     {language === "zh" ? "小说" : "Fiction"}
//                   </option>
//                   <option value="Sci-Fi">
//                     {language === "zh" ? "科幻" : "Sci-Fi"}
//                   </option>
//                   <option value="History">
//                     {language === "zh" ? "历史" : "History"}
//                   </option>
//                 </select>
//               </div>
//               <div className="filter-group">
//                 <label>{language === "zh" ? "排序" : "Sort By"}</label>
//                 <select
//                   value={selectedFilters.sort}
//                   onChange={(e) =>
//                     setSelectedFilters({
//                       ...selectedFilters,
//                       sort: e.target.value,
//                     })
//                   }
//                 >
//                   <option value="popular">
//                     {language === "zh" ? "最受欢迎" : "Most Popular"}
//                   </option>
//                   <option value="rating">
//                     {language === "zh" ? "评分最高" : "Highest Rated"}
//                   </option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="page-content">
//           {books.length === 0 && searchQuery ? (
//             <div className="empty-state centered">
//               <p>{language === "zh" ? "未找到相关图书" : "No books found"}</p>
//               <p className="small-text">
//                 {language === "zh"
//                   ? "请联系我们了解更多信息"
//                   : "Please contact us for further enquiries"}
//               </p>
//               <button className="link-btn">
//                 {language === "zh" ? "联系我们" : "Contact Us"}
//               </button>
//             </div>
//           ) : (
//             <>
//               {!searchQuery && (
//                 <h2 className="section-title">
//                   {language === "zh" ? "热门图书" : "Popular Books"}
//                 </h2>
//               )}
//               <div className="books-list">
//                 {books.map((book) => (
//                   <div key={book.id} className="book-card">
//                     <button
//                       onClick={() =>
//                         setExpandedBook(
//                           expandedBook === book.id ? null : book.id
//                         )
//                       }
//                       className="book-header"
//                     >
//                       <div className="book-info">
//                         <h3>{book.title}</h3>
//                         <p className="book-author">{book.author}</p>
//                         <div className="book-meta">
//                           <span className="badge">{book.genre}</span>
//                           <span className="rating">★ {book.rating}</span>
//                           <span
//                             className={`status-badge ${
//                               book.available ? "available" : "unavailable"
//                             }`}
//                           >
//                             {book.available
//                               ? language === "zh"
//                                 ? "可借"
//                                 : "Available"
//                               : language === "zh"
//                               ? "不可借"
//                               : "Unavailable"}
//                           </span>
//                         </div>
//                       </div>
//                       <ChevronRight
//                         className={expandedBook === book.id ? "rotated" : ""}
//                         size={20}
//                       />
//                     </button>

//                     {expandedBook === book.id && (
//                       <div className="book-details">
//                         <div className="location-info">
//                           <MapPin size={18} />
//                           <span>
//                             {language === "zh" ? "地点：" : "Location: "}
//                             {book.location}
//                           </span>
//                         </div>
//                         {!book.available && book.eta && (
//                           <div className="location-info">
//                             <Calendar size={18} />
//                             <span>
//                               {language === "zh" ? "预计到达：" : "ETA: "}
//                               {book.eta}
//                             </span>
//                           </div>
//                         )}

//                         {book.available ? (
//                           <button
//                             onClick={() => handleLoan(book)}
//                             className="btn btn-primary"
//                           >
//                             {language === "zh" ? "借阅" : "Loan"}
//                           </button>
//                         ) : (
//                           <div className="action-buttons">
//                             <button
//                               onClick={() => handleOrderIn(book)}
//                               className="btn btn-warning"
//                             >
//                               {language === "zh" ? "订购" : "Order In"}
//                             </button>
//                             <button className="btn btn-secondary">
//                               <Bell size={18} />
//                               {language === "zh"
//                                 ? "到货通知"
//                                 : "Notify on Arrival"}
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   };

//   // Payment Page (Template)
//   const PaymentPage = () => {
//     return (
//       <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
//         <div className="page-header">
//           <h1>{language === "zh" ? "付款" : "Payments"}</h1>
//         </div>
//         <div className="page-content empty-state centered">
//           <p>
//             {language === "zh"
//               ? "付款功能即将推出"
//               : "Payment features coming soon"}
//           </p>
//         </div>
//       </div>
//     );
//   };

//   // Bottom Navigation
//   const BottomNav = () => {
//     if (
//       !user ||
//       currentPage === "startup" ||
//       currentPage === "login" ||
//       currentPage === "register"
//     )
//       return null;

//     return (
//       <div className="bottom-nav">
//         <button
//           onClick={() => setCurrentPage("dashboard")}
//           className={`nav-item ${currentPage === "dashboard" ? "active" : ""}`}
//         >
//           <Home size={24} />
//           <span>{language === "zh" ? "首页" : "Home"}</span>
//         </button>
//         <button
//           onClick={() => setCurrentPage("bookings")}
//           className={`nav-item ${
//             currentPage === "bookings" || currentPage === "borrow-book"
//               ? "active"
//               : ""
//           }`}
//         >
//           <BookOpen size={24} />
//           <span>{language === "zh" ? "预订" : "Bookings"}</span>
//         </button>
//         <button
//           onClick={() => setCurrentPage("payments")}
//           className={`nav-item ${currentPage === "payments" ? "active" : ""}`}
//         >
//           <CreditCard size={24} />
//           <span>{language === "zh" ? "付款" : "Payments"}</span>
//         </button>
//       </div>
//     );
//   };

//   // Main Router
//   const renderPage = () => {
//     switch (currentPage) {
//       case "startup":
//         return <StartupPage />;
//       case "register":
//         return <RegisterPage />;
//       case "login":
//         return <LoginPage />;
//       case "dashboard":
//         return <DashboardPage />;
//       case "bookings":
//         return <BookingsPage />;
//       case "borrow-book":
//         return <BorrowBookPage />;
//       case "payments":
//         return <PaymentPage />;
//       default:
//         return <StartupPage />;
//     }
//   };

//   return (
//     <div className="app-container">
//       {renderPage()}
//       <BottomNav />
//     </div>
//   );
// };

// export default LibraryApp;
