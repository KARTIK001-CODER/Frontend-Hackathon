export default function ProfileCard({ user }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "20px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      {/* Permanent Avatar */}
      <img
        src="https://i.ibb.co/2d3QzQ0/default-avatar.png" // a nice static avatar
        alt="User Avatar"
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px",
          border: "3px solid #4A90E2",
        }}
      />

      {/* User Info */}
      <h2 style={{ margin: "10px 0", color: "#333" }}>
        {user?.name || "Guest User"}
      </h2>
      <p style={{ margin: "5px 0", color: "#666" }}>
        📘 Class: {user?.className || "Not Assigned"}
      </p>
      <p style={{ margin: "5px 0", color: "#666" }}>
        📧 {user?.email || "No Email"}
      </p>
    </div>
  );
}
