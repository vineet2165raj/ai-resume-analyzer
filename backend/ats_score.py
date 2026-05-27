from job_roles import JOB_ROLES

def calculate_ats_score(resume_skills, job_role):

    required_skills = JOB_ROLES.get(job_role, [])

    matched_skills = []

    missing_skills = []

    for skill in required_skills:

        if skill in resume_skills:
            matched_skills.append(skill)
        else:
            missing_skills.append(skill)

    # ATS score calculation
    score = 0

    if len(required_skills) > 0:
        score = int((len(matched_skills) / len(required_skills)) * 100)

    return {
        "score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }