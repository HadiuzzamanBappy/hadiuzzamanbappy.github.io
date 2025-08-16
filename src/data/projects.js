// src/data/projects.js

function shuffleArray(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const projects = shuffleArray([
    {
        "id": "landing-page-cryptowire-cryptocurrency",
        "title": "Landing Page : CryptoWire - Cryptocurrency",
        "category": "UI/UX Design",
        "previewImage": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/744b95135767829.61eddce599f63.jpg",
        "tags": ["UI/UX", "Interaction Design", "Graphic Design"],
        "description": "A landing page for a platform to buy and sell cryptocurrency and NFT products.",
        "previewUrl": "https://www.behance.net/gallery/135767829/Landing-Page-CryptoWire-Cryptocurrency",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "case-study-bookmore-buy-sell-and-share-book",
        "title": "Case Study : Bookmore - Buy, Sell and Share book",
        "category": "UI/UX Design",
        "previewImage": "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7eab68142361495.6265c7c04e9fe.jpg",
        "tags": ["UI/UX", "Web Design", "Interaction Design"],
        "description": "An online shop for buying, selling, and exchanging books within a local radius.",
        "previewUrl": "https://www.behance.net/gallery/142361495/Case-Study-Bookmore-Buy-Sell-and-Share-book",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "logo-design-cryptowire-cryptocurrency",
        "title": "Logo Design : CryptoWire - Cryptocurrency",
        "category": "Others",
        "previewImage": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/280345134145281.61cf0b18bf3ce.jpg",
        "tags": ["Branding", "Graphic Design", "Industrial Design"],
        "description": "Logo design for a platform facilitating cryptocurrency and NFT transactions.",
        "previewUrl": "https://www.behance.net/gallery/134145281/Logo-Design-CryptoWire-Cryptocurrency",
        "links": {
            "figma": ""
        }
    },
    {
        "id": "landing-page-tfl-tech-fusion-limited",
        "title": "Landing Page : TFL - Tech Fusion Limited",
        "category": "UI/UX Design",
        "previewImage": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b3178f133577211.61c0ee3218e52.jpg",
        "tags": ["Web Design", "UI/UX", "Graphic Design"],
        "description": "A minimalist logo and landing page design for a new tech trading company.",
        "previewUrl": "https://www.behance.net/gallery/133577211/Landing-Page-TFL-Tech-Fusion-Limited",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "properties-buy-sell-app-screen",
        "title": "Properties Buy/Sell App Screen",
        "category": "UI/UX Design",
        "previewImage": "https://cdn.dribbble.com/userupload/35197190/file/original-068ae59b58b419557926f8eb26e0b662.jpg?resize=1024x728&vertical=center",
        "tags": ["Figma", "Mobile Screen"],
        "description": "An application screen for browsing, filtering, and viewing property listings.",
        "previewUrl": "https://dribbble.com/shots/17359768-Properties-Buy-Sell-App-Screen",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "e-home-app-explore",
        "title": "E-Home App : Explore",
        "category": "UI/UX Design",
        "previewImage": "https://cdn.dribbble.com/userupload/35197024/file/original-3cf00daef5efcb61ee2aa9786a2b7f35.jpg?resize=1024x728&vertical=center",
        "tags": ["Figma", "Mobile Screen"],
        "description": "A dark-themed dashboard for controlling smart home devices.",
        "previewUrl": "https://dribbble.com/shots/17359709-E-Home-App-Explore",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "crystal-app-login-signup",
        "title": "Crystal App : login/signup",
        "category": "UI/UX Design",
        "previewImage": "https://cdn.dribbble.com/userupload/35196998/file/original-eac3ae4b6011fe8535c07b0854939449.jpg?resize=1024x728&vertical=center",
        "tags": ["Figma", "Mobile Screen"],
        "description": "Vibrant red-themed login and sign-up screens for a mobile application.",
        "previewUrl": "https://dribbble.com/shots/17359690-Crystal-App-login-signup",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "cryptowire-app-login-signup",
        "title": "CryptoWire App Login/Signup",
        "category": "UI/UX Design",
        "previewImage": "https://cdn.dribbble.com/userupload/35196937/file/original-47853cc7a78b383ef529317d548bdc8a.jpg?resize=1024x744&vertical=center",
        "tags": ["Figma", "Mobile Screen"],
        "description": "Sleek and dark-themed login and sign-up screens for a cryptocurrency app.",
        "previewUrl": "https://dribbble.com/shots/17359670-CryptoWire-App-Login-Signup",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
    {
        "id": "personal-portfolio-website",
        "title": "Personal Portfolio Website",
        "category": "Web Development",
        "previewImage": "https://raw.githubusercontent.com/HadiuzzamanBappy/hadiuzzamanbappy.github.io/main/public/images/demo/home.png",
        "tags": ["Vercel", "Deployment", "Portfolio", "React"],
        "description": "A personal portfolio website deployed on Vercel to showcase projects and skills.",
        "previewUrl": "https://hbappydesign.vercel.app",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/hadiuzzamanbappy.github.io",
            "vercel": "https://hbappydesign.vercel.app"
        }
    },
    {
        "id": "developers-multi-tool-dashboard",
        "title": "Developer's Multi-Tool Dashboard",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Dev-Tools/raw/main/res/img/image.png",
        "tags": ["JavaScript", "CSS", "Developer Tools", "Dashboard"],
        "description": "An all-in-one toolkit dashboard designed for frontend developers and designers.",
        "previewUrl": "https://dev-tools-bro.vercel.app",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Dev-Tools",
            "vercel": "https://dev-tools-bro.vercel.app"
        }
    },
    {
        "id": "dynamic-currency-converter",
        "title": "Dynamic Currency Converter",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Currency-Converter/raw/master/res/img/image.png",
        "tags": ["JavaScript", "CSS", "HTML", "API"],
        "description": "A web app that fetches real-time exchange rates to convert between currencies.",
        "previewUrl": "https://currency-convert-bro.vercel.app",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Currency-Converter",
            "vercel": "https://currency-convert-bro.vercel.app"
        }
    },
    {
        "id": "advanced-font-previewer",
        "title": "Advanced Font Previewer",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Font-Previewer/raw/main/res/image/image.png",
        "tags": ["JavaScript", "HTML", "CSS", "Google Fonts API"],
        "description": "A web app for designers and developers to discover and compare Google Fonts.",
        "previewUrl": "https://font-previewer-bro.vercel.app",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Font-Previewer",
            "vercel": "https://font-previewer-bro.vercel.app"
        }
    },
    {
        "id": "neomorphic-markdown-previewer",
        "title": "Neomorphic Markdown Previewer",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Markdown-Previewer/raw/main/res/image/image.png",
        "tags": ["CSS", "JavaScript", "HTML", "Neomorphic"],
        "description": "A stylish, real-time Markdown editor with a side-by-side preview.",
        "previewUrl": "",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Markdown-Previewer",
            "vercel": ""
        }
    },
    {
        "id": "cleancoder-website",
        "title": "CleanCoder Website",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Clean-Coder/raw/main/res/image/image.png",
        "tags": ["JavaScript", "CSS", "HTML", "Developer Tools"],
        "description": "A suite of free developer tools, including formatters, minifiers, and code converters.",
        "previewUrl": "",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Clean-Coder",
            "vercel": ""
        }
    },
    {
        "id": "asset-bundler",
        "title": "Asset Bundler",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Asset-Bundle-Web/raw/main/assets/image/image.png",
        "tags": ["JavaScript", "HTML", "CSS", "Client-side Tools"],
        "description": "A lightweight, client-side tool for combining and minifying JS and CSS in the browser.",
        "previewUrl": "",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Asset-Bundle-Web",
            "vercel": ""
        }
    },
    {
        "id": "unit-converter",
        "title": "Unit Converter",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Unit-Converter/raw/main/res/image/image.png",
        "tags": ["JavaScript", "CSS", "HTML", "Bootstrap"],
        "description": "A responsive unit converter with light/dark modes and real-time conversions.",
        "previewUrl": "",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Unit-Converter",
            "vercel": ""
        }
    },
    {
        "id": "color-craft-color-palette-generator",
        "title": "Color Craft - Color Palette Generator",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Color-Craft/raw/main/public/images/image.png",
        "tags": ["TypeScript", "React", "Vite", "Tailwind CSS"],
        "description": "A modern color palette generator built with Vite, React, and TypeScript.",
        "previewUrl": "https://color-craft-hb.vercel.app/",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Color-Craft",
            "vercel": "https://color-craft-hb.vercel.app/"
        }
    },
    {
        "id": "scasl-frontend-development-project",
        "title": "SCASL - Frontend Development Project",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/SCASL/raw/main/assets/img/demo.png",
        "tags": ["HTML", "CSS", "SCSS", "JavaScript"],
        "description": "A professional services frontend project with clean navigation and responsive design.",
        "previewUrl": "https://scasl-iota.vercel.app/",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/SCASL",
            "vercel": "https://scasl-iota.vercel.app/"
        }
    },
    {
        "id": "todo-management-system",
        "title": "Todo Management System",
        "category": "Web Development",
        "previewImage": "https://github.com/HadiuzzamanBappy/Todo-Management/raw/master/uploads/demo/admin.png",
        "tags": ["Java", "Spring Boot", "HTML", "JavaScript"],
        "description": "A robust Todo Management System with role-based access control and notifications.",
        "previewUrl": "https://github.com/HadiuzzamanBappy/Todo-Management",
        "links": {
            "github": "https://github.com/HadiuzzamanBappy/Todo-Management",
            "vercel": ""
        }
    }
]);

export const archivedProjects = [
    {
        "id": "gotravel-app-onboard-to-explore",
        "title": "GoTravel App : Onboard to Explore",
        "category": "UI/UX Design",
        "previewImage": "https://cdn.dribbble.com/userupload/35197113/file/original-346810f091f7f5c63c3d3ad0a7778951.jpg?resize=1024x700&vertical=center",
        "tags": ["Figma", "Mobile Screen"],
        "description": "Onboarding, login, and registration screens for a travel application.",
        "previewUrl": "https://dribbble.com/shots/17359757-GoTravel-App-Onboard-to-Explore",
        "links": {
            "github": "",
            "vercel": ""
        }
    },
]