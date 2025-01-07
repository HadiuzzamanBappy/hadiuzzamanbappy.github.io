
# Portfolio Project - README

## Project Overview
This is a personal portfolio project designed and developed by me, a UI/UX designer and developer. The portfolio showcases my personal details, skills, education, experience, portfolio items, and testimonials. The project is implemented in three versions:

1. **Raw HTML Version**: A static version containing only the portfolio details.
2. **JavaScript Version**: Includes admin functionality with CRUD (Create, Read, Update, Delete) operations for all sections except skills. Data is stored in a JSON file.
3. **PHP Version**: Similar to the JavaScript version but implemented with PHP for handling admin functionality and CRUD operations, with data stored in a JSON file.

---

## Features

### User Interface:
- Personal Details Section
- Skills Section
- Education Section
- Experience Section
- Portfolio Section
- Testimonials Section
### Admin Functionality (JS and PHP Versions):
- **CRUD Operations**:
  - Add, edit, and delete items for:
    - Education
    - Experience
    - Portfolio
    - Testimonials
  - Skills section remains static without CRUD functionality.
- **JSON as Database**:
  - All dynamic data is stored and managed through a JSON file.

---

## Technology Stack
- **Raw Version**: HTML, CSS
- **JS Version**: HTML, CSS, JavaScript
- **PHP Version**: HTML, CSS, PHP
- **Database**: JSON files for all versions

---

## Repository Structure
- `raw-html`: Contains the static HTML version of the portfolio.
- `js-version`: Contains the JavaScript version with admin CRUD functionality.
- `php-version`: Contains the PHP version with admin CRUD functionality.
- `main`: The primary branch, which alternates content between the three versions as needed.

---

## Process to Switch Versions

### Goal:
Update the `main` branch with the content of different versions (`raw-html`, `js-version`, `php-version`) while preserving all branch data.

### Steps:

#### 1. **Update `js-version` with the Current `main` Data**
To ensure that `js-version` has the latest updates from the `main` branch:

git checkout js-version
git merge main
git push origin js-version

#### 2. **Replace `main` with `raw-html`**
To replace the `main` branch content with the `raw-html` branch:

git checkout raw-html
git checkout main
git reset --hard raw-html
git push origin main --force

---

## Notes
- Use `git fetch --all` before any operation to ensure your local repository is up to date.
- Be cautious when using `git reset --hard` and `--force` as these commands overwrite data.
- All three branches (`raw-html`, `js-version`, `php-version`) are preserved for future modifications.

---

## License
This project is for personal use only and is not licensed for distribution or commercial purposes.
