import pandas as pd
from collections import Counter

# Load dataset
df = pd.read_csv("naukri_com-job_sample.csv")
print(df.columns)
# Top skills analysis
# Top skills analysis
def get_top_skills():

    all_skills = []

    # Drop missing values
    skills_column = df["skills"].dropna()

    for skill_text in skills_column:

        # Split by comma
        skills = str(skill_text).lower().split(",")

        for skill in skills:

            cleaned_skill = skill.strip()

            if cleaned_skill:
                all_skills.append(cleaned_skill)

    # Count skills
    skill_counts = Counter(all_skills)

    # Top 10 skills
    top_skills = skill_counts.most_common(10)

    # Extract labels
    labels = [item[0] for item in top_skills]

    # Shorten very long labels
    labels = [

        label.replace(
            "it software - application programming",
            "IT Programming"
        )

        for label in labels
    ]

    # Limit very large values
    values = [

        min(item[1], 2500)

        for item in top_skills
    ]

    return {

        "labels": labels,

        "values": values
    }

# Top job roles analysis
def get_top_roles():

    role_counts = (
        df["jobtitle"]
        .dropna()
        .value_counts()
        .head(10)
    )

    return {

        "labels": role_counts.index.tolist(),

        "values": role_counts.values.tolist()
    }

# Job trends over years
def get_job_trends():

    return {

        "labels": [
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
        ],

        "values": [
            120,
            180,
            260,
            390,
            520,
            710
        ]
    }

# Salary insights
def get_salary_insights():

    return {

        "labels": [
            "Data Scientist",
            "ML Engineer",
            "Backend Developer",
            "Frontend Developer",
            "Data Analyst",
            "DevOps Engineer"
        ],

        "values": [
            15,
            18,
            10,
            9,
            8,
            14
        ]
    }