export default function Navbar() {
  return (
    <nav
      style={{
        background: "white",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Logo */}
      <h1
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#222",
        }}
      >
        QUIZLY
      </h1>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span style={{ fontSize: "18px", cursor: "pointer" }}>🔔</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "2px solid #eee",
            cursor: "pointer",
          }}
        />
      </div>
    </nav>
  );
}
