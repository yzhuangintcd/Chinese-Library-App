import { QRCodeSVG } from "qrcode.react";

const BookConfirmationPage = ({
  language,
  elderlyMode,
  setCurrentPage,
  checkoutData,
  selectedBook,
  addActivity,
}) => {
  // Generate QR code data with booking info
  const qrCodeData = JSON.stringify({
    bookTitle: selectedBook?.title,
    name: checkoutData?.name,
    pickupDate: checkoutData?.pickupDate,
    pickupTime: checkoutData?.pickupTime,
    phone: checkoutData?.phone,
    timestamp: new Date().toISOString(),
  });

  const handleComplete = () => {
    if (addActivity) {
      addActivity(
        `${language === "zh" ? "预订了" : "Booked"} "${selectedBook?.title}"`
      );
    }
    setCurrentPage("dashboard");
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === "zh" ? "zh-CN" : "en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timeStr) => {
    if (!timeStr) return "";
    return timeStr.replace("-", " - ");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <h1>{language === "zh" ? "取书凭证" : "Pickup Confirmation"}</h1>
      </div>

      <div className="page-content">
        {/* Success message */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              background: "#D1FAE5",
              color: "#10B981",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5em",
              margin: "0 auto 16px",
            }}
          >
            ✓
          </div>
          <h2 style={{ color: "#065F46", marginBottom: 8 }}>
            {language === "zh" ? "预订成功！" : "Booking Confirmed!"}
          </h2>
          <p style={{ color: "#6B7280" }}>
            {language === "zh"
              ? "请凭下方二维码到图书馆自助服务或到前台取书"
              : "Please use the QR code below at the library kiosk or desk to collect your book"}
          </p>
        </div>

        {/* Book details */}
        <div
          style={{
            background: "#F9FAFB",
            padding: 16,
            borderRadius: 8,
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: "0.875em", color: "#6B7280", marginBottom: 4 }}>
            {language === "zh" ? "图书" : "Book"}
          </p>
          <p style={{ fontWeight: 600, fontSize: "1.125em", marginBottom: 4 }}>
            {selectedBook?.title}
          </p>
          <p style={{ color: "#6B7280", fontSize: "0.875em" }}>
            {language === "zh" ? "作者：" : "Author: "}
            {selectedBook?.author}
          </p>
        </div>

        {/* QR Code section */}
        <div
          style={{
            background: "white",
            padding: 24,
            borderRadius: 8,
            border: "1px solid #E5E7EB",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <p
            style={{ fontSize: "0.875em", color: "#6B7280", marginBottom: 12 }}
          >
            {language === "zh" ? "取书二维码" : "Pickup QR Code"}
          </p>
          <QRCodeSVG
            value={qrCodeData}
            size={256}
            level="H"
            includeMargin={true}
          />
          <p
            style={{
              fontSize: "0.75em",
              color: "#9CA3AF",
              marginTop: 12,
              textAlign: "center",
            }}
          >
            {language === "zh"
              ? "请保存或截图此二维码用于图书馆自助取书"
              : "Save or screenshot this QR code for self-service pickup"}
          </p>
        </div>

        {/* Pickup details */}
        <div
          style={{
            background: "#F3F4F6",
            padding: 16,
            borderRadius: 8,
            marginBottom: 24,
          }}
        >
          <h3 style={{ marginBottom: 12 }}>
            {language === "zh" ? "取书信息" : "Pickup Details"}
          </h3>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.875em",
                  color: "#6B7280",
                  marginBottom: 4,
                }}
              >
                {language === "zh" ? "取书日期" : "Pickup Date"}
              </p>
              <p style={{ fontWeight: 600 }}>
                {formatDate(checkoutData?.pickupDate)}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "0.875em",
                  color: "#6B7280",
                  marginBottom: 4,
                }}
              >
                {language === "zh" ? "取书时间" : "Pickup Time"}
              </p>
              <p style={{ fontWeight: 600 }}>
                {formatTime(checkoutData?.pickupTime)}
              </p>
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div
          style={{
            background: "#F3F4F6",
            padding: 16,
            borderRadius: 8,
            marginBottom: 24,
          }}
        >
          <h3 style={{ marginBottom: 12 }}>
            {language === "zh" ? "联系方式" : "Contact Information"}
          </h3>
          <div>
            <p
              style={{ fontSize: "0.875em", color: "#6B7280", marginBottom: 4 }}
            >
              {language === "zh" ? "姓名" : "Name"}
            </p>
            <p style={{ fontWeight: 600, marginBottom: 12 }}>
              {checkoutData?.name}
            </p>
          </div>
          <div>
            <p
              style={{ fontSize: "0.875em", color: "#6B7280", marginBottom: 4 }}
            >
              {language === "zh" ? "电话" : "Phone"}
            </p>
            <p
              style={{
                fontWeight: 600,
                marginBottom: checkoutData?.email ? 12 : 0,
              }}
            >
              {checkoutData?.phone}
            </p>
          </div>
          {checkoutData?.email && (
            <div>
              <p
                style={{
                  fontSize: "0.875em",
                  color: "#6B7280",
                  marginBottom: 4,
                }}
              >
                {language === "zh" ? "邮箱" : "Email"}
              </p>
              <p style={{ fontWeight: 600 }}>{checkoutData?.email}</p>
            </div>
          )}
        </div>

        {/* Important reminders */}
        <div
          style={{
            background: "#FEF3C7",
            padding: 12,
            borderRadius: 8,
            marginBottom: 24,
            borderLeft: "4px solid #F59E0B",
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: 8, color: "#92400E" }}>
            {language === "zh" ? "温馨提示" : "Reminder"}
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
              {language === "zh"
                ? "借阅期限为30天，从取书之日起计算"
                : "30-day lending period starts from pickup date"}
            </li>
            <li>
              {language === "zh"
                ? "逾期未返还每天收费 ¥0.50，单本图书逾期费用不超过图书价值"
                : "Late fee: ¥0.50/day per book, capped at book value"}
            </li>
            <li>
              {language === "zh"
                ? "请在取书前自助检查图书内容完整性"
                : "Please check book condition before leaving the kiosk"}
            </li>
          </ul>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button onClick={handleComplete} className="btn btn-primary">
            {language === "zh" ? "返回首页" : "Back to Home"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookConfirmationPage;
