// nav bar
import { House, Search, BookOpen, Calendar, CreditCard } from "lucide-react";

const BottomNav = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="bottom-nav">
      <button
        className={`nav-item ${currentPage === "dashboard" ? "active" : ""}`}
        onClick={() => setCurrentPage("dashboard")}
      >
        <House size={20} />
        <span>Home</span>
      </button>
      <button
        className={`nav-item ${currentPage === "bookings" ? "active" : ""}`}
        onClick={() => setCurrentPage("bookings")}
      >
        <Search size={20} />
        <span>Search</span>
      </button>
      <button
        className={`nav-item ${currentPage === "book_space" ? "active" : ""}`}
        onClick={() => setCurrentPage("book_space")}
      >
        <BookOpen size={20} />
        <span>Study</span>
      </button>
      <button
        className={`nav-item ${currentPage === "book_event" ? "active" : ""}`}
        onClick={() => setCurrentPage("book_event")}
      >
        <Calendar size={20} />
        <span>Event</span>
      </button>
      <button
        className={`nav-item ${currentPage === "payments" ? "active" : ""}`}
        onClick={() => setCurrentPage("payments")}
      >
        <CreditCard size={20} />
        <span>Payment</span>
      </button>
    </div>
  );
};

export default BottomNav;
