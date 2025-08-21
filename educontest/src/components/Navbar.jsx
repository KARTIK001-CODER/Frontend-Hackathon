import React from "react";

const Navbar = ({ user }) => {
  const styles = {
    header: {
      backgroundColor: "white",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 50,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 32px",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "8px",
    },
    logoIcon: {
      fontSize: "26px",
      color: "#6b6fcf",
    },
    logoText: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1F2937",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "#f3f4f6",
      padding: "8px 16px",
      borderRadius: "9999px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      cursor: "pointer",
    },
    profileCircle: {
      width: "36px",
      height: "36px",
      background: "linear-gradient(90deg, #7b8ff7, #6b6fcf)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
    },
    profileName: {
      fontWeight: 500,
      color: "#374151",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <div style={styles.logoIcon}><img src="vector.png" alt="" width={40} /></div>
          <span style={styles.logoText}>QUIZLY</span>
        </div>

        {/* Profile Section */}
        <div style={styles.profileContainer}>
          <div style={styles.profileCircle}>{user?.name?.charAt(0) || 'U'}</div>
          <span style={styles.profileName}>{user?.name || 'User'}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
