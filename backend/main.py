
# Complete `backend/main.py`

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from recommendation_engine import generate_recommendations
from summary_generator import generate_summary
from career_suggestions import suggest_careers
from job_roles import JOB_ROLES
from analytics import get_top_skills
from analytics import get_top_skills, get_top_roles
import shutil
import os
from learning_roadmap import generate_learning_roadmap
from resume_feedback import generate_resume_feedback
from fastapi.middleware.cors import CORSMiddleware
from resume_parser import (
    extract_text_from_pdf,
    extract_text_from_docx
)

from analytics import (
    get_top_skills,
    get_top_roles,
    get_job_trends
)

from analytics import (
    get_top_skills,
    get_top_roles,
    get_job_trends,
    get_salary_insights
)

from skill_extractor import extract_skills

from ats_score import calculate_ats_score

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "../uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


# Home route
@app.get("/")
def home():
    return {"message": "Backend connected successfully"}
#Job Route
@app.get("/job-roles")
def get_job_roles():

    return {
        "roles": list(JOB_ROLES.keys())
    }
# Top skill
@app.get("/top-skills")
def top_skills():

    return get_top_skills()

#top-roles
@app.get("/top-roles")
def top_roles():

    return get_top_roles()

#job-trends
@app.get("/job-trends")
def job_trends():

    return get_job_trends()

#salary-insights
@app.get("/salary-insights")
def salary_insights():

    return get_salary_insights()

# Upload route
@app.post("/upload")
async def upload_resume(

    job_role: str = Form(...),
    file: UploadFile = File(...)

):
    

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    # Allowed file types
    allowed_extensions = [".pdf", ".docx"]

    file_extension = os.path.splitext(file.filename)[1].lower()

    if file_extension not in allowed_extensions:

        return {
            "message": "Only PDF and DOCX files are allowed"
        }

    # Save uploaded file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = ""

    try:

        # PDF extraction
        if file.filename.endswith(".pdf"):
            extracted_text = extract_text_from_pdf(file_path)

        # DOCX extraction
        elif file.filename.endswith(".docx"):
            extracted_text = extract_text_from_docx(file_path)

    except Exception as e:

        return {
            "message": f"Error processing file: {str(e)}"
        }

    # Extract skills
    skills = extract_skills(extracted_text)

    # ATS Score
    ats_result = calculate_ats_score(skills, job_role)

    # Recommendations
    recommendations = generate_recommendations(
        ats_result["missing_skills"]
    )

    # Summary
    summary = generate_summary(
        job_role,
        ats_result["score"],
        ats_result["matched_skills"],
        ats_result["missing_skills"]
    )

    # Career paths
    career_paths = suggest_careers(skills)

    learning_roadmap = generate_learning_roadmap(
    ats_result["missing_skills"]
)

    resume_feedback = generate_resume_feedback(
    ats_result["score"],
    ats_result["missing_skills"],
    ats_result["matched_skills"]
)
    return {

        "filename": file.filename,

        "message": "Resume uploaded successfully",

        "resume_text": extracted_text,

        "skills": skills,

        "ats_score": ats_result["score"],

        "matched_skills": ats_result["matched_skills"],

        "missing_skills": ats_result["missing_skills"],

        "recommendations": recommendations,

        "summary": summary,

        "strengths": ats_result["matched_skills"],

        "weaknesses": ats_result["missing_skills"],

        "career_paths": career_paths,

        "learning_roadmap": learning_roadmap,

        "resume_feedback": resume_feedback,
    }