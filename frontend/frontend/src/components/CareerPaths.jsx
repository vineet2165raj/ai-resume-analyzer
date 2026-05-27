import React from "react";

const CareerPaths = ({
  darkMode,
  careerPaths,
}) => {

  if (careerPaths.length === 0) return null;

  return (

    <div className="mt-10 w-full">

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

        <h2 className="text-3xl font-bold mb-6 text-indigo-600">
          Recommended Career Paths
        </h2>

        <div className="flex flex-wrap gap-4">

          {careerPaths.map((career, index) => (

            <div
              key={index}
              className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
            >

              {career}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default CareerPaths;