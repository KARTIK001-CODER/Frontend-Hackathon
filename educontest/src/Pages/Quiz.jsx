import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questions from "../data/questions";
import ProgressBar from "../components/ProgressBar";
import logo from "../assets/LOGO-LMS.svg";
import vector from "../assets/vector.svg";
import "../index.css"; // Krona One font

function Quiz() {
  const { topic, level } = useParams();
  const navigate = useNavigate();
  const quiz = questions[topic][level];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    if (!submitted && selected) {
      if (selected === quiz[currentQ].answer) {
        setScore(score + 1);
      }
      setSubmitted(true);
    }
  };

  const handleNext = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setSubmitted(false);
      setShowHint(false);
    } else {
      navigate("/result", { state: { score, total: quiz.length } });
    }
  };

  return (
    <div className="h-screen bg-[#7E80D7] flex flex-col justify-between font-krona">
{/* Top Section with Logo + Progress Bar */}
<div className="w-full px-6 pt-4">
  {/* Logo smaller on left */}
  <img src={logo} alt="LMS Logo" className="h-6 md:h-7 lg:h-8 mb-3" />

  {/* ProgressBar + Question Number wrapper */}
  <div className="w-full md:w-[85%] lg:w-[70%] mx-auto">
    <ProgressBar current={currentQ + 1} total={quiz.length} />
    <p className="mt-2 text-white text-xs md:text-sm text-left">
      Question {currentQ + 1}/{quiz.length}
    </p>
  </div>
</div>



      {/* Main Quiz Content */}
<div
  className="
    flex-1 flex flex-col items-center px-6 space-y-6 overflow-hidden
    justify-center md:justify-start mt-0 md:mt-6
  "
>        {/* Question */}
<h2
  className="
    text-base md:text-lg lg:text-xl 
    text-white font-normal 
    text-left md:text-center
    w-[90%] sm:w-[85%] md:w-full md:max-w-3xl 
    whitespace-pre-line leading-relaxed
  "
>
  {quiz[currentQ].question}
</h2>


        {/* Options */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
          {quiz[currentQ].options.map((opt, idx) => {
            let classes =
              "p-3 md:p-4 rounded-lg border-3 bg-white text-black transition-all text-sm md:text-base";

            if (submitted) {
              if (opt === quiz[currentQ].answer) {
                classes = "p-3 md:p-4 rounded-lg border-3 border-green-600 bg-green-300 text-green-700";
              } else if (opt === selected) {
                classes = "p-3 md:p-4 rounded-lg border-3 border-red-600 bg-red-300 text-red-700";
              }
            } else if (selected === opt) {
              classes = "p-3 md:p-4 rounded-lg border-3 border-yellow-600 bg-yellow-400 text-black";
            }

            return (
              <button
                key={idx}
                disabled={submitted}
                onClick={() => setSelected(opt)}
                className={classes}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Buttons Section */}
        <div className="flex items-center justify-center gap-6 relative">
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              !selected || submitted
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"
            }`}
            disabled={!selected || submitted}
          >
            Submit
          </button>

          {/* Hint Button with Popup */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="w-12 h-12 rounded-full bg-black text-black flex items-center justify-center text-xl shadow-lg hover:bg-yellow-300"
            >
              💡
            </button>
            {showHint && (
              <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10">
                {quiz[currentQ].hint}
              </div>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              submitted
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!submitted}
          >
            {currentQ === quiz.length - 1 ? "Finish →" : "Next →"}
          </button>
        </div>
      </div>

      {/* Bottom Vector Image */}
      <div className="w-full">
        <img
          src={vector}
          alt="Vector"
          className="w-full object-contain h-44 md:h-46 lg:h-75"
        />
      </div>
    </div>
  );
}

export default Quiz;
