export default function Achievements() {
  return (
    <div className="card achievements">
      <h2>Achievements</h2>
      <ul>
        <li>🏆 Top Scorer - Highest score in class</li>
        <li>✅ Ethical Master - Expert in reasoning</li>
        <li>🧠 Critical Thinker - Advanced problem solver</li>
      </ul>
      <div className="stats">
        <span>24 Quizzes Won</span>
        <span className="green">92% Avg Score</span>
      </div>
    </div>
  );
}
