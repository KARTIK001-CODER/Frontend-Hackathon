import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    className: "",
    email: ""
  });

  return (
    <Router>
      <Routes>
        {/* Sign Up Page */}
        <Route path="/" element={<SignUp setUser={setUser} />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
}
