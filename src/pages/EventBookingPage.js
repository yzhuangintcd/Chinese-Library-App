// book event page - Peng
import { useState } from "react";
import { Filter, Search, Calendar, MapPin, Clock, User, X } from "lucide-react";

const EventBookingPage = ({
  language = "en",
  elderlyMode = false,
  setCurrentPage = () => {},
  addActivity = () => {},
}) => {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([
    { en: "All", zh: "全部" },
    { en: "Seminar", zh: "讲座" },
    { en: "Family Activities", zh: "家庭活动" }
  ]);

  const events = [
    {
      title: "Taking a step into the world of Tang poetry",
      titleZh: "走进唐诗的世界",
      categories: [
        { en: "Seminar", zh: "讲座" }
      ],
      date: "December 6th",
      dateZh: "12月6日",
      time: "14:00",
      duration: "2.5 hours",
      durationZh: "2.5小时",
      location: "Hangzhou Library - 1st Floor",
      locationZh: "杭州图书馆 - 1楼",
      speaker: "Professor Zhou",
      speakerZh: "周教授",
      seatsRemaining: 25,
      totalSeats: 40
    },
    {
      title: "Children's Reading Day",
      titleZh: "儿童阅读日",
      categories: [
        { en: "Family Activities", zh: "家庭活动" }
      ],
      date: "December 12th",
      dateZh: "12月12日",
      time: "10:00",
      duration: "2 hours",
      durationZh: "2小时",
      location: "Shenzhen Library - 2nd Floor",
      locationZh: "深圳图书馆 - 2楼",
      speaker: null,
      seatsRemaining: 25,
      totalSeats: 30
    },
    {
      title: "Introduction to Classical Chinese Literature",
      titleZh: "中国古典文学入门",
      categories: [
        { en: "Seminar", zh: "讲座" }
      ],
      date: "December 15th",
      dateZh: "12月15日",
      time: "15:30",
      duration: "3 hours",
      durationZh: "3小时",
      location: "Hangzhou Library - 3rd Floor",
      locationZh: "杭州图书馆 - 3楼",
      speaker: "Dr. Li",
      speakerZh: "李博士",
      seatsRemaining: 10,
      totalSeats: 35
    },
    {
      title: "Family Storytelling Workshop",
      titleZh: "家庭故事会",
      categories: [
        { en: "Family Activities", zh: "家庭活动" }
      ],
      date: "December 18th",
      dateZh: "12月18日",
      time: "14:00",
      duration: "1.5 hours",
      durationZh: "1.5小时",
      location: "Hangzhou Library - Children's Section",
      locationZh: "杭州图书馆 - 儿童区",
      speaker: null,
      seatsRemaining: 15,
      totalSeats: 20
    },
    {
      title: "Digital Library Resources Training",
      titleZh: "数字图书馆资源培训",
      categories: [
        { en: "Seminar", zh: "讲座" }
      ],
      date: "December 20th",
      dateZh: "12月20日",
      time: "10:30",
      duration: "2 hours",
      durationZh: "2小时",
      location: "Shenzhen Library - Computer Lab",
      locationZh: "深圳图书馆 - 电脑室",
      speaker: "Library Staff",
      speakerZh: "图书馆工作人员",
      seatsRemaining: 8,
      totalSeats: 15
    },
    {
      title: "Book Club: Modern Chinese Fiction",
      titleZh: "读书会：现代中国小说",
      categories: [
        { en: "Seminar", zh: "讲座" },
        { en: "Family Activities", zh: "家庭活动" }
      ],
      date: "December 22nd",
      dateZh: "12月22日",
      time: "16:00",
      duration: "2 hours",
      durationZh: "2小时",
      location: "Hangzhou Library - Reading Room",
      locationZh: "杭州图书馆 - 阅览室",
      speaker: "Book Club Members",
      speakerZh: "读书会成员",
      seatsRemaining: 18,
      totalSeats: 25
    }
  ];

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter(tag => tag.en !== tagToRemove.en));
  };

  const handleAttend = (event) => {
    if (addActivity) {
      addActivity(
        `${language === "zh" ? "报名参加" : "Registered for"} "${language === "zh" ? event.titleZh : event.title}"`
      );
    }
    setCurrentPage("dashboard");
  };

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <h1>{language === "zh" ? "浏览活动" : "Browse Events"}</h1>
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
              placeholder={language === "zh" ? "按名称或描述搜索活动" : "Search by name or description of event"}
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
          {language === "zh" ? `找到 ${events.length} 个结果` : `Found ${events.length} results`}
        </h2>

        {/* Events List */}
        <div className="books-list">
          {events.map((event, idx) => (
            <div key={idx} className="book-card">
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: "#EFF6FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Calendar size={22} style={{ color: "#2563EB" }} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="book-title" style={{ marginBottom: 8 }}>
                      {language === "zh" ? event.titleZh : event.title}
                    </h3>

                    {/* Categories */}
                    <div className="book-meta" style={{ flexWrap: "wrap", marginBottom: 12 }}>
                      {event.categories && event.categories.map((cat, catIdx) => (
                        <span key={catIdx} className="badge">
                          {language === "zh" ? cat.zh : cat.en}
                        </span>
                      ))}
                    </div>

                    {/* Event Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: "0.875em", color: "#6B7280" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Calendar size={16} />
                        <span>{language === "zh" ? event.dateZh : event.date}</span>
                        <Clock size={16} style={{ marginLeft: 8 }} />
                        <span>{event.time}</span>
                      </div>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Clock size={16} />
                        <span>{language === "zh" ? event.durationZh : event.duration}</span>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <MapPin size={16} />
                        <span>{language === "zh" ? event.locationZh : event.location}</span>
                      </div>

                      {event.speaker && (
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <User size={16} />
                          <span>
                            {language === "zh" ? "主讲人: " : "Speaker: "}
                            {language === "zh" ? event.speakerZh : event.speaker}
                          </span>
                        </div>
                      )}

                      <div style={{ marginTop: 4 }}>
                        <span style={{ fontWeight: 600, color: event.seatsRemaining < 10 ? "#DC2626" : "#059669" }}>
                          {language === "zh" ? "剩余座位: " : "Seats remaining: "}
                          {event.seatsRemaining}/{event.totalSeats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleAttend(event)}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    background: "#2C9678",
                    color: "white",
                  }}
                >
                  {language === "zh" ? "报名参加" : "Attend"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventBookingPage;