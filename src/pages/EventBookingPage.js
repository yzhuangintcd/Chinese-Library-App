// book event page - Peng

const EventBookingPage = ({
  language,
  elderlyMode,
  setCurrentPage,
  addActivity,
}) => {
  const handleConfirm = () => {
    if (addActivity)
      addActivity(language === "zh" ? "预订了活动" : "Booked an event");
    setCurrentPage("dashboard");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <button onClick={() => setCurrentPage("bookings")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "预订活动" : "Book an Event"}</h1>
      </div>

      <div className="page-content">
        <p style={{ marginBottom: 16 }}>
          {language === "zh"
            ? "选择您想参加的活动并确认（模板）"
            : "Select an event to attend and confirm (template)"}
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

export default EventBookingPage;
