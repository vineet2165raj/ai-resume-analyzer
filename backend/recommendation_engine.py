def generate_recommendations(missing_skills):

    recommendations = []

    for skill in missing_skills:

        recommendations.append(
            f"Learn {skill} to improve your resume."
        )

    return recommendations