
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Document, Page } from "react-pdf";
import html2canvas from "html2canvas";
import AnalyticsSection from "./components/AnalyticsSection";
import ResumePreview from "./components/ResumePreview";
import ATSScoreCard from "./components/ATSScoreCard";
import Recommendations from "./components/Recommendations";
import AISummary from "./components/AISummary";
import LearningRoadmap from "./components/LearningRoadmap";
import ResumeFeedback from "./components/ResumeFeedback";
import CareerPaths from "./components/CareerPaths";
import downloadReport from "./utils/generatePDFReport";
import { TypeAnimation } from "react-type-animation";


const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "https://ai-resume-analyzer-djc3.onrender.com";
const rolesResponse = await fetch(`${API_URL}/job-roles`);
const skillsResponse = await fetch(`${API_URL}/top-skills`);
const response = await fetch(`${API_URL}/upload`, {
  method: "POST",
  body: formData,
});

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Pie,
} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
function App() {

  const [file, setFile] = useState(null);

  const [pdfFile, setPdfFile] = useState(null);

  const [message, setMessage] = useState("");

  const [resumeText, setResumeText] = useState("");

  const [skills, setSkills] = useState([]);

  const [jobRole, setJobRole] = useState("Data Analyst");

  const [atsScore, setAtsScore] = useState(0);

  const [missingSkills, setMissingSkills] = useState([]);

  const [matchedSkills, setMatchedSkills] = useState([]);

  const [recommendations, setRecommendations] = useState([]);

  const [summary, setSummary] = useState("");
  
  const [strengths, setStrengths] = useState([]);

  const [weaknesses, setWeaknesses] = useState([]);

  const [careerPaths, setCareerPaths] = useState([]);

  const [learningRoadmap, setLearningRoadmap] = useState([]);

  const [resumeFeedback, setResumeFeedback] = useState([]);

  const [jobRoles, setJobRoles] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(false);

  const [resumePreview, setResumePreview] = useState(null);

  const [topSkillsData, setTopSkillsData] = useState({
  labels: [],
  values: [],
});

const [topRolesData, setTopRolesData] = useState({
  labels: [],
  values: [],
});

const [jobTrendsData, setJobTrendsData] = useState({
  labels: [],
  values: [],
});

const [salaryData, setSalaryData] = useState({
  labels: [],
  values: [],
});

  const getScoreColor = () => {

  if (atsScore >= 70) {
    return "bg-green-500";
  }

  else if (atsScore >= 40) {
    return "bg-yellow-500";
  }

  else {
    return "bg-red-500";
  }
};
const chartData = {

  labels: ["Matched Skills", "Missing Skills"],

  datasets: [
    {
      data: [
        matchedSkills.length,
        missingSkills.length
      ],

      backgroundColor: [
  "rgba(59, 130, 246, 0.7)",
  "rgba(139, 92, 246, 0.7)",
  "rgba(236, 72, 153, 0.7)",
  "rgba(249, 115, 22, 0.7)",
  "rgba(34, 197, 94, 0.7)",
  "rgba(6, 182, 212, 0.7)",
  "rgba(168, 85, 247, 0.7)",
  "rgba(239, 68, 68, 0.7)",
  "rgba(234, 179, 8, 0.7)",
  "rgba(20, 184, 166, 0.7)"
],

      borderWidth: 1,
    },
  ],
};

const topSkillsChartData = {

  labels: topSkillsData.labels,

  datasets: [
    {
      label: "Top Skills Demand",

      data: topSkillsData.values,

      backgroundColor: [
        "#3b82f6",
        "#6366f1",
        "#8b5cf6",
        "#06b6d4",
        "#14b8a6",
        "#22c55e",
        "#84cc16",
        "#f59e0b",
        "#f97316",
        "#ef4444"
      ],

      borderRadius: 8,
    },
  ],
};

const topRolesChartData = {

  labels: topRolesData.labels || [],

  datasets: [
    {
      label: "Top Hiring Roles",

      data: topRolesData.values || [],

      backgroundColor: [
        "#2563eb",
        "#7c3aed",
        "#db2777",
        "#ea580c",
        "#16a34a",
        "#0891b2",
        "#9333ea",
        "#dc2626",
        "#ca8a04",
        "#0f766e"
      ],

      borderRadius: 8,
    },
  ],
};
const jobTrendsChartData = {

  labels: jobTrendsData.labels,

  datasets: [
    {
      label: "Job Market Growth",

      data: jobTrendsData.values,

      borderColor: "#2563eb",

      backgroundColor: "rgba(37, 99, 235, 0.2)",

      tension: 0.4,

      fill: true,

      pointBackgroundColor: "#2563eb",

      pointRadius: 5,
    },
  ],
};

const salaryChartData = {

  labels: salaryData.labels,

  datasets: [
    {
      label: "Average Salary (LPA)",

      data: salaryData.values,

      backgroundColor: [
        "#2563eb",
        "#7c3aed",
        "#db2777",
        "#ea580c",
        "#16a34a",
        "#0891b2"
      ],

      borderRadius: 10,
    },
  ],
};
//
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";


useEffect(() => {

  const fetchAnalytics = async () => {

    try {

      // Job roles
      const rolesResponse = await fetch(
        `${API_URL}/job-roles`
      );

      const rolesData = await rolesResponse.json();

      setJobRoles(rolesData.roles);

      // Top skills
      const skillsResponse = await fetch(
      `${API_URL}/top-skills`
        );

      const skillsData = await skillsResponse.json();

      setTopSkillsData({
        labels: skillsData.labels,
        values: skillsData.values,
      });

      // Top hiring roles
      const topRolesResponse = await fetch(
        `${API_URL}/top-roles`
      );

      const topRolesData = await topRolesResponse.json();

      setTopRolesData({
        labels: topRolesData.labels,
        values: topRolesData.values,
      });
      
      const trendsResponse = await fetch(
  `${API_URL}/job-trends`
);

const trendsData = await trendsResponse.json();

setJobTrendsData({
  labels: trendsData.labels,
  values: trendsData.values,
});

const salaryResponse = await fetch(
  `${API_URL}/salary-insights `
);

const salaryResult = await salaryResponse.json();

setSalaryData({
  labels: salaryResult.labels,
  values: salaryResult.values,
});

    }

    catch (error) {

      console.error(error);

    }

  };

  fetchAnalytics();

}, []);


  // Handle file selection
  const handleFileChange = (event) => {

  const selectedFile = event.target.files[0];

  

  setFile(selectedFile);

  setPdfFile(URL.createObjectURL(event.target.files[0]));

  if (selectedFile) {

    const fileURL = URL.createObjectURL(selectedFile);

    setResumePreview(fileURL);
  }
};


  // Upload resume
  const handleUpload = async () => {

  if (!file) {

    setMessage("Please select a resume");

    return;

  }

  const formData = new FormData();

  formData.append("job_role", jobRole);

  formData.append("file", file);

  // START LOADING
  setLoading(true);

  try {

    const response = await fetch(
      `${API_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    setMessage(data.message);

    setResumeText(data.resume_text);

    setSkills(data.skills);

    setAtsScore(data.ats_score);

    setMissingSkills(data.missing_skills);

    setMatchedSkills(data.matched_skills);

    setRecommendations(data.recommendations);

    setSummary(data.summary);

    setStrengths(data.strengths);

    setWeaknesses(data.weaknesses);

    setCareerPaths(data.career_paths);

    setLearningRoadmap(data.learning_roadmap);

    setResumeFeedback(data.resume_feedback);

  } catch (error) {

    console.error(error);

    setMessage("Upload failed");

  } finally {

    // STOP LOADING
    setLoading(false);

  }

};

if (loading) {

  return (

    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="text-center">

        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

        <h2 className="text-3xl font-bold text-blue-600">

          Analyzing Resume...

        </h2>

        <p className="text-gray-500 mt-2">

          AI is extracting insights from your resume

        </p>

      </div>

    </div>

  );

}
//-----------------------
//--------------return
//----------------------

  return (

  <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen transition-all duration-500 relative`}>
    

    {/* Navbar */}
    <nav className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} shadow-md px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-500`}>

      <div>

  <h1 className="text-3xl font-extrabold text-blue-600">
    AI Resume Analyzer
  </h1>

  <p className="text-sm text-gray-500 mt-1">
    AI-Powered ATS & Career Intelligence Platform
  </p>

</div>

      <div className="flex items-center gap-4">

  <div className={`${darkMode ? "text-gray-300" : "text-gray-600"} font-medium`}>
    Smart ATS & Career Insights
  </div>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-300"
  >
    {darkMode ? "☀ Light" : "🌙 Dark"}
  </button>

</div>
    </nav>

<div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-12 shadow-2xl mx-6 mt-10 mb-12">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 opacity-10 rounded-full blur-3xl"></div>

  <div className="relative z-10">

    {/* Main Heading */}
    <div className="mb-6">

  <h1 className="text-6xl font-extrabold text-white leading-tight mb-4">

    Smart Resume Intelligence

  </h1>

  <TypeAnimation
    sequence={[
      "AI-Powered ATS Optimization",
      2000,

      "Career Intelligence Insights",
      2000,

      "Resume Skill Analysis",
      2000,

      "Market Trend Analytics",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-2xl font-semibold text-cyan-200"
  />

</div>

    {/* Subtitle */}
    <p className="text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">

      Analyze resumes using AI-powered ATS scoring,
      career insights, market analytics,
      and personalized learning recommendations.

    </p>

    {/* Feature Tags */}
    <div className="flex flex-wrap gap-4">

      <div className="bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-lg">
        ATS Score Analysis
      </div>

      <div className="bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-lg">
        Career Recommendations
      </div>

      <div className="bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-lg">
        Resume Intelligence
      </div>

      <div className="bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-lg">
        Market Analytics
      </div>

    </div>

  </div>

</div>

<div className="text-center mt-14 mb-10">

  <h2 className="text-5xl font-extrabold text-blue-600 mb-4">

    Market Intelligence Dashboard

  </h2>

  <p className="text-gray-500 text-lg">

    AI-powered insights into hiring trends,
    salary intelligence,
    top roles,
    and market demand.

  </p>

</div>

{/* AnalyticsSection */}
<div>

 <AnalyticsSection
  darkMode={darkMode}
  topSkillsChartData={topSkillsChartData}
  topRolesChartData={topRolesChartData}
  jobTrendsChartData={jobTrendsChartData}
  salaryChartData={salaryChartData}
/>

{/* Dashboard Stats */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mb-10">

  {/* ATS Score */}
  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 rounded-3xl shadow-xl">

    <h3 className="text-xl font-semibold">
      ATS Score
    </h3>

    <p className="text-4xl font-bold mt-4">
      {atsScore || 0}%
    </p>

  </div>

  {/* Matched Skills */}
  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-xl">

    <h3 className="text-xl font-semibold">
      Matched Skills
    </h3>

    <p className="text-4xl font-bold mt-4">
      {matchedSkills.length}
    </p>

  </div>

  {/* Missing Skills */}
  <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-3xl shadow-xl">

    <h3 className="text-xl font-semibold">
      Missing Skills
    </h3>

    <p className="text-4xl font-bold mt-4">
      {missingSkills.length}
    </p>

  </div>

  {/* AI Insights */}
  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-3xl shadow-xl">

    <h3 className="text-xl font-semibold">
      AI Insights
    </h3>

    <p className="text-4xl font-bold mt-4">
      Ready
    </p>

  </div>

</div>

</div>

    {/* Main Content */}
<div className="flex flex-col items-center p-6">

      <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-10">
        AI Resume Analyzer
      </h1>


  <div
  className={`${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-black"
  }
  relative
  overflow-hidden
  group
  max-w-6xl
  mx-auto
  mt-10
  p-10
  rounded-3xl
  shadow-2xl
  hover:shadow-cyan-400/30
  hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]
  hover:-translate-y-2
  hover:scale-[1.01]
  hover:ring-2
  hover:ring-cyan-400/30
  transition-all
  hover:scale-110
  hover:shadow-lg
  transition-all
  duration-300
  cursor-pointer
  duration-500`}
>

  {/* AI Glow Effect */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-500/10 blur-3xl"></div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

  {/* ✅ LEFT COLUMN */}
  <div className="flex flex-col gap-6">

    {/* Job Role Dropdown */}
    <select
      value={jobRole}
      onChange={(e) => setJobRole(e.target.value)}
      className="w-full border p-3 rounded-lg"
    >
      {jobRoles.map((role, index) => (
        <option key={index}>{role}</option>
      ))}
    </select>

    {/* Icon */}
    <div className="flex justify-center">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl animate-pulse">
        <span className="text-5xl text-white">📄</span>
      </div>
    </div>

    {/* File Input */}
    <input
      type="file"
      onChange={handleFileChange}
      className="w-full border p-3 rounded-lg"
    />

    {/* Upload Button */}
    <button
      onClick={handleUpload}
      disabled={loading}
      className={`w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 text-white
        ${loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 hover:scale-105"}
      `}
    >
      
      
      {loading ? "Analyzing Resume..." : "Upload Resume"}
    </button>


      {/* Resume Preview */}
    <ResumePreview
      pdfFile={pdfFile}
      darkMode={darkMode}
    />
    {/* Loading Spinner */}
    {loading && (
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin shadow-xl"></div>
        <h2 className="mt-4 text-xl font-bold text-blue-600">AI is analyzing your resume...</h2>
        <p className="mt-2 text-gray-500 text-center text-sm">
          Extracting skills, calculating ATS score, generating insights and recommendations.
        </p>
      </div>
    )}

    {/* Message */}
    {message && (
      <p className="text-center text-lg text-gray-700">{message}</p>
    )}


  

    

    

    

  </div>
  {/* ✅ END LEFT COLUMN */}


  {/* ✅ RIGHT COLUMN */}
  <div className="flex flex-col gap-6">

    {/* ATS Score Card */}
    <ATSScoreCard
      darkMode={darkMode}
      atsScore={atsScore}
      getScoreColor={getScoreColor}
    />
    {/* Skills Analytics / Pie Chart */}
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } p-6 rounded-2xl shadow-lg`}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills Analytics</h2>
      <div className="max-w-[300px] mx-auto">
        <div id="skillsPieChart">
          <Pie data={chartData} />
        </div>
      </div>
    </div>

    {/* Extracted Resume Text */}
    {resumeText && (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Extracted Resume Text</h2>
        <div className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"} p-4 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap`}>
          {resumeText}
        </div>
      </div>
    )}
    

    {/* Extracted Skills */}
    {skills.length > 0 && (
      <div>
        <h2 className="text-2xl font-bold mt-6"></h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}

  </div>
  {/* ✅ END RIGHT COLUMN */}

</div> 
 </div>
    




{/* downloadReport */}

<div className="mt-10 text-center">

  <button
   onClick={() =>
  downloadReport({
    atsScore,
    jobRole,
    matchedSkills,
    missingSkills,
    recommendations,
    summary,
    file,
  })
}
    className="bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 text-white px-5 md:px-8 py-3 rounded-xl font-semibold shadow-lg"
  >
    Download ATS Report
  </button>

</div>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 w-full">

  {/* Matched Skills */}
  <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-8 rounded-2xl shadow-lg`}>

    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Matched Skills
    </h2>

    <div className="flex flex-wrap gap-3">

      {matchedSkills.map((skill, index) => (

        <span
          key={index}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          {skill}
        </span>

      ))}

    </div>

  </div>


  {/* Missing Skills */}
  <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} p-8 rounded-2xl shadow-lg`}>
    <h2 className="text-2xl font-bold mb-6 text-gray-800">
      Missing Skills
    </h2>

    <div className="flex flex-wrap gap-3">

      {missingSkills.map((skill, index) => (

        <span
          key={index}
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          {skill}
        </span>

      ))}

    </div>

  </div>


 <Recommendations
  darkMode={darkMode}
  recommendations={recommendations}
/>

</div>


<AISummary
  darkMode={darkMode}
  summary={summary}
/>

{/* Strength & Weakness Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 w-full">

  {/* Strength Areas */}
  <div
    className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
    p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
  >

    <h2
      className={`text-2xl font-bold mb-6 ${
        darkMode ? "text-green-400" : "text-green-600"
      }`}
    >
      Strength Areas
    </h2>

    <div className="space-y-3">

      {strengths.map((item, index) => (

        <div
          key={index}
          className="bg-green-100 text-black border-l-4 border-green-500 p-4 rounded-lg"
        >
          {item}
        </div>

      ))}

    </div>

  </div>


  {/* Weak Areas */}
  <div
    className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
    p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
  >

    <h2
      className={`text-2xl font-bold mb-6 ${
        darkMode ? "text-red-400" : "text-red-600"
      }`}
    >
      Weak Areas
    </h2>

    <div className="space-y-3">

      {weaknesses.map((item, index) => (

        <div
          key={index}
          className="bg-red-100 text-black border-l-4 border-red-500 p-4 rounded-lg"
        >
          {item}
        </div>

      ))}

    </div>

  </div>

</div>


{/* Career Paths Section */}

<CareerPaths
  darkMode={darkMode}
  careerPaths={careerPaths}
/>

{/* Learning Roadmap Section */}

<LearningRoadmap
  darkMode={darkMode}
  learningRoadmap={learningRoadmap}
/>

{/* AI Resume Feedback */}

<ResumeFeedback
  darkMode={darkMode}
  resumeFeedback={resumeFeedback}
/>

<footer
  className={`${
  darkMode
    ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300"
    : "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white"
}
mt-6
py-10
px-8
rounded-t-[40px]
shadow-2xl
shadow-[0_0_50px_rgba(59,130,246,0.25)]
backdrop-blur-xl`}
>

  <div className="max-w-[95%] mx-auto grid md:grid-cols-3 gap-12 items-center">

    {/* Branding */}
    <div>

      <h2 className="text-4xl font-extrabold mb-4">

        AI Resume Analyzer

      </h2>

      <p className="text-lg leading-relaxed opacity-90 max-w-md">

        AI-powered ATS scoring,
        resume intelligence,
        market analytics,
        and career recommendations platform.

      </p>

    </div>

    {/* Navigation */}
    <div className="flex flex-col items-center gap-4">

      <h3 className="text-2xl font-bold mb-2">
        Quick Links
      </h3>

      <div className="flex gap-6 text-lg">

        <span className="hover:scale-110 hover:text-cyan-200 transition-all duration-300 cursor-pointer">
          Dashboard
        </span>

        <span className="hover:scale-110 hover:text-cyan-200 transition-all duration-300 cursor-pointer">
          Analytics
        </span>

        <span className="hover:scale-110 hover:text-cyan-200 transition-all duration-300 cursor-pointer">
          AI Insights
        </span>

      </div>

    </div>

    {/* Right Side */}
    <div className="text-center md:text-right">

     <div className="text-5xl mb-4 animate-bounce">
        🚀
      </div>

      <p className="text-lg font-semibold">

        Built with React + FastAPI

      </p>

      <p className="opacity-80 mt-2">

        © 2026 AI Resume Analyzer

      </p>
      <p className="text-sm text-gray-200 mt-4">
         Developed by Vineet Raj
      </p>
    </div>

  </div>

</footer>


      </div>

        </div>

  
);
}

export default App;