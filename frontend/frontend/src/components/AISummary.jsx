    import React from "react";

const AISummary = ({
  darkMode,
  summary,
}) => {

  if (!summary) return null;

  return (

    <div className="mt-12 w-full">

      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden hover:scale-[1.01] hover:shadow-cyan-400/40 transition-all duration-500">

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>

        <div className="relative z-10">

          <div className="flex items-center gap-3 mb-6">

            <div
              className={`${
                darkMode
                  ? "bg-gray-800 text-white"
                  : "bg-white text-black"
              }
              p-4 rounded-2xl shadow-lg`}
            >
              <span className="text-3xl">
                  🤖
              </span>
            </div>

            <h2 className="text-3xl font-bold">
              AI Resume Analysis
            </h2>

          </div>

          <p className="text-xl leading-10 text-blue-100 tracking-wide">

            {summary}

          </p>

        </div>

      </div>

    </div>

  );

};

export default AISummary;