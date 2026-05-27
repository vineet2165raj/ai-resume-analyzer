import React from "react";

const Recommendations = ({
  darkMode,
  recommendations,
}) => {

  if (recommendations.length === 0) return null;

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
        Recommendations
      </h2>

      <div className="space-y-3">

        {recommendations.map((rec, index) => (

          <div
            key={index}
            className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg"
          >

            {rec}

          </div>

        ))}

      </div>

    </div>

  );

};

export default Recommendations;