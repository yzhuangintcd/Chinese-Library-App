import React, { useState } from "react";
import { User, MapPin, Calendar, Clock } from "lucide-react";

const BookSpaceSeatingOnly = ({ language, elderlyMode, setCurrentPage, addActivity }) => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [errors, setErrors] = useState({});

  const libraries = {
    shenzhen: { en: "Shenzhen Library", zh: "深圳罗湖小区图书馆" },
    beijing: { en: "Beijing Library", zh: "北京图书馆" },
    hangzhou: { en: "Hangzhou Library", zh: "杭州图书馆" },
  };

  const currentLibrary = "shenzhen";

  const floorLayouts = {
    1: {
      tables: [
        { 
          id: "t1", 
          x: 20, 
          y: 30, 
          width: 280, 
          height: 30, 
          shape: "rect", 
          seats: [
            { id: "1A", x: 10, y: -22, occupied: false },
            { id: "1B", x: 45, y: -22, occupied: false },
            { id: "1C", x: 80, y: -22, occupied: true },
            { id: "1D", x: 115, y: -22, occupied: false },
            { id: "1E", x: 150, y: -22, occupied: false },
            { id: "1F", x: 185, y: -22, occupied: false },
            { id: "1G", x: 220, y: -22, occupied: true },
            { id: "1H", x: 255, y: -22, occupied: false },
            { id: "1I", x: 10, y: 32, occupied: false },
            { id: "1J", x: 45, y: 32, occupied: false },
            { id: "1K", x: 80, y: 32, occupied: false },
            { id: "1L", x: 115, y: 32, occupied: true },
            { id: "1M", x: 150, y: 32, occupied: false },
            { id: "1N", x: 185, y: 32, occupied: false },
            { id: "1O", x: 220, y: 32, occupied: false },
            { id: "1P", x: 255, y: 32, occupied: false },
          ]
        },
        { 
          id: "t2", 
          x: 20, 
          y: 120, 
          width: 280, 
          height: 30, 
          shape: "rect", 
          seats: [
            { id: "2A", x: 10, y: -22, occupied: false },
            { id: "2B", x: 45, y: -22, occupied: true },
            { id: "2C", x: 80, y: -22, occupied: false },
            { id: "2D", x: 115, y: -22, occupied: false },
            { id: "2E", x: 150, y: -22, occupied: false },
            { id: "2F", x: 185, y: -22, occupied: true },
            { id: "2G", x: 220, y: -22, occupied: false },
            { id: "2H", x: 255, y: -22, occupied: false },
            { id: "2I", x: 10, y: 32, occupied: false },
            { id: "2J", x: 45, y: 32, occupied: false },
            { id: "2K", x: 80, y: 32, occupied: false },
            { id: "2L", x: 115, y: 32, occupied: false },
            { id: "2M", x: 150, y: 32, occupied: true },
            { id: "2N", x: 185, y: 32, occupied: false },
            { id: "2O", x: 220, y: 32, occupied: false },
            { id: "2P", x: 255, y: 32, occupied: false },
          ]
        },
        {
          id: "t3", 
          x: 20, 
          y: 460, 
          width: 280, 
          height: 30, 
          shape: "rect", 
          seats: [
            { id: "3A", x: 10, y: -22, occupied: true },
            { id: "3B", x: 45, y: -22, occupied: true },
            { id: "3C", x: 80, y: -22, occupied: true },
            { id: "3D", x: 115, y: -22, occupied: false },
            { id: "3E", x: 150, y: -22, occupied: false },
            { id: "3F", x: 185, y: -22, occupied: false },
            { id: "3G", x: 220, y: -22, occupied: true },
            { id: "3H", x: 255, y: -22, occupied: false },
            { id: "3I", x: 10, y: 32, occupied: false },
            { id: "3J", x: 45, y: 32, occupied: false },
            { id: "3K", x: 80, y: 32, occupied: false },
            { id: "3L", x: 115, y: 32, occupied: true },
            { id: "3M", x: 150, y: 32, occupied: false },
            { id: "3N", x: 185, y: 32, occupied: false },
            { id: "3O", x: 220, y: 32, occupied: false },
            { id: "3P", x: 255, y: 32, occupied: false },
          ]
        },
        { 
          id: "room1", 
          x: 10, 
          y: 180, 
          width: 140, 
          height: 250, 
          shape: "room", 
          isRoom: true,
          roomName: language === "zh" ? "会议室 A" : "Meeting Room A",
          innerTable: { x: 35, y: 35, width: 50, height: 50 },
          wallPoints: "M 0,0 L 140,0 L 140,250 L 0,250 Z",
          seats: [
            { id: "MR1-1", x: 60, y: 60, occupied: false },
            { id: "MR1-2", x: 45, y: -22, occupied: false },
            { id: "MR1-3", x: 80, y: -22, occupied: false },
            { id: "MR1-4", x: 115, y: -22, occupied: false },
          ]
        },
        { 
          id: "room2", 
          x: 160, 
          y: 180, 
          width: 140, 
          height: 250, 
          shape: "room", 
          isRoom: true,
          roomName: language === "zh" ? "会议室 B" : "Meeting Room B",
          innerTable: { x: 35, y: 35, width: 50, height: 50 },
          wallPoints: "M 0,0 L 140,0 L 140,250 L 0,250 Z",
          seats: [
            { id: "MR2-1", x: 10, y: -22, occupied: false },
            { id: "MR2-2", x: 45, y: -22, occupied: false },
            { id: "MR2-3", x: 80, y: -22, occupied: false },
            { id: "MR2-4", x: 115, y: -22, occupied: false },
          ]
        },
      ]
    },
    2: {
      tables: []
    },
    3: {
      tables: []
    },
    4: {
      tables: []
    },
  };

  const handleSeatSelect = (tableId, seatId, occupied) => {
    if (!occupied) {
      setSelectedSeat({ floor: selectedFloor, table: tableId, seat: seatId });
      if (errors.seat) setErrors((prev) => ({ ...prev, seat: "" }));
    }
  };

  const handleRoomSelect = (tableId, roomName) => {
    setSelectedSeat({ floor: selectedFloor, table: tableId, seat: roomName, isRoom: true });
    if (errors.seat) setErrors((prev) => ({ ...prev, seat: "" }));
  };

  const handleConfirm = () => {
    if (addActivity) {
      const activityMessage = selectedSeat 
        ? (selectedSeat.isRoom 
            ? (language === "zh" 
                ? `预订了${selectedFloor}楼 ${selectedSeat.seat}` 
                : `Booked ${selectedFloor}楼 ${selectedSeat.seat}`)
            : (language === "zh" 
                ? `预订了${selectedFloor}楼 座位${selectedSeat.seat}` 
                : `Booked Floor ${selectedFloor} Seat ${selectedSeat.seat}`))
        : (language === "zh" ? "预订了学习空间" : "Booked a study space");
      
      addActivity(activityMessage);
    }
    setCurrentPage("dashboard");
  };

  const currentFloor = floorLayouts[selectedFloor];

  return (
    <div className={`page ${elderlyMode ? "elderly-mode" : ""}`}>
      <div className="page-header">
        <h1>{language === "zh" ? "预订学习空间" : "Book a Study Space"}</h1>
      </div>

      <div className="page-content">
        <div style={{ position: "relative", minHeight: "400px" }}>
          {/* Floor Selection - Positioned on the right */}
          <div style={{ 
            position: "absolute", 
            right: 16, 
            top: 0,
            display: "flex", 
            flexDirection: "column", 
            gap: 10,
            zIndex: 5
          }}>
            {[4, 3, 2, 1].map((floor) => (
              <button
                key={floor}
                onClick={() => {
                  setSelectedFloor(floor);
                  setSelectedSeat(null);
                }}
                style={{
                  width: 60, 
                  height: 60,
                  border: selectedFloor === floor ? "3px solid #2563EB" : "2px solid #9CA3AF",
                  borderRadius: 8,
                  background: selectedFloor === floor ? "#2563EB" : "white",
                  cursor: "pointer",
                  fontSize: "1.5em", 
                  fontWeight: 700,
                  color: selectedFloor === floor ? "white" : "#1F2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                {floor}
                {language === "zh" && <span style={{ fontSize: "0.5em", marginLeft: 2 }}>楼</span>}
              </button>
            ))}
            
            {/* Calendar Icon */}
            <div style={{
              width: 60,
              height: 60,
              border: "2px solid #9CA3AF",
              borderRadius: 8,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}>
              <Calendar size={28} color="#1F2937" />
            </div>
            
            {/* Clock Icon */}
            <div style={{
              width: 60,
              height: 60,
              border: "2px solid #9CA3AF",
              borderRadius: 8,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}>
              <Clock size={28} color="#1F2937" />
            </div>
          </div>

          {/* Floor Plan Visualization - Left side with margin for buttons */}
          <div style={{ 
            marginRight: 90,
            background: "#F9FAFB", 
            padding: 16, 
            borderRadius: 8, 
            border: errors.seat ? "2px solid #EF4444" : "1px solid #E5E7EB" 
          }}>
            <h3 style={{ marginBottom: 12, fontSize: "1em", fontWeight: 600 }}>
              {language === "zh" ? "1楼 - 综合区" : "Floor 1 - General Area"}
            </h3>

            <div style={{ 
              position: "relative", 
              height: 530, 
              background: "white", 
              border: "1px solid #E5E7EB", 
              borderRadius: 8 
            }}>
              {currentFloor.tables.map((table) => (
                <div key={table.id}>
                  {table.isRoom ? (
                    <div
                      style={{
                        position: "absolute",
                        left: table.x,
                        top: table.y,
                        width: table.width,
                        height: table.height,
                      }}
                    >
                      <svg
                        width={table.width}
                        height={table.height}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      >
                        <path
                          d={table.wallPoints}
                          fill="none"
                          stroke="#000000"
                          strokeWidth="4"
                        />
                      </svg>
                      <button
                        onClick={() => handleRoomSelect(table.id, table.roomName)}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: table.width,
                          height: table.height,
                          background: selectedSeat?.table === table.id ? "rgba(37, 99, 235, 0.1)" : "transparent",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
                        <div style={{
                          position: "absolute",
                          left: table.innerTable.x,
                          top: table.innerTable.y,
                          width: table.innerTable.width,
                          height: table.innerTable.height,
                          background: "#D1D5DB",
                          borderRadius: "50%",
                          border: "2px solid #9CA3AF",
                        }} />
                        <div style={{
                          position: "absolute",
                          bottom: 4,
                          left: 0,
                          right: 0,
                          fontSize: "0.7em",
                          fontWeight: 600,
                          color: selectedSeat?.table === table.id ? "#2563EB" : "#1F2937",
                          textAlign: "center",
                        }}>
                          {table.roomName}
                        </div>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          left: table.x,
                          top: table.y,
                          width: table.width,
                          height: table.height,
                          background: "#D1D5DB",
                          borderRadius: table.shape === "circle" ? "50%" : 4,
                          border: "2px solid #9CA3AF",
                        }}
                      />

                      {table.seats.map((seat) => {
                        const isSelected = selectedSeat?.seat === seat.id;
                        return (
                          <button
                            key={seat.id}
                            onClick={() => handleSeatSelect(table.id, seat.id, seat.occupied)}
                            disabled={seat.occupied}
                            style={{
                              position: "absolute",
                              left: table.x + seat.x,
                              top: table.y + seat.y,
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              border: isSelected ? "2px solid #2563EB" : "1.5px solid #6B7280",
                              background: seat.occupied ? "#EF4444" : isSelected ? "#2563EB" : "#10B981",
                              cursor: seat.occupied ? "not-allowed" : "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "0.7em",
                              fontWeight: 600,
                              padding: 0,
                              opacity: seat.occupied ? 0.7 : 1,
                            }}
                          >
                            <User size={12} />
                          </button>
                        );
                      })}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div style={{ 
              display: "flex", 
              gap: 16, 
              marginTop: 12, 
              fontSize: "0.875em", 
              flexWrap: "wrap" 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ 
                  width: 20, 
                  height: 20, 
                  borderRadius: "50%", 
                  background: "#10B981", 
                  border: "2px solid #6B7280" 
                }} />
                <span>{language === "zh" ? "可用" : "Available"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ 
                  width: 20, 
                  height: 20, 
                  borderRadius: "50%", 
                  background: "#EF4444", 
                  border: "2px solid #6B7280", 
                  opacity: 0.7 
                }} />
                <span>{language === "zh" ? "已占用" : "Occupied"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ 
                  width: 20, 
                  height: 20, 
                  borderRadius: "50%", 
                  background: "#2563EB", 
                  border: "3px solid #2563EB" 
                }} />
                <span>{language === "zh" ? "已选择" : "Selected"}</span>
              </div>
            </div>

            {selectedSeat && (
              <div style={{ 
                marginTop: 12, 
                padding: 8, 
                background: "#EFF6FF", 
                borderRadius: 6, 
                fontSize: "0.875em", 
                color: "#1E40AF" 
              }}>
                {selectedSeat.isRoom 
                  ? (language === "zh" 
                      ? `已选择: ${selectedFloor}楼 ${selectedSeat.seat}` 
                      : `Selected: Floor ${selectedFloor} ${selectedSeat.seat}`)
                  : (language === "zh" 
                      ? `已选择: ${selectedFloor}楼 座位${selectedSeat.seat}` 
                      : `Selected: Floor ${selectedFloor} Seat ${selectedSeat.seat}`)
                }
              </div>
            )}
          </div>

          {/* Library Location Display */}
          <div style={{
            marginTop: 16,
            marginRight: 90,
            padding: 12,
            background: "white",
            borderRadius: 8,
            border: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <MapPin size={24} color="#EF4444" fill="#EF4444" />
            <span style={{ fontSize: "1em", fontWeight: 600, color: "#1F2937" }}>
              {language === "zh" ? libraries[currentLibrary].zh : libraries[currentLibrary].en}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
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

export default BookSpaceSeatingOnly;