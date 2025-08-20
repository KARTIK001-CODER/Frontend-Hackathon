export default function ChallengeCard({ title, desc, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "12px",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        borderLeft: `6px solid ${color === "blue" ? "#4A90E2" : "#27ae60"}`,
      }}
    >
      <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{title}</h3>
      <p style={{ margin: "0 0 16px 0", color: "#666", fontSize: "14px" }}>{desc}</p>

      {/* Levels */}
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Level 1 - Available */}
        <button
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            border: "none",
            background: "#4A90E2",
            color: "white",
            fontSize: "13px",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          Level 1
        </button>

        {/* Level 2 - Locked */}
        <button
          disabled
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            border: "none",
            background: "#ccc",
            color: "#777",
            fontSize: "13px",
            cursor: "not-allowed",
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          }}
        >
          🔒 Level 2
        </button>
      </div>
    </div>
  );
}
