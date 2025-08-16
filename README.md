# Portfolio - Hadiuzzaman Bappy

This repository contains the source code for my personal portfolio, built from the ground up with a modern, interactive, and component-based architecture using **React**, **Vite**, and **Tailwind CSS**. The project features a host of advanced animations and dynamic functionalities to create an engaging user experience.

▶️ **[View the Live Vercel](https://hadiuzzamanbappy.vercel.app/)**  
▶️ **[View the Live Netlify](https://hadiuzzamanbappy.netlify.app/)**  

![Home Preview](/public/images/demo/home.png)
![Project Preview](/public/images/demo/projects.png)

---

## ✨ Key Features

This project goes beyond a standard portfolio by integrating several advanced features:

- 🌌 **3D Interactive Hero**: Dynamic, rotating 3D starfield background built with `react-three-fiber` and `drei`.
- 🖱️ **Global Custom Cursor**: Animated cursor with hover states for links and project cards, managed globally with React Context.
- 🌓 **Light/Dark Mode**: Theme-aware UI toggle powered by React Context and CSS variables.
- ✒️ **Animated "Typewriter" Text**: Dynamic typing and deleting animation in the hero subtitle.
- 🧱 **Masonry Project Grid**: Fully responsive, animated layout for projects with Tailwind CSS and Framer Motion.
- 📧 **Functional Contact Form**: Sends emails using EmailJS, with validation and feedback states.
- 🌐 **3D Skills Sphere**: Interactive, zoomable, auto-rotating skill visualization.
- 🚀 **Advanced Animations**: Scroll-triggered reveals, layout transitions, and interactive effects via Framer Motion.

---

## 🛠️ Tech Stack

| Category         | Technology |
|------------------|------------|
| **Core**         | React, Vite, Tailwind CSS |
| **Animation**    | Framer Motion, React Three Fiber |
| **State**        | React Context API |
| **Icons**        | React Icons |
| **Services**     | EmailJS |
| **Deployment**   | Vercel / Netlify |

---

## 📂 Project Structure

```
MY-PORTFOLIO/
├── public/
│   ├── images/       # Images for the Skills Sphere
│   ├── icons/        # SVG icons for the Skills Sphere
│   └── pdf/          # Resume file for download
├── src/
│   ├── components/
│   │   ├── common/   # Reusable components (ThemeToggle, etc.)
│   │   ├── home/     # Home page components
│   │   └── projects/ # Projects page components
│   ├── context/      # Global state management (ThemeContext, CursorContext)
│   ├── data/         # Static data (projects.js)
│   ├── pages/        # Main pages (Home.jsx, ProjectsPage.jsx)
│   ├── App.jsx       # Main app shell with routing
│   ├── index.css     # Global styles & Tailwind directives
│   └── main.jsx      # Entry point
├── .env              # Environment variables
└── vite.config.js    # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/HadiuzzamanBappy/Portfolio
cd Portfolio
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**  
Create a `.env` file in the project root with your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

> You must create an EmailJS account, add a service (e.g., Gmail), create a template, and get your public key.

4.  **Start the Development Server**

```bash
npm run dev
```

Visit: [http://localhost:port](http://localhost:port)

5. **Build for Production**

```bash
npm run build
```

This generates the `dist/` folder for deployment.

---

## 📜 License

This project is licensed under the MIT License.
