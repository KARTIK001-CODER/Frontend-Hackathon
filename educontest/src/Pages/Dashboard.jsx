import Navbar from "../components/Navbar";
import FriendsList from "../components/FriendsList";
import ChallengeCard from "../components/ChallengeCard";
import ProfileCard from "../components/ProfileCard";
import Achievements from "../components/Achievements";

export default function Dashboard({ user }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      
      {/* Navbar on top */}
      <Navbar />

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", gap: "20px", padding: "20px" }}>
        
        {/* Left Sidebar */}
        <div>
          <FriendsList />
        </div>

        {/* Center Content */}
        <div style={{ flex: 1 }}>
          <h1>Hello, {user.name || "Student"}! 👋</h1>
          <p style={{ color: "#666", marginBottom: "10px" }}>
            You are enrolled in: <strong>{user.className || "No class"}</strong>
          </p>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Test your knowledge and compete with friends in today's contests.
          </p>
          
          <ChallengeCard 
            title="Critical Thinking & Applied Knowledge" 
            desc="Test your ability to analyze complex situations and apply your knowledge to solve problems."
            color="blue"
          />
          <ChallengeCard 
            title="Ethical Decision-Making & Integrity" 
            desc="Assess your understanding of ethical principles and your capacity to make decisions with integrity."
            color="green"
          />
        </div>

        {/* Right Sidebar */}
        <div>
          <ProfileCard user={user} />
          <Achievements />
        </div>
      </div>
    </div>
  );
}
