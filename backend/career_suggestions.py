def suggest_careers(skills):

    careers = []

    # Data Science
    if (
        "machine learning" in skills or
        "data science" in skills or
        "python" in skills
    ):
        careers.append("Data Scientist")

    # Data Analyst
    if (
        "sql" in skills or
        "excel" in skills or
        "power bi" in skills
    ):
        careers.append("Data Analyst")

    # Web Development
    if (
        "react" in skills or
        "javascript" in skills or
        "html" in skills
    ):
        careers.append("Frontend Developer")

    # Backend
    if (
        "fastapi" in skills or
        "mongodb" in skills or
        "mysql" in skills
    ):
        careers.append("Backend Developer")

    # Default fallback
    if not careers:
        careers.append("General Software Engineer")

    return list(set(careers))