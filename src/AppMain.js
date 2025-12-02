// Router page

import { useState } from "react";
import "./App.css";
import logo from "./assets/logo-transparent.png";
import {
  StartupPage,
  RegisterPage,
  LoginPage,
  DashboardPage,
  BookingsPage,
  BorrowBookPage,
  BookSpacePage,
  EventBookingPage,
  BookCheckoutPage,
  BookConfirmationPage,
  PaymentPage,
  BottomNav,
} from "./pages";

const LibraryApp = () => {
  const [currentPage, setCurrentPage] = useState("startup");
  const [language, setLanguage] = useState("zh");
  const [user, setUser] = useState(null);
  const [elderlyMode, setElderlyMode] = useState(false);
  const [recentActivities, setRecentActivities] = useState([]);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [checkoutData, setCheckoutData] = useState({});

  const addActivity = (text) => setRecentActivities((s) => [text, ...s]);

  const handleRegister = (form) => {
    const accountNumber =
      "LIB" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setUser({ ...form, accountNumber });
  };

  const handleLogin = (accountNum) => {
    setUser({ accountNumber: accountNum });
  };

  const handleSignOut = () => {
    // clear user session and sensitive state
    setUser(null);
    setRecentActivities([]);
    setCurrentPage("startup");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "startup":
        return (
          <StartupPage
            language={language}
            setCurrentPage={setCurrentPage}
            showLanguageMenu={showLanguageMenu}
            setShowLanguageMenu={setShowLanguageMenu}
            setLanguage={setLanguage}
            elderlyMode={elderlyMode}
            logo={logo}
          />
        );
      case "register":
        return (
          <RegisterPage
            language={language}
            setCurrentPage={setCurrentPage}
            elderlyMode={elderlyMode}
            onRegister={(f) => {
              handleRegister(f);
              setCurrentPage("dashboard");
            }}
            setLanguage={setLanguage}
            showLanguageMenu={showLanguageMenu}
            setShowLanguageMenu={setShowLanguageMenu}
          />
        );
      case "login":
        return (
          <LoginPage
            language={language}
            setCurrentPage={setCurrentPage}
            elderlyMode={elderlyMode}
            onLogin={(a) => {
              handleLogin(a);
              setCurrentPage("dashboard");
            }}
            setLanguage={setLanguage}
            showLanguageMenu={showLanguageMenu}
            setShowLanguageMenu={setShowLanguageMenu}
          />
        );
      case "dashboard":
        return (
          <DashboardPage
            language={language}
            elderlyMode={elderlyMode}
            user={user}
            recentActivities={recentActivities}
            showProfileMenu={showProfileMenu}
            setShowProfileMenu={setShowProfileMenu}
            setElderlyMode={setElderlyMode}
            setShowLanguageMenu={setShowLanguageMenu}
            setLanguage={setLanguage}
            handleSignOut={handleSignOut}
          />
        );
      case "bookings":
        return (
          <BookingsPage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
            recentActivities={recentActivities}
            user={user}
            setSelectedBook={setSelectedBook}
          />
        );
      case "book_space":
        return (
          <BookSpacePage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
            addActivity={addActivity}
          />
        );
      case "book_event":
        return (
          <EventBookingPage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
            addActivity={addActivity}
          />
        );
      case "borrow":
      case "borrow-book":
        return (
          <BorrowBookPage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
            addActivity={addActivity}
            setSelectedBook={setSelectedBook}
            setCheckoutData={setCheckoutData}
          />
        );
      case "checkout":
        return (
          <BookCheckoutPage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
            selectedBook={selectedBook}
            checkoutData={checkoutData}
            setCheckoutData={setCheckoutData}
          />
        );
      case "checkout-confirmation":
        return (
          <BookConfirmationPage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
            selectedBook={selectedBook}
            checkoutData={checkoutData}
            addActivity={addActivity}
          />
        );
      case "payments":
      case "payment":
        return (
          <PaymentPage
            language={language}
            elderlyMode={elderlyMode}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return (
          <StartupPage
            language={language}
            setCurrentPage={setCurrentPage}
            showLanguageMenu={showLanguageMenu}
            setShowLanguageMenu={setShowLanguageMenu}
            setLanguage={setLanguage}
            elderlyMode={elderlyMode}
            logo={logo}
          />
        );
    }
  };

  const showBottomNav =
    user && !["startup", "login", "register"].includes(currentPage);

  return (
    <div className="app-container">
      {renderPage()}
      {showBottomNav && (
        <BottomNav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          language={language}
        />
      )}
    </div>
  );
};

export default LibraryApp;
