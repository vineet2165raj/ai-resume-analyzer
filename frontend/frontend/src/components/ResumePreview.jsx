import React from "react";

const ResumePreview = ({
  pdfFile,
  darkMode,
}) => {

  if (!pdfFile) return null;

  return (

    <div className="mt-10 w-full">

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

        <h2 className="text-3xl font-bold mb-6 text-blue-600">
          Uploaded Resume Preview
        </h2>

        <iframe
          src={pdfFile}
          title="Resume Preview"
          className="w-full h-[700px] rounded-2xl border"
        />

      </div>

    </div>

  );

};

export default ResumePreview;