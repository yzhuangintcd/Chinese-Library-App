// page that goes to borrow book (Paddy) and book study space (Cora)
import { useState } from "react";
import { Filter, Search, BookOpen } from "lucide-react";

export default function BrowseBooksPage({ language, elderlyMode, setCurrentPage }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState(["Philosophy", "History"]);

  const results = [
    {
      title: "Romance of Three Kingdoms",
      category: "History",
      author: "Guanzhong Luo",
    },
    {
      title: "Complete Tang Poems",
      category: "History",
      author: "N/A",
    },
  ];

  return (
    <div className={`page p-4 ${elderlyMode ? "elderly-mode" : ""}`}>      
      <h1 className="text-3xl font-bold mb-4">{language === "zh" ? "浏览图书" : "Browse Books"}</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 mb-4 w-full">
        <div className="flex items-center border rounded-xl px-3 py-2 w-full bg-white shadow">
          <Search size={20} />
          <input
            type="text"
            placeholder={language === "zh" ? "按名称、作者、ISBN搜索" : "Search by name, author, ISBN"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ml-2 w-full outline-none"
          />
        </div>
        <button className="flex items-center gap-1 border px-3 py-2 rounded-xl bg-white shadow min-w-[70px] justify-center">
          <Filter size={18} />
          {language === "zh" ? "筛选" : "Filter"}
        </button>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {selectedTags.map((tag, i) => (
          <span key={i} className="px-3 py-1 border rounded-xl bg-white shadow text-sm">{tag}</span>
        ))}
      </div>

      {/* Results count */}
      <h2 className="text-xl mb-2">{language === "zh" ? "找到 5 条结果" : "Found 5 results"}</h2>

      {/* Book Results */}
      <div className="flex flex-col gap-4 max-h-[55vh] overflow-y-auto pr-2">
        {results.map((book, idx) => (
          <div
            key={idx}
            className="border rounded-2xl p-4 bg-white shadow flex flex-col gap-2 relative"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={22} />
              <div className="font-semibold text-lg">{book.title}</div>
            </div>

            <span className="px-2 py-1 border rounded-lg bg-white shadow text-sm w-fit">{book.category}</span>

            <div className="text-md">
              <strong>{language === "zh" ? "作者:" : "Author:"}</strong> {book.author}
            </div>

            <button
              className="absolute right-4 bottom-4 border px-4 py-1 rounded-xl bg-white shadow"
              onClick={() => setCurrentPage("borrow_confirm")}
            >
              {language === "zh" ? "借阅" : "Rent"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
