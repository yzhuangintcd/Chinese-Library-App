// Payment Page - Emma

const PaymentPage = ({ language, elderlyMode, setCurrentPage }) => {
  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <h1>{language === "zh" ? "支付" : "Payment"}</h1>
      </div>
      <div className="page-content">
        <div className="confirmation-container">
          <div className="success-icon">¥</div>
          <h2>
            {language === "zh" ? "支付功能（占位）" : "Payment (placeholder)"}
          </h2>
          <p className="small-text">
            {language === "zh"
              ? "这里将展示支付流程的原型。"
              : "A prototype area for payment flow will appear here."}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setCurrentPage("dashboard")}
          >
            {language === "zh" ? "返回主界面" : "Return to Dashboard"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
