import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/LOGO-LMS.svg";
import vector from "../assets/vector.svg";
import "../index.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 1 };
  const percentage = Math.round((score / total) * 100);

  const circleRadius = 70;
  const circumference = 2 * Math.PI * circleRadius;
  const progress = (score / total) * circumference;

  return (
    <div className="h-screen bg-[#7E80D7] flex flex-col justify-between font-krona text-white">
        <div className="w-full px-6 pt-4">
        <img src={logo} alt="LMS Logo" className="h-6 md:h-7 lg:h-8 mb-3" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-8">
        <h1 className="text-2xl md:text-3xl">Quiz Completed!</h1>

        <div className="relative w-44 h-44">
          <svg className="w-44 h-44">
            <circle
              cx="88"
              cy="88"
              r={circleRadius}
              stroke="white"
              strokeWidth="10"
              fill="transparent"
              className="opacity-20"
            />
            <circle
              cx="88"
              cy="88"
              r={circleRadius}
              stroke="#FFD700"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            {percentage}%
          </div>
        </div>

        <p className="text-lg md:text-xl">
          You scored <span className="font-bold">{score}</span> out of {total}
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-full font-medium bg-white text-black hover:bg-gray-200 transition-all shadow-lg"
        >
          Go Home
        </button>
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
export default Result;
