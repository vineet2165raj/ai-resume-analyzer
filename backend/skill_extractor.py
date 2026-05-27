import re
from skills import SKILLS_DB

def extract_skills(text):

    text = text.lower()

    # Remove special characters
    text = re.sub(r'[^a-zA-Z0-9+# ]', ' ', text)

    # Split into words
    words = text.split()

    found_skills = []

    for skill in SKILLS_DB:

        skill_lower = skill.lower()

        # Multi-word skill
        if " " in skill_lower:

            if skill_lower in text:
                found_skills.append(skill)

        # Single-word skill
        else:

            if skill_lower in words:
                found_skills.append(skill)

    return list(set(found_skills))