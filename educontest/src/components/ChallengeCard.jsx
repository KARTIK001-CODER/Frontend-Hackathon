import React, { useState } from "react";

const ChallengeCard = ({ challenge, onStart }) => {
  const [level, setLevel] = useState(0);

  const styles = {
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#787bd1",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0px 6px 14px rgba(0,0,0,0.15)",
      color: "white",
      border: "3px solid #000000ff",
    },
    left: { maxWidth: "60%" },
    heading: { fontWeight: 800, marginBottom: "8px" },
    text: { marginBottom: "16px", lineHeight: 1.5, opacity: 0.95 },
    sliderSection: { margin: "8px 0 16px" },
    range: { width: "100%" },
    sliderLabels: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "11px",
      marginTop: "8px",
      width: "100%",
      color: "#ffffff",
      opacity: 0.9,
    },
    button: {
      background: challenge.locked ? "#ccc" : "#ffcc00",
      color: challenge.locked ? "#666" : "black",
      fontWeight: 800,
      padding: "10px 18px",
      borderRadius: "10px",
      border: "none",
      cursor: challenge.locked ? "not-allowed" : "pointer",
      boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.15)",
    },
    right: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "10px",
    },
    monitor: {
      position: "relative",
      width: "260px",
      height: "130px",
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    },
    monitorStand: {
      position: "absolute",
      bottom: "-8px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "12px",
      background: "#9ca3af",
      borderRadius: "6px",
    },
    monitorBase: {
      position: "absolute",
      bottom: "-14px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "3px",
      background: "rgba(255,255,255,0.6)",
      borderRadius: "2px",
    },
    monitorContent: {
      position: "absolute",
      inset: "10px",
      background: "#f5f6fb",
      borderRadius: "8px",
    },
    dot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#fdd835",
    },
    line: {
      height: "6px",
      background: "#cfd4ff",
      borderRadius: "9999px",
    },
  };

  return (
    <div style={styles.container} className="challenge-card">
      {/* Left Section */}
      <div style={styles.left}>
        <h2 style={styles.heading} className="challenge-title">{challenge.title}</h2>
        <p style={styles.text} className="challenge-desc">{challenge.description}</p>

        {/* Slider */}
        <div style={styles.sliderSection} className="slider-wrap">
          <input
            type="range"
            min="0"
            max="100"
            step="50"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            style={{...styles.range, ['--filled']: `${level}%`}}
            className="level-range"
            list={`level-marks-${challenge.id}`}
            disabled={challenge.locked}
          />
          <div className="level-range-marks">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <datalist id={`level-marks-${challenge.id}`}>
            <option value="0" label="Start" />
            <option value="50" label="Beginner" />
            <option value="100" label="Advanced" />
          </datalist>
          <div className="level-range-labels">
            <span></span>
            <span>Beginner</span>
            <span>Advanced</span>
          </div>
        </div>

        {/* Button */}
        <button
          style={styles.button}
          disabled={challenge.locked}
          onClick={() => !challenge.locked && onStart(challenge.id)}
        >
          {challenge.locked ? "Locked 🔒" : "Let’s Go!"}
        </button>
      </div>

      {/* Right Section - Monitor Illustration */}
      <div style={styles.right}>
        <div style={styles.monitor} className="monitor" aria-hidden>
          <div style={styles.monitorContent}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px' }}>
              <div style={styles.dot}></div>
              <div style={{ ...styles.line, flex: 1 }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 10px' }}>
              <div style={{ ...styles.line, width: '60%' }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px' }}>
              <div style={{ ...styles.line, width: '40%' }}></div>
            </div>
          </div>
          <div style={styles.monitorStand}></div>
          <div style={styles.monitorBase}></div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
