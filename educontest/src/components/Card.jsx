import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, desc, topic }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex gap-3 mt-auto">
        <button
          onClick={() => navigate(`/quiz/${topic}/beginner`)}
          className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-lg"
        >
          Beginner
        </button>
        <button
          onClick={() => navigate(`/quiz/${topic}/advanced`)}
          className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg"
        >
          Advanced
        </button>
      </div>
    </div>
  );
}

export default Card;
