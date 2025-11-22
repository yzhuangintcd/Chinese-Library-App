// nav bar
import { House, Book, CreditCard } from "lucide-react";

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
        <Book size={20} />
        <span>Bookings</span>
      </button>
      <button
        className={`nav-item ${currentPage === "payments" ? "active" : ""}`}
        onClick={() => setCurrentPage("payments")}
      >
        <CreditCard size={20} />
        <span>Payments</span>
      </button>
    </div>
  );
};

export default BottomNav;
