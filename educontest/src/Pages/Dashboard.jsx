import React from "react";
import Navbar from "../Components/Navbar";
import ChallengeCard from "../Components/ChallengeCard";
import CourseCard from "../Components/CoursesCard";

const Home = ({ user }) => {
  const courses = [
    {
      id: 1,
      emoji: "🧠",
      title: "Critical Thinking & Applied Knowledge",
      description:
        "Test your ability to analyze complex situations and apply your knowledge to solve problems.",
      time: "3h 28m",
      progress: 75,
    },
    {
      id: 2,
      emoji: "⚖️",
      title: "Ethical Decision-Making & Integrity",
      description:
        "Learn how to handle real-world ethical scenarios with integrity.",
      time: "2h 10m",
      progress: 73,
    },
    {
      id: 3,
      emoji: "⚡",
      title: "Advanced Problem Solving",
      description:
        "Take your problem-solving skills to the next level!",
      time: "4h 00m",
      progress: 65,
    },
    {
      id: 4,
      emoji: "🎯",
      title: "Strategic Planning & Execution",
      description:
        "Master the art of planning and executing complex strategies effectively.",
      time: "2h 45m",
      progress: 45,
    },
    {
      id: 5,
      emoji: "🔍",
      title: "Research & Analysis Methods",
      description:
        "Learn systematic approaches to research and data analysis.",
      time: "3h 15m",
      progress: 30,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6" }}>
      {/* Navbar */}
      <Navbar user={user} />

      {/* Main Content */}
      <div style={{ padding: "32px" }} className="page">
        {/* Challenges Section */}
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          Hi {user?.name || 'there'}! <br /> Let's continue a quiz!
        </h2>

        <div style={{ 
          overflowX: "auto", 
          paddingBottom: "16px",
          marginBottom: "32px",
          scrollbarWidth: "thin",
          scrollbarColor: "#6b6fcf #f3f4f6",
          position: "relative",
          scrollBehavior: "smooth"
        }} className="challenge-scroll-container">
          <div style={{ 
            display: "flex", 
            gap: "20px", 
            minWidth: "max-content",
            paddingRight: "40px"
          }}>
            <ChallengeCard
              challenge={{
                id: 1,
                title: "Critical Thinking & Applied Knowledge",
                description:
                  "Test your ability to analyze complex situations and apply your knowledge to solve problems.",
                locked: false,
                illustration: "🧠",
              }}
              onStart={(id) => console.log("Start Challenge:", id)}
            />

            <ChallengeCard
              challenge={{
                id: 2,
                title: "Ethical Decision-Making & Integrity",
                description:
                  "Learn how to handle real-world ethical scenarios with integrity.",
                locked: false,
                illustration: "⚖️",
              }}
              onStart={(id) => console.log("Start Challenge:", id)}
            />

            <ChallengeCard
              challenge={{
                id: 3,
                title: "Advanced Problem Solving",
                description:
                  "Take your problem-solving skills to the next level with complex algorithms and logic puzzles.",
                locked: false,
                illustration: "⚡",
              }}
              onStart={(id) => console.log("Start Challenge:", id)}
            />
          </div>
        </div>

        {/* Scroll Hint */}
        <div style={{ 
          textAlign: "center", 
          color: "#6b7280", 
          fontSize: "14px", 
          marginBottom: "32px",
          fontStyle: "italic"
        }}>
          💡 Scroll horizontally to see more challenges
        </div>

        {/* Courses Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', margin: '32px 0 16px' }}>
          <h2 style={{ fontSize: "22px", fontWeight: "bold", margin: 0 }}>
            Ongoing Courses
          </h2>
          <button style={{ background: '#eef2ff', color: '#111827', border: '1px solid #c7d2fe', borderRadius: '9999px', padding: '6px 10px', fontSize: '12px' }}>Show all</button>
        </div>

        <div style={{ 
          overflowX: "auto", 
          paddingBottom: "16px",
          marginBottom: "32px",
          scrollbarWidth: "thin",
          scrollbarColor: "#6b6fcf #f3f4f6",
          position: "relative",
          scrollBehavior: "smooth"
        }} className="course-scroll-container">
          <div style={{ 
            display: "flex", 
            gap: "24px", 
            minWidth: "max-content",
            paddingRight: "40px"
          }}>
            {courses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>

        {/* Courses Scroll Hint */}
        <div style={{ 
          textAlign: "center", 
          color: "#6b7280", 
          fontSize: "14px", 
          marginBottom: "32px",
          fontStyle: "italic"
        }}>
          💡 Scroll horizontally to see more courses
        </div>
      </div>
    </div>
  );
};

export default Home;
