import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div
      className="course-card"
      style={{
        borderRadius: "18px",
        backgroundColor: "#6b6fcf",
        color: "white",
        padding: "16px",
        boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "4px solid #4f4aa0",
        overflow: "hidden",
      }}
    >
      {/* Top Section */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginBottom: "14px" }}>
        {/* Illustration Panel */}
        <div
          style={{
            flex: "0 0 120px",
            height: "120px",
            borderRadius: "12px",
            backgroundColor: "#fdd835",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
            fontSize: "56px",
            overflow: "hidden",
          }}
          aria-hidden
        >
          {/* Fallback to emoji if provided */}
          <span style={{ position: "relative", zIndex: 1 }}>{course.emoji || ""}</span>
          {/* Decorative shapes to mimic design */}
          {/* <div style={{ position: "absolute", top: "10px", left: "10px", width: "18px", height: "18px", background: "#6b6fcf", borderRadius: "3px", opacity: 0.7 }}></div>
          <div style={{ position: "absolute", top: "24px", left: "48px", width: "22px", height: "22px", borderRadius: "50%", border: "3px solid #6b6fcf", opacity: 0.7 }}></div> */}
          {/* <div style={{ position: "absolute", bottom: "12px", left: "18px", width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderTop: "18px solid #6b6fcf", opacity: 0.7 }}></div> */}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end", flex: 1 }}>
          <div
            className="course-stat"
            style={{
              background: "#7e83e9",
              padding: "10px 12px",
              borderRadius: "12px",
              width: "140px",
              textAlign: "right",
              fontSize: "12px",
              color: "#f0f2ff",
            }}
          >
            <div style={{ opacity: 0.95 }}>⏰ Time Spent</div>
            <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "13px", marginTop: "2px" }}>{course.time}</div>
          </div>

          <div
            className="course-stat"
            style={{
              background: "#7e83e9",
              padding: "10px 12px",
              borderRadius: "12px",
              width: "140px",
              textAlign: "right",
              fontSize: "12px",
              color: "#f0f2ff",
            }}
          >
            <div style={{ opacity: 0.95 }}>✔ Completed</div>
            <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "13px", marginTop: "2px" }}>{course.progress}%</div>
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <h2 className="course-title" style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 6px 0", lineHeight: 1.25 }}>
        {course.title}
      </h2>
      <p
        className="course-desc"
        style={{
          fontSize: "12px",
          lineHeight: 1.5,
          color: "#f5f5f5",
          margin: "0 0 14px 0",
        }}
      >
        {course.description}
      </p>

      {/* Button */}
      <button
        className="course-cta"
        style={{
          backgroundColor: "#fdd835",
          color: "#000",
          fontWeight: 800,
          border: "none",
          borderRadius: "10px",
          padding: "12px 14px",
          cursor: "pointer",
          width: "100%",
          boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        Resume Course
      </button>
    </div>
  );
};

export default CourseCard;
