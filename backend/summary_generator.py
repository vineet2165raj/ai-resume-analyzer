def generate_summary(
    job_role,
    ats_score,
    matched_skills,
    missing_skills
):

    summary = ""

    # Strong profile
    if ats_score >= 70:

        summary += (
            f"Your resume is strongly aligned with the "
            f"{job_role} role. "
        )

    # Medium profile
    elif ats_score >= 40:

        summary += (
            f"Your resume partially matches the "
            f"{job_role} role. "
        )

    # Weak profile
    else:

        summary += (
            f"Your resume currently has a low match "
            f"for the {job_role} role. "
        )

    # Add matched skills
    if matched_skills:

        matched = ", ".join(matched_skills)

        summary += (
            f"You demonstrate skills in {matched}. "
        )

    # Add missing skills
    if missing_skills:

        missing = ", ".join(missing_skills)

        summary += (
            f"However, you should improve skills like "
            f"{missing} to increase your ATS score."
        )

    return summary