import { useState } from "react";
import { Filter, Search, BookOpen, X } from "lucide-react";

export default function BrowseBooksPage({ language = "en", elderlyMode = false, setCurrentPage = () => {}, setSelectedBook = () => {} }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([
    { en: "Philosophy", zh: "哲学" },
    { en: "Poetry", zh: "诗歌" },
    { en: "Fantasy", zh: "奇幻" },
    { en: "History", zh: "历史" }
  ]);

  const results = [
    {
      title: "Romance of Three Kingdoms",
      titleZh: "三国演义",
      coverImage: "romance-of-three-kingdoms.png",
      categories: [
        { en: "History", zh: "历史" },
      ],
      author: "Guanzhong Luo",
      authorZh: "罗贯中",
      available: true,
      copies: 3
    },
    {
      title: "Complete Tang Poems",
      titleZh: "全唐诗",
      coverImage: "/complete-tang-poems.png",
      categories: [
        { en: "Poetry", zh: "诗歌" },
        { en: "Literature", zh: "文学" },
        { en: "Classical", zh: "古典" }
      ],
      author: "Various Authors",
      authorZh: "多位作者",
      available: true,
      copies: 2
    },
    {
      title: "Journey to the West",
      titleZh: "西游记",
      coverImage: "/journey-to-the-west.png",
      categories: [
        { en: "Literature", zh: "文学" },
        { en: "Fantasy", zh: "奇幻" }
      ],
      author: "Wu Cheng'en",
      authorZh: "吴承恩",
      available: false,
      copies: 0
    },
    {
      title: "The Art of War",
      titleZh: "孙子兵法",
      coverImage: "/art-of-war.png",
      categories: [
        { en: "Philosophy", zh: "哲学" },
        { en: "Military", zh: "军事" },
        { en: "Strategy", zh: "战略" }
      ],
      author: "Sun Tzu",
      authorZh: "孙子",
      available: true,
      copies: 5
    },
  ];

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter(tag => tag.en !== tagToRemove.en));
  };

  // Helper function to get categories display text
  const getCategoriesText = (book) => {
    if (!book.categories || book.categories.length === 0) return "";
    return book.categories
      .map(cat => language === "zh" ? cat.zh : cat.en)
      .join(", ");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <h1>{language === "zh" ? "浏览图书" : "Browse Books"}</h1>
      </div>

      <div className="page-content">
        {/* Search Bar */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #D1D5DB",
              borderRadius: 8,
              padding: "10px 12px",
              flex: 1,
              background: "white",
            }}
          >
            <Search size={20} style={{ color: "#6B7280" }} />
            <input
              type="text"
              placeholder={language === "zh" ? "按名称、作者、ISBN搜索" : "Search by name, author, ISBN"}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                marginLeft: 8,
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "1em",
              }}
            />
          </div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              border: "1px solid #D1D5DB",
              padding: "10px 16px",
              borderRadius: 8,
              background: "white",
              cursor: "pointer",
              fontSize: "1em",
              whiteSpace: "nowrap",
            }}
          >
            <Filter size={18} />
            {language === "zh" ? "筛选" : "Filter"}
          </button>
        </div>

        {/* Tags */}
        {selectedTags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {selectedTags.map((tag, i) => (
              <span
                key={i}
                className="badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                {language === "zh" ? tag.zh : tag.en}
                <X
                  size={14}
                  style={{ cursor: "pointer", color: "#6B7280" }}
                  onClick={() => removeTag(tag)}
                />
              </span>
            ))}
          </div>
        )}

        {/* Results count */}
        <h2 className="section-title">
          {language === "zh" ? `找到 ${results.length} 条结果` : `Found ${results.length} results`}
        </h2>

        {/* Book Results */}
        <div className="books-list">
          {results.map((book, idx) => (
            <div key={idx} className="book-card">
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  {/* Book Cover Image */}
                  <div
                    style={{
                      width: 60,
                      height: 90,
                      borderRadius: 4,
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "1px solid #E5E7EB",
                      background: "#F3F4F6",
                    }}
                  >
                    {book.coverImage ? (
                      <img
                        src={book.coverImage}
                        alt={language === "zh" ? book.titleZh : book.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      // Fallback icon if no image
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#EFF6FF",
                        }}
                      >
                        <BookOpen size={24} style={{ color: "#2563EB" }} />
                      </div>
                    )}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="book-title" style={{ marginBottom: 4 }}>
                      {language === "zh" ? book.titleZh : book.title}
                    </h3>

                    <p className="book-author">
                      {language === "zh" ? book.authorZh : book.author}
                    </p>

                    <div className="book-meta" style={{ flexWrap: "wrap" }}>
                      {/* Display each category as individual badges */}
                      {book.categories && book.categories.map((cat, catIdx) => (
                        <span key={catIdx} className="badge">
                          {language === "zh" ? cat.zh : cat.en}
                        </span>
                      ))}
                      <span className={`status-badge ${book.available ? 'available' : 'unavailable'}`}>
                        {book.available 
                          ? (language === "zh" ? `可借 (${book.copies})` : `Available (${book.copies})`)
                          : (language === "zh" ? "已借出" : "Checked Out")
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  disabled={!book.available}
                  onClick={() => {
                    if (book.available) {
                      setSelectedBook({
                        title: language === "zh" ? book.titleZh : book.title,
                        author: language === "zh" ? book.authorZh : book.author,
                        categories: getCategoriesText(book),
                        cover: book.coverImage,
                      });
                      setCurrentPage("checkout");
                    }
                  }}
                  className={book.available ? "btn btn-primary" : "btn"}
                  style={{
                    width: "100%",
                    background: book.available ? "#2C9678" : "#E5E7EB",
                    color: book.available ? "white" : "#9CA3AF",
                    cursor: book.available ? "pointer" : "not-allowed",
                  }}
                >
                  {language === "zh" ? "借阅" : "Loan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}