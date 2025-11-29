import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BookCheckoutPage = ({
  language,
  elderlyMode,
  setCurrentPage,
  selectedBook,
  setCheckoutData,
}) => {
  const [localCheckoutData, setLocalCheckoutData] = useState({
    pickupDate: "",
    pickupTime: "",
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  const timeSlots = [
    {
      label: language === "zh" ? "09:00 - 12:00" : "09:00 - 12:00",
      value: "09:00-12:00",
    },
    {
      label: language === "zh" ? "12:00 - 15:00" : "12:00 - 15:00",
      value: "12:00-15:00",
    },
    {
      label: language === "zh" ? "15:00 - 18:00" : "15:00 - 18:00",
      value: "15:00-18:00",
    },
    {
      label: language === "zh" ? "18:00 - 21:00" : "18:00 - 21:00",
      value: "18:00-21:00",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalCheckoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!localCheckoutData.pickupDate)
      newErrors.pickupDate =
        language === "zh" ? "请选择取书日期" : "Please select pickup date";
    if (!localCheckoutData.pickupTime)
      newErrors.pickupTime =
        language === "zh" ? "请选择取书时间" : "Please select pickup time";
    if (!localCheckoutData.name.trim())
      newErrors.name =
        language === "zh" ? "请输入姓名" : "Please enter your name";
    if (!localCheckoutData.phone.trim())
      newErrors.phone =
        language === "zh" ? "请输入电话号码" : "Please enter phone number";
    return newErrors;
  };

  const handleConfirm = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // save checkout data to parent and navigate to confirmation page
    if (typeof setCheckoutData === "function") {
      setCheckoutData(localCheckoutData);
    }
    setCurrentPage("checkout-confirmation");
  };

  // Calculate valid date range (next 14 days)
  const getValidDates = () => {
    const dates = new Set();
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.add(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  const validDates = getValidDates();

  // Calendar rendering functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCalendarMonth(
      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCalendarMonth(
      new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1)
    );
  };

  const handleDateSelect = (day) => {
    const selected = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth(),
      day
    );
    const dateStr = selected.toISOString().split("T")[0];
    if (validDates.has(dateStr)) {
      setLocalCheckoutData((prev) => ({
        ...prev,
        pickupDate: dateStr,
      }));
      setShowCalendar(false);
      if (errors.pickupDate) {
        setErrors((prev) => ({
          ...prev,
          pickupDate: "",
        }));
      }
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(calendarMonth);
    const firstDay = getFirstDayOfMonth(calendarMonth);
    const days = [];
    const today = new Date();

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }

    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth(),
        day
      );
      const dateStr = date.toISOString().split("T")[0];
      const isValid = validDates.has(dateStr);
      const isSelected = localCheckoutData.pickupDate === dateStr;
      const isPast = date < today;

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(day)}
          disabled={!isValid || isPast}
          style={{
            padding: 8,
            border: isSelected ? "2px solid #2563EB" : "1px solid #E5E7EB",
            borderRadius: 6,
            background: isSelected ? "#EFF6FF" : isPast ? "#F3F4F6" : "white",
            color: isSelected ? "#2563EB" : isPast ? "#9CA3AF" : "#1F2937",
            cursor: isValid && !isPast ? "pointer" : "not-allowed",
            fontWeight: isSelected ? 600 : 400,
            fontSize: "0.875em",
            opacity: !isValid || isPast ? 0.5 : 1,
          }}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <button onClick={() => setCurrentPage("bookings")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "确认取书详情" : "Confirm Pickup Details"}</h1>
      </div>

      <div className="page-content">
        {/* Book info summary */}
        {selectedBook && (
          <div
            style={{
              background: "#F3F4F6",
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <img
              src={selectedBook.cover}
              alt={selectedBook.title}
              style={{
                width: 60,
                height: 80,
                objectFit: "cover",
                borderRadius: 4,
                flexShrink: 0,
              }}
            />
            <div>
              <p style={{ fontWeight: 600, marginBottom: 4 }}>
                {selectedBook.title}
              </p>
              <p style={{ fontSize: "0.875em", color: "#6B7280" }}>
                {language === "zh" ? "作者：" : "Author: "}
                {selectedBook.author}
              </p>
            </div>
          </div>
        )}

        {/* Pickup date selection with calendar */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
            {language === "zh"
              ? "请选择取书日期（14天内）"
              : "Select Pickup Date (within 14 days)"}
          </label>
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              style={{
                width: "100%",
                padding: 12,
                border: errors.pickupDate
                  ? "2px solid #EF4444"
                  : "1px solid #D1D5DB",
                borderRadius: 8,
                background: "white",
                fontSize: "1em",
                textAlign: "left",
                cursor: "pointer",
                color: localCheckoutData.pickupDate ? "#1F2937" : "#9CA3AF",
              }}
            >
              {localCheckoutData.pickupDate
                ? new Date(localCheckoutData.pickupDate).toLocaleDateString(
                    language === "zh" ? "zh-CN" : "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      weekday: "long",
                    }
                  )
                : language === "zh"
                ? "选择日期"
                : "Select date"}
            </button>

            {showCalendar && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "white",
                  border: "1px solid #D1D5DB",
                  borderRadius: 8,
                  padding: 16,
                  marginTop: 8,
                  zIndex: 10,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Calendar header with month/year navigation */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <button
                    onClick={handlePrevMonth}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 4,
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <h3 style={{ margin: 0, fontSize: "1em" }}>
                    {calendarMonth.toLocaleDateString(
                      language === "zh" ? "zh-CN" : "en-US",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    )}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 4,
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Day headers */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 4,
                    marginBottom: 8,
                  }}
                >
                  {[
                    language === "zh" ? "日" : "Sun",
                    language === "zh" ? "一" : "Mon",
                    language === "zh" ? "二" : "Tue",
                    language === "zh" ? "三" : "Wed",
                    language === "zh" ? "四" : "Thu",
                    language === "zh" ? "五" : "Fri",
                    language === "zh" ? "六" : "Sat",
                  ].map((day) => (
                    <div
                      key={day}
                      style={{
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: "0.75em",
                        color: "#6B7280",
                        padding: 4,
                      }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 4,
                  }}
                >
                  {renderCalendar()}
                </div>
              </div>
            )}
          </div>
          {errors.pickupDate && (
            <p style={{ color: "#EF4444", fontSize: "0.875em", marginTop: 4 }}>
              {errors.pickupDate}
            </p>
          )}
        </div>

        {/* Pickup time selection */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
            {language === "zh" ? "请选择取书时间段" : "Select Pickup Time Slot"}
          </label>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {timeSlots.map((slot) => (
              <button
                key={slot.value}
                onClick={() =>
                  setLocalCheckoutData((prev) => ({
                    ...prev,
                    pickupTime: slot.value,
                  }))
                }
                style={{
                  padding: 12,
                  border:
                    localCheckoutData.pickupTime === slot.value
                      ? "2px solid #2563EB"
                      : "1px solid #E5E7EB",
                  borderRadius: 8,
                  background:
                    localCheckoutData.pickupTime === slot.value
                      ? "#EFF6FF"
                      : "white",
                  cursor: "pointer",
                  fontWeight:
                    localCheckoutData.pickupTime === slot.value ? 600 : 400,
                  color:
                    localCheckoutData.pickupTime === slot.value
                      ? "#2563EB"
                      : "#1F2937",
                }}
              >
                {slot.label}
              </button>
            ))}
          </div>
          {errors.pickupTime && (
            <p style={{ color: "#EF4444", fontSize: "0.875em", marginTop: 4 }}>
              {errors.pickupTime}
            </p>
          )}
        </div>

        {/* Personal info form */}
        <div
          style={{
            marginBottom: 16,
            paddingBottom: 16,
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <h3 style={{ marginBottom: 12 }}>
            {language === "zh" ? "个人信息" : "Personal Information"}
          </h3>

          <div style={{ marginBottom: 12 }}>
            <label
              style={{ fontWeight: 600, marginBottom: 6, display: "block" }}
            >
              {language === "zh" ? "姓名" : "Name"} *
            </label>
            <input
              type="text"
              name="name"
              value={localCheckoutData.name}
              onChange={handleInputChange}
              placeholder={
                language === "zh" ? "请输入您的姓名" : "Enter your name"
              }
              style={{
                width: "100%",
                padding: 12,
                border: errors.name ? "2px solid #EF4444" : "1px solid #D1D5DB",
                borderRadius: 8,
                fontSize: "1em",
              }}
            />
            {errors.name && (
              <p
                style={{ color: "#EF4444", fontSize: "0.875em", marginTop: 4 }}
              >
                {errors.name}
              </p>
            )}
          </div>

          <div style={{ marginBottom: 12 }}>
            <label
              style={{ fontWeight: 600, marginBottom: 6, display: "block" }}
            >
              {language === "zh" ? "电话号码" : "Phone Number"} *
            </label>
            <input
              type="tel"
              name="phone"
              value={localCheckoutData.phone}
              onChange={handleInputChange}
              placeholder={
                language === "zh" ? "请输入电话号码" : "Enter phone number"
              }
              style={{
                width: "100%",
                padding: 12,
                border: errors.phone
                  ? "2px solid #EF4444"
                  : "1px solid #D1D5DB",
                borderRadius: 8,
                fontSize: "1em",
              }}
            />
            {errors.phone && (
              <p
                style={{ color: "#EF4444", fontSize: "0.875em", marginTop: 4 }}
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div style={{ marginBottom: 12 }}>
            <label
              style={{ fontWeight: 600, marginBottom: 6, display: "block" }}
            >
              {language === "zh" ? "电子邮箱（可选）" : "Email (Optional)"}
            </label>
            <input
              type="email"
              name="email"
              value={localCheckoutData.email}
              onChange={handleInputChange}
              placeholder={language === "zh" ? "请输入电子邮箱" : "Enter email"}
              style={{
                width: "100%",
                padding: 12,
                border: "1px solid #D1D5DB",
                borderRadius: 8,
                fontSize: "1em",
              }}
            />
          </div>
        </div>

        {/* Reminders */}
        <div
          style={{
            background: "#FEF3C7",
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
            borderLeft: "4px solid #F59E0B",
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: 8, color: "#92400E" }}>
            {language === "zh" ? "重要提醒" : "Important Reminders"}
          </p>
          <ul
            style={{
              marginLeft: 16,
              color: "#92400E",
              fontSize: "0.9em",
              lineHeight: 1.6,
            }}
          >
            <li>
              {language === "zh" ? "借阅期限为30天" : "Lending period: 30 days"}
            </li>
            <li>
              {language === "zh"
                ? "逾期未归还将收取滞纳金"
                : "Late return fees will be charged"}
            </li>
            <li>
              {language === "zh"
                ? "请妥善保管借阅物品"
                : "Please take good care of borrowed items"}
            </li>
            <li>
              {language === "zh"
                ? "可在取书时或图书馆网站查询续借"
                : "Renewal available at pickup or library website"}
            </li>
          </ul>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button onClick={handleConfirm} className="btn btn-primary">
            {language === "zh" ? "生成二维码" : "Generate QR Code"}
          </button>
          <button
            onClick={() => setCurrentPage("borrow")}
            className="btn btn-secondary"
          >
            {language === "zh" ? "返回" : "Back"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCheckoutPage;