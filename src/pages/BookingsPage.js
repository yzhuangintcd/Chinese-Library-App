// page that goes to borrow book (Paddy) and book study space (Cora)
import { BookOpen, Calendar } from "lucide-react";

const BookingsPage = ({
  language,
  elderlyMode,
  setCurrentPage,
  recentActivities = [],
  user,
}) => {
  // derive explicit bookings from recentActivities
  const bookings = (recentActivities || []).filter((a) => {
    if (!a || typeof a !== "string") return false;
    const text = a.toLowerCase();
    return (
      text.includes("borrowed") ||
      text.includes("ordered in") ||
      text.includes("booked a study space") ||
      text.includes("booked an event") ||
      text.includes("reserved")
    );
  });
  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <h1>{language === "zh" ? "预订" : "Bookings"}</h1>
      </div>

      <div className="page-content">
        <button
          onClick={() => setCurrentPage("borrow")}
          className="booking-option-btn"
        >
          <BookOpen size={24} />
          {language === "zh" ? "借阅图书" : "Borrow a Book"}
        </button>

        <button
          onClick={() => setCurrentPage("book_space")}
          className="booking-option-btn"
        >
          <Calendar size={24} />
          {language === "zh" ? "预订学习空间" : "Book a Study Space"}
        </button>

        <button
          onClick={() => setCurrentPage("book_event")}
          className="booking-option-btn"
        >
          <Calendar size={24} />
          {language === "zh" ? "预订活动" : "Book an Event"}
        </button>
        {/* Bookings summary area */}
        <div style={{ marginTop: 20 }}>
          <h3 style={{ marginBottom: 8 }}>
            {language === "zh" ? "我的预订" : "My Bookings"}
          </h3>
          {bookings.length > 0 ? (
            <div className="bookings-list">
              {bookings.map((b, i) => (
                <div key={i} className="booking-item">
                  <div className="booking-text">{b}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              {language === "zh" ? "暂无预订" : "No bookings yet"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;
