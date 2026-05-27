# learning_roadmap.py

def generate_learning_roadmap(missing_skills):

    roadmap = []

    skill_map = {

        "python": [
            "Learn Python Basics",
            "Practice Python Projects",
        ],

        "numpy": [
            "Learn NumPy Arrays",
            "Practice Numerical Computing",
        ],

        "pandas": [
            "Learn Pandas DataFrames",
            "Practice Data Cleaning",
        ],

        "machine learning": [
            "Learn ML Algorithms",
            "Practice Scikit-Learn",
        ],

        "deep learning": [
            "Learn Neural Networks",
            "Study Deep Learning Concepts",
        ],

        "tensorflow": [
            "Learn TensorFlow Basics",
            "Build Deep Learning Projects",
        ],

        "sql": [
            "Learn SQL Queries",
            "Practice Database Operations",
        ],

        "power bi": [
            "Learn Power BI Dashboards",
            "Create Visualization Projects",
        ],

        "excel": [
            "Learn Excel Functions",
            "Practice Data Analysis in Excel",
        ],
    }

    for skill in missing_skills:

        skill_lower = skill.lower()

        if skill_lower in skill_map:

            roadmap.extend(skill_map[skill_lower])

    # Remove duplicates
    roadmap = list(dict.fromkeys(roadmap))

    return roadmap