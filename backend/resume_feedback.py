# resume_feedback.py

def generate_resume_feedback(
    ats_score,
    missing_skills,
    matched_skills
):

    feedback = []

    # ATS Score Feedback
    if ats_score < 40:

        feedback.append(
            "Your resume has a low ATS score. Add more relevant technical skills."
        )

    elif ats_score < 70:

        feedback.append(
            "Your resume is moderately optimized. Improve project descriptions and add more role-specific skills."
        )

    else:

        feedback.append(
            "Excellent ATS score. Your resume matches the job role very well."
        )

    # Missing Skills Suggestions
    if len(missing_skills) > 0:

        feedback.append(
            f"Consider adding these important skills: {', '.join(missing_skills[:5])}."
        )

    # Matched Skills Encouragement
    if len(matched_skills) > 0:

        feedback.append(
            "Your existing technical skills are strong and relevant for the selected role."
        )

    # Resume Writing Suggestions
    feedback.append(
        "Add measurable achievements and project impact using numbers and metrics."
    )

    feedback.append(
        "Include GitHub, LinkedIn, or portfolio links for stronger visibility."
    )

    feedback.append(
        "Improve resume formatting with clear section headings and concise bullet points."
    )

    feedback.append(
        "Add certifications or internships relevant to your target role."
    )

    return feedback