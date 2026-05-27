import React from "react";
import { motion } from "framer-motion";

import {
  TrendingUp,
  BarChart3,
  BriefcaseBusiness,
  IndianRupee,
} from "lucide-react";

import {
  Bar,
  Line,
  PolarArea,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const AnalyticsSection = ({
  darkMode,
  topSkillsChartData,
  topRolesChartData,
  jobTrendsChartData,
  salaryChartData,
}) => {

  return (

    <div>

    {/* Analytics Carousel */}

{/* Top Skills Demand in Market*/}
<div className="mt-12 w-full overflow-x-auto scrollbar-hide">

  <div className="flex gap-6 pb-4 snap-x snap-mandatory">

 <div
  

  className={`${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-black"}
    relative
    overflow-hidden
    group
    min-w-[90vw] md:min-w-[650px] max-w-[650px]
    snap-center
    p-8
    rounded-3xl
    shadow-xl
    hover:shadow-cyan-400/40
    hover:shadow-2xl
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:ring-2
    hover:ring-cyan-400/40
    transition-all
    duration-500`}
>

{/* AI Hover Loader Effect */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border-t-4 border-cyan-400 rounded-full animate-spin-slow opacity-20"></div>

</div>

{/* Premium Glow Hover */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 blur-2xl animate-pulse"></div>

</div>

    <div className="flex items-center gap-3 mb-8">

  <BarChart3 className="w-10 h-10 text-indigo-600" />

  <h2 className="text-3xl font-bold text-indigo-600">
    Top Skills Demand in Market
  </h2>

</div>

    <div className="h-[450px] flex items-center justify-center">

      <Bar
        data={topSkillsChartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              labels: {
                color: darkMode ? "white" : "black",
              },
            },
          },

          scales: {

            x: {
              ticks: {
                color: darkMode ? "white" : "black",
                maxRotation: 25,
                minRotation: 25,
              },
            },

            y: {
              ticks: {
                color: darkMode ? "white" : "black",
              },
            },

          },

        }}
      />

    </div>

    

  </div>


{/* Top Hiring Roles in Market */}

<div
 

  className={`${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-black"}
    relative
    overflow-hidden
    group
    min-w-[90vw] md:min-w-[650px] max-w-[650px]
    snap-center
    p-8
    rounded-3xl
    shadow-xl
    hover:shadow-cyan-400/40
    hover:shadow-2xl
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:ring-2
    hover:ring-cyan-400/40
    transition-all
    duration-500`}
>

  {/* AI Hover Loader Effect */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border-t-4 border-cyan-400 rounded-full animate-spin-slow opacity-20"></div>

</div>

  {/* Premium Glow Hover */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 blur-2xl animate-pulse"></div>

</div>

  <div className="flex items-center gap-3 mb-8">

  <BriefcaseBusiness className="w-10 h-10 text-blue-600" />

  <h2 className="text-3xl font-bold text-blue-600">
    Top Hiring Roles in Market
  </h2>

</div>

<div className="h-[450px] flex items-center justify-center">

  <PolarArea
    data={topRolesChartData}
    options={{
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          position: "bottom",

          labels: {
            color: darkMode ? "white" : "black",

            boxWidth: 12,
            padding: 15,

            font: {
              size: 11,
            },
          },
        },
      },
    }}
  />

</div>

</div>


{/* Job Market Growth Trends */}

<div
  

  className={`${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-black"}
    relative
    overflow-hidden
    group
    min-w-[90vw] md:min-w-[650px] max-w-[650px]
    snap-center
    p-8
    rounded-3xl
    shadow-xl
    hover:shadow-cyan-400/40
    hover:shadow-2xl
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:ring-2
    hover:ring-cyan-400/40
    transition-all
    duration-500`}
>

{/* AI Hover Loader Effect */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border-t-4 border-cyan-400 rounded-full animate-spin-slow opacity-20"></div>

</div>

{/* Premium Glow Hover */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 blur-2xl animate-pulse"></div>

</div>

  <div className="flex items-center gap-3 mb-8">

  <TrendingUp className="w-10 h-10 text-cyan-600" />

  <h2 className="text-3xl font-bold text-cyan-600">
    Job Market Growth Trends
  </h2>

</div>

  <div className="h-[400px]">

    <Line
      data={jobTrendsChartData}
      options={{
  responsive: true,
  maintainAspectRatio: false,

  layout: {
    padding: {
      top: 20,
      bottom: 20,
      left: 10,
      right: 10,
    },
  },

  animation: {
    duration: 2000,
    easing: "easeInOutQuart",
  },

  scales: {

  x: {
    title: {
      display: true,
      text: "Year",
      color: darkMode ? "white" : "black",
      font: {
        size: 14,
        weight: "bold",
      },
    },

    ticks: {
      color: darkMode ? "white" : "black",
    },
  },

  y: {
    title: {
      display: true,
      text: "Number of Job Openings",
      color: darkMode ? "white" : "black",
      font: {
        size: 14,
        weight: "bold",
      },
    },

    ticks: {
      color: darkMode ? "white" : "black",
    },
  },

},
}}


    />
    <div className="mt-4"></div>

    <p className="mt-6 text-sm text-gray-500 leading-relaxed">

  The chart shows a consistent rise in AI and technology-related
  job opportunities from 2020 to 2025,
  indicating strong market demand and career growth potential.

</p>

  </div>

</div>

  



{/*  Salary Insights by Job Role*/}

  <div
  
  className={`${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-black"}
    relative
    overflow-hidden
    group
    min-w-[90vw] md:min-w-[650px] max-w-[650px]
    snap-center
    p-8
    rounded-3xl
    shadow-xl
    hover:shadow-cyan-400/40
    hover:shadow-2xl
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:ring-2
    hover:ring-cyan-400/40
    transition-all
    duration-500`}
>
  
{/* AI Hover Loader Effect */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] border-t-4 border-cyan-400 rounded-full animate-spin-slow opacity-20"></div>

</div>

{/* Premium Glow Hover */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">

  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-indigo-400/10 blur-2xl animate-pulse"></div>

</div>

    <div className="flex items-center gap-3 mb-8">

  <IndianRupee className="w-10 h-10 text-green-600" />

  <h2 className="text-3xl font-bold text-green-600">
    Salary Insights
  </h2>

</div>

    <div className="h-[350px]">

      <Bar
  data={salaryChartData}
  options={{
    indexAxis: "y",

    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
    },

    plugins: {
      legend: {
        labels: {
          color: darkMode ? "white" : "black",
        },
      },
    },

    scales: {

      x: {
        ticks: {
          color: darkMode ? "white" : "black",
        },
      },

      y: {
        ticks: {
          color: darkMode ? "white" : "black",
        },
      },

    },

  }}
/>

    </div>

 </div>

  </div>

</div>

    </div>

  );

};

export default AnalyticsSection;