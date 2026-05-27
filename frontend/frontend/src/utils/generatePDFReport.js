import jsPDF from "jspdf";

import html2canvas from "html2canvas";




const downloadReport = async ({
  atsScore,
  jobRole,
  matchedSkills,
  missingSkills,
  recommendations,
  summary,
  file,
}) => {

  const doc = new jsPDF();

// Capture Pie Chart
const chartElement = document.getElementById(
  "skillsPieChart"
);

if (!chartElement) {

  alert("Pie chart not found");

  return;
}

const canvas = await html2canvas(chartElement);

const chartImage = canvas.toDataURL("image/png");


  // =========================
  // HEADER SECTION
  // =========================

  // Header Background
  doc.setFillColor(37, 99, 235);

  doc.rect(0, 0, 210, 35, "F");

  // Title
  doc.setTextColor(255, 255, 255);

  doc.setFontSize(24);

  doc.text("AI Resume Analyzer Report", 20, 20);

  // Subtitle
  doc.setFontSize(12);

  doc.text(
    "Generated AI Career Insights Report",
    20,
    30
  );

  const today = new Date().toLocaleDateString();

doc.setFontSize(10);

doc.text(
  `Generated on: ${today}`,
  20,
  42
);



  // Add Pie Chart
doc.addImage(
  chartImage,
  "PNG",
  55,
  100,
  100,
  100
);

  // =========================
  // SELECTED ROLE
  // =========================

  doc.setFontSize(14);

  doc.text(
    `Selected Role: ${jobRole}`,
    20,
    190
  );
  
// =========================
// ATS SCORE SECTION
// =========================

// ATS Card Background
doc.setFillColor(219, 234, 254);

doc.roundedRect(
  15,
  55,
  180,
  35,
  6,
  6,
  "F"
);

// ATS Title
doc.setTextColor(37, 99, 235);

doc.setFontSize(20);

doc.text(
  `ATS Match Score: ${atsScore}%`,
  25,
  72
);

// Performance Label
let performanceLabel = "";

if (atsScore >= 70) {

  performanceLabel = "Excellent Resume Match";

}

else if (atsScore >= 40) {

  performanceLabel = "Moderate Resume Match";

}

else {

  performanceLabel = "Resume Needs Improvement";

}

doc.setFontSize(12);

doc.setTextColor(90);

doc.text(
  performanceLabel,
  25,
  82
);

  // =========================
  // MATCHED SKILLS
  // =========================

  doc.setFillColor(220, 252, 231);

  doc.roundedRect(15, 200, 180, 25, 5, 5, "F");

  doc.setTextColor(22, 163, 74);

  doc.setFontSize(16);

  doc.text("Matched Skills", 20, 215);

  doc.setTextColor(0, 0, 0);

  doc.setFontSize(12);

  doc.text(
    matchedSkills.join(", "),
    20,
    223,
    {
      maxWidth: 170,
    }
  );

  // =========================
  // MISSING SKILLS
  // =========================

  doc.setFillColor(254, 226, 226);

  doc.roundedRect(15, 240, 180, 30, 5, 5, "F");

  doc.setTextColor(220, 38, 38);

  doc.setFontSize(16);

  doc.text("Missing Skills", 20, 255);

  doc.setTextColor(0, 0, 0);

  doc.setFontSize(12);

  doc.text(
    missingSkills.join(", "),
    20,
    265,
    {
      maxWidth: 170,
    }
  );
  //-----------
  // End Page 1
  //-----------
  doc.text("Page 1", 180, 290);

  doc.addPage();



  // Second Page Header
doc.setFillColor(37, 99, 235);

doc.rect(0, 0, 210, 25, "F");

doc.setTextColor(255, 255, 255);

doc.setFontSize(20);

doc.text(
  "Resume Insights & Preview",
  20,
  17
);

doc.setTextColor(0, 0, 0);

  // =========================
  // AI SUMMARY
  // =========================

  doc.setFillColor(239, 167, 175);

  doc.roundedRect(15, 225, 180, 40, 5, 5, "F");

  doc.setTextColor(37, 99, 235);

  doc.setFontSize(16);

  doc.text("AI Resume Analysis", 20, 238);

  doc.setTextColor(0, 0, 0);

  doc.setFontSize(11);

  doc.text(
    summary,
    20,
    248,
    {
      maxWidth: 170,
    }
  );

  // =========================
  // FOOTER
  // =========================

  doc.setFontSize(10);

  doc.setTextColor(120);
  // Resume Preview Box
  doc.setFillColor(245, 245, 245);

  doc.roundedRect(
  15,
  35,
  180,
  110,
  5,
  5,
  "F"
  );

  // Resume Snapshot Card

doc.setFillColor(255, 255, 255);

doc.roundedRect(
  25,
  45,
  160,
  90,
  5,
  5,
  "F"
);

// Card Title
doc.setTextColor(37, 99, 235);

doc.setFontSize(18);

doc.text(
  "Resume Snapshot",
  35,
  60
);

// File Name
doc.setTextColor(0, 0, 0);

doc.setFontSize(12);

doc.text(
  `File: ${file?.name || "resume.pdf"}`,
  35,
  80
);

// Role
doc.text(
  `Target Role: ${jobRole}`,
  35,
  95
);

// ATS Score
doc.text(
  `ATS Score: ${atsScore}%`,
  35,
  110
);

// Status
doc.setTextColor(22, 163, 74);

doc.text(
  "AI Analysis Completed Successfully",
  35,
  125
);

// =========================
// AI RECOMMENDATIONS
// =========================

doc.setTextColor(37, 99, 235);

doc.setFontSize(18);

doc.text(
  "AI Recommendations",
  20,
  165
);

doc.setTextColor(0, 0, 0);

doc.setFontSize(12);

recommendations.forEach((rec, index) => {

  doc.text(
    `• ${rec}`,
    25,
    178 + (index * 10)
  );

});

  doc.text(
    "Generated using AI Resume Analyzer Platform",
    50,
    290
  );
doc.text("Page 2", 180, 290);
  // Save PDF
  doc.save("resume-analysis-report.pdf");

};export default downloadReport;


