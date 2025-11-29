// nav bar
import { House, Search, BookOpen, Calendar, CreditCard } from "lucide-react";

const BottomNav = ({ currentPage, setCurrentPage, language }) => {
  console.log("BottomNav language:", language);
  
  const labels = {
    dashboard: language === "zh" ? "主页" : "Home",
    bookings: language === "zh" ? "搜索" : "Search",
    book_space: language === "zh" ? "学习空间" : "Study Space",
    book_event: language === "zh" ? "活动" : "Events",
    payments: language === "zh" ? "支付" : "Payment"
  };

  return (
    <div className="bottom-nav">
      <button
        className={`nav-item ${currentPage === "dashboard" ? "active" : ""}`}
        onClick={() => setCurrentPage("dashboard")}
      >
        <House size={20} />
        <span>{labels.dashboard}</span>
      </button>
      <button
        className={`nav-item ${currentPage === "bookings" ? "active" : ""}`}
        onClick={() => setCurrentPage("bookings")}
      >
        <Search size={20} />
        <span>{labels.bookings}</span>
      </button>
      <button
        className={`nav-item ${currentPage === "book_space" ? "active" : ""}`}
        onClick={() => setCurrentPage("book_space")}
      >
        <BookOpen size={20} />
        <span>{labels.book_space}</span>
      </button>
      <button
        className={`nav-item ${currentPage === "book_event" ? "active" : ""}`}
        onClick={() => setCurrentPage("book_event")}
      >
        <Calendar size={20} />
        <span>{labels.book_event}</span>
      </button>
      <button
        className={`nav-item ${currentPage === "payments" ? "active" : ""}`}
        onClick={() => setCurrentPage("payments")}
      >
        <CreditCard size={20} />
        <span>{labels.payments}</span>
      </button>
    </div>
  );
};

export default BottomNav;