import React, { useEffect, useState } from "react";

const ATSScoreCard = ({
  darkMode,
  atsScore,
  getScoreColor,
}) => {
const [animatedScore, setAnimatedScore] = useState(0);
useEffect(() => {

  let start = 0;

  const end = atsScore;

  if (start === end) return;

  const duration = 1500;

  const incrementTime = 20;

  const step = Math.ceil(
    end / (duration / incrementTime)
  );

  const timer = setInterval(() => {

    start += step;

    if (start >= end) {

      start = end;

      clearInterval(timer);

    }

    setAnimatedScore(start);

  }, incrementTime);

  return () => clearInterval(timer);

}, [atsScore]);



  return (

    <div
      className={`${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }
      p-8
      rounded-2xl
      shadow-lg`}
    >

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        ATS Match Score
      </h2>

      <div className="flex items-center justify-between mb-4">

        <span className="text-lg font-semibold text-gray-700">
          Resume Strength
        </span>

        <span className="text-3xl font-bold text-blue-600">
          {animatedScore}%
        </span>

      </div>

      <div className="w-full bg-gray-300 rounded-full h-8 overflow-hidden">

        <div
          className={`${getScoreColor()} h-8 text-white flex items-center justify-center font-bold transition-all duration-500`}
          style={{ width: `${atsScore}%` }}
        >
          {animatedScore}%
        </div>

      </div>

      <div className="mt-4 text-gray-700">

        {atsScore >= 70 && (
          <p>
            Excellent resume match for this role 🚀
          </p>
        )}

        {atsScore >= 40 && atsScore < 70 && (
          <p>
            Good resume but needs some improvements 👍
          </p>
        )}

        {atsScore < 40 && (
          <p>
            Resume needs significant improvement ⚠️
          </p>
        )}

      </div>

    </div>

  );

};

export default ATSScoreCard;