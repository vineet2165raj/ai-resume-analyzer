import React from "react";

const LearningRoadmap = ({
  darkMode,
  learningRoadmap,
}) => {

  if (learningRoadmap.length === 0) return null;

  return (

    <div className="mt-12 w-full">

      <div
        className={`${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }
        p-8
        rounded-3xl
        shadow-xl`}
      >

        <h2 className="text-3xl font-bold mb-8 text-cyan-600">
          Personalized Learning Roadmap
        </h2>

        <div className="space-y-6">

          {learningRoadmap.map((step, index) => (

            <div
              key={index}
              className="flex items-center gap-6"
            >

              {/* Step Number */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">

                {index + 1}

              </div>

              {/* Step Content */}
              <div
                className={`${
                  darkMode
                    ? "bg-gray-700"
                    : "bg-cyan-50"
                }
                flex-1
                p-5
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300`}
              >

                <p className="text-lg font-medium">
                  {step}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default LearningRoadmap;