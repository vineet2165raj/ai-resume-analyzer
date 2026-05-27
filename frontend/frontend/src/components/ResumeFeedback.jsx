import React from "react";

const ResumeFeedback = ({
  darkMode,
  resumeFeedback,
}) => {

  if (resumeFeedback.length === 0) return null;

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

        <h2 className="text-3xl font-bold mb-8 text-pink-600">
          AI Resume Improvement Suggestions
        </h2>

        <div className="space-y-5">

          {resumeFeedback.map((item, index) => (

            <div
              key={index}
              className={`${
                darkMode
                  ? "bg-gray-700"
                  : "bg-pink-50"
              }
              border-l-8 border-pink-500
              p-5 rounded-2xl shadow-md
              hover:shadow-xl
              transition-all duration-300`}
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">

                  💡

                </div>

                <p className="text-lg font-medium">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default ResumeFeedback;