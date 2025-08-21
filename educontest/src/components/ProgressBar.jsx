import React from "react";

function SegmentedProgressBar({ current, total }) {
  return (
    <div className="flex space-x-0.5">
      {Array.from({ length: total }).map((_, index) => {
        const filled = index < current;
        return (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              filled ? "bg-yellow-400" : "bg-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
}

export default SegmentedProgressBar;
