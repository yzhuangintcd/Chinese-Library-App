import React from "react";

const BookSpacePage = ({
  language,
  elderlyMode,
  setCurrentPage,
  addActivity,
}) => {
  const handleConfirm = () => {
    if (addActivity)
      addActivity(
        language === "zh" ? "预订了学习空间" : "Booked a study space"
      );
    setCurrentPage("dashboard");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <button onClick={() => setCurrentPage("bookings")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "预订学习空间" : "Book a Study Space"}</h1>
      </div>

      <div className="page-content">
        <p style={{ marginBottom: 16 }}>
          {language === "zh"
            ? "选择日期和时段以预订学习空间（模板）"
            : "Select a date and time slot to book a study space (template)"}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button onClick={handleConfirm} className="btn btn-primary">
            {language === "zh" ? "确认预订" : "Confirm Booking"}
          </button>
          <button
            onClick={() => setCurrentPage("bookings")}
            className="btn btn-secondary"
          >
            {language === "zh" ? "取消" : "Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSpacePage;
