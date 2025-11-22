// Borrow book (Paddy)
import { useState } from "react";

const BorrowBookPage = ({
  language,
  elderlyMode,
  setCurrentPage,
  addActivity,
}) => {
  const popularBooks = [
    {
      id: 1,
      title: language === "zh" ? "三体" : "The Three-Body Problem",
      author: language === "zh" ? "刘慈欣" : "Liu Cixin",
      genre: "Sci-Fi",
      rating: 4.8,
      available: true,
      location: language === "zh" ? "北京分馆" : "Beijing Branch",
    },
    {
      id: 2,
      title: language === "zh" ? "活着" : "To Live",
      author: language === "zh" ? "余华" : "Yu Hua",
      genre: "Fiction",
      rating: 4.9,
      available: false,
      location: language === "zh" ? "上海分馆" : "Shanghai Branch",
      eta: "3 days",
    },
  ];

  const [books] = useState(popularBooks);
  const [expandedBook, setExpandedBook] = useState(null);

  const handleLoan = (book) => {
    if (addActivity) addActivity(`Borrowed: ${book.title}`);
    setExpandedBook(null);
    setCurrentPage("dashboard");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <button onClick={() => setCurrentPage("bookings")} className="back-btn">
          ← {language === "zh" ? "返回" : "Back"}
        </button>
        <h1>{language === "zh" ? "借阅图书" : "Borrow a Book"}</h1>
      </div>

      <div className="page-content">
        <div className="books-list">
          {books.map((b) => (
            <div key={b.id} className="book-card">
              <button
                className="book-header"
                onClick={() =>
                  setExpandedBook(expandedBook === b.id ? null : b.id)
                }
              >
                <div className="book-info">
                  <h3>{b.title}</h3>
                  <div className="book-author">{b.author}</div>
                </div>
                <div
                  className={`status-badge ${
                    b.available ? "available" : "unavailable"
                  }`}
                >
                  {b.available
                    ? language === "zh"
                      ? "可借"
                      : "Available"
                    : language === "zh"
                    ? "不可用"
                    : "Unavailable"}
                </div>
              </button>
              {expandedBook === b.id && (
                <div className="book-details">
                  <div className="location-info">{b.location}</div>
                  <div className="action-buttons">
                    {b.available ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleLoan(b)}
                      >
                        {language === "zh" ? "确认借阅" : "Confirm Loan"}
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          if (addActivity)
                            addActivity(`Ordered in: ${b.title}`);
                          setCurrentPage("dashboard");
                        }}
                      >
                        {language === "zh" ? "预约到馆" : "Order In"}
                      </button>
                    )}
                    <button
                      className="btn btn-secondary"
                      onClick={() => setExpandedBook(null)}
                    >
                      {language === "zh" ? "关闭" : "Close"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowBookPage;
