import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    className: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData); // store details in App state
    navigate("/dashboard"); // redirect
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #4f8df7, #82b1ff)"
    }}>
      <form 
        onSubmit={handleSubmit} 
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          width: "320px"
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center", color: "#333" }}>
          Sign Up
        </h2>

        <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Full Name</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }}
        />

        <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Class</label>
        <input 
          type="text" 
          name="className"
          value={formData.className}
          onChange={handleChange}
          placeholder="Enter your class"
          required
          style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "8px" }}
        />

        <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Email</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          style={{ padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
        />

        <button 
          type="submit"
          style={{
            padding: "12px",
            background: "#4f8df7",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
}
