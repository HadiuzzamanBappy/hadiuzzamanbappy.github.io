/**
 * Randomizes array order using Fisher-Yates shuffle algorithm
 * Ensures different project order on each page load for varied content display
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Featured Projects
 * 
 * Highlighted projects displayed prominently on the home page.
 * Order randomized on each load to showcase different work.
 */
export const featuredProjects = shuffleArray([
  { id: "landing-page-cryptowire-cryptocurrency" },
  { id: "case-study-bookmore-buy-sell-and-share-book" },
  { id: "upwork-co-pilot" },
  { id: "zepto-admin-dashboard" },
]);

/**
 * Main Projects Collection
 * 
 * Complete portfolio of projects including UI/UX designs, web development,
 * and various digital solutions. Each project includes metadata, preview images,
 * and external links. Order randomized for dynamic content presentation.
 */
export const projects = shuffleArray([
  {
    id: "landing-page-cryptowire-cryptocurrency",
    title: "Landing Page : CryptoWire - Cryptocurrency",
    category: "UI/UX Design",
    previewImage:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/744b95135767829.61eddce599f63.jpg",
    tags: ["UI/UX", "Interaction Design", "Graphic Design"],
    description:
      "A landing page for a platform to buy and sell cryptocurrency and NFT products.",
    linkType: "external", //internal, external
    url: "https://www.behance.net/gallery/135767829/Landing-Page-CryptoWire-Cryptocurrency",
    links: {
      behance: "https://www.behance.net/gallery/135767829/Landing-Page-CryptoWire-Cryptocurrency",
      figma: "https://www.figma.com/proto/VG1gKDaeaZQFxByAnNOaI4?node-id=23-1743&t=FTs8ORBsqndIqkIT-6",
    },
  },
  {
    "id": "zepto-admin-dashboard",
    "title": "Zepto - Admin Dashboard",
    "category": "Web Development",
    "previewImage": "https://github.com/HadiuzzamanBappy/Asset/blob/main/Zepto/Preview/01_preview.png?raw=true",
    "tags": ["React", "Next.js", "Tailwind CSS", "Dashboard"],
    "description": "A dynamic and responsive web development dashboard hosted on Vercel, featuring real-time data visualization and management tools.",
    "linkType": "external",
    "url": "https://zepto-dashboard.vercel.app/",
    "links": {
      "behance": "",
    }
  },
  {
    id: "case-study-bookmore-buy-sell-and-share-book",
    title: "Case Study : Bookmore - Buy, Sell and Share book",
    category: "UI/UX Design",
    previewImage:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/7eab68142361495.6265c7c04e9fe.jpg",
    tags: ["UI/UX", "Web Design", "Interaction Design"],
    description:
      "An online shop for buying, selling, and exchanging books within a local radius.",
    linkType: "external",
    url: "https://www.behance.net/gallery/142361495/Case-Study-Bookmore-Buy-Sell-and-Share-book",
    links: {
      behance: "https://www.behance.net/gallery/142361495/Case-Study-Bookmore-Buy-Sell-and-Share-book",
      figma: "https://www.figma.com/proto/BO6yQgX4gLG44XnSl00BCf/App---Bookmore?page-id=7%3A574&node-id=193-10264&p=f&viewport=470%2C557%2C0.07&t=7seUEC3jeyFjEpBX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=193%3A13804&show-proto-sidebar=1",
    },
  },
  {
    id: "ux-copywriter",
    title: "UX Copywriter",
    category: "Others",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Asset/blob/main/ux-copwriter/img/Cover.jpg?raw=true",
    tags: ["AI", "UX Writing", "Automation", "Figma Plugin", "Copy Generation"],
    description:
      "AI-powered Figma plugin to generate, translate and batch-edit copy and layer names — ideal for UX writing workflows.",
    linkType: "external",
    url:
      "https://www.figma.com/files/team/1038837779447989609/resources/community/plugin/1576517029594781870?fuid=1038837773937582450",
    links: {
      figma: "https://www.figma.com/files/team/1038837779447989609/resources/community/plugin/1576517029594781870?fuid=1038837773937582450"
    }
  },
  {
    id: "upwork-co-pilot",
    title: "Upwork Co-Pilot",
    category: "Others",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Asset/blob/main/UPilot/Promotional.jpg?raw=true",
    tags: ["AI", "Freelancer Tools", "Upwork", "Automation", "Chrome Extension"],
    description:
      "AI-powered assistant for Upwork freelancers: analyze jobs, optimize profiles, and generate smarter proposals in one click.",
    linkType: "external",
    url: "http://upworkcopilot.com/",
    links: {
      website: "https://chromewebstore.google.com/detail/upilot-upwork-co-pilot/olambebifobkbkhocophifjcmkcfjloj?hl=en&authuser=0"
    }
  },
  {
    id: "landing-page-tfl-tech-fusion-limited",
    title: "Landing Page : TFL - Tech Fusion Limited",
    category: "UI/UX Design",
    previewImage:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b3178f133577211.61c0ee3218e52.jpg",
    tags: ["Web Design", "UI/UX", "Graphic Design"],
    description:
      "A minimalist logo and landing page design for a new tech trading company.",
    linkType: "external",
    url: "https://www.behance.net/gallery/133577211/Landing-Page-TFL-Tech-Fusion-Limited",
    links: {
      behance: "https://www.behance.net/gallery/133577211/Landing-Page-TFL-Tech-Fusion-Limited",
      figma: "https://www.figma.com/proto/HHBmz5HG5S1rJvfepszEUO/Landing-page---TFL---Tech-Fusion-Limited?page-id=501%3A1022&node-id=501-1023&viewport=483%2C40%2C0.19&t=m5oSTSMIAZmCKMLC-1&scaling=min-zoom&content-scaling=fixed",
    },
  },
  {
    id: "properties-buy-sell-app-screen",
    title: "Properties Buy/Sell App Screen",
    category: "UI/UX Design",
    previewImage:
      "https://cdn.dribbble.com/userupload/35197190/file/original-068ae59b58b419557926f8eb26e0b662.jpg?resize=1024x728&vertical=center",
    tags: ["Figma", "Mobile Screen"],
    description:
      "An application screen for browsing, filtering, and viewing property listings.",
    linkType: "internal",
    url: "https://dribbble.com/shots/17359768-Properties-Buy-Sell-App-Screen",
    links: {
      dribbble: "https://dribbble.com/shots/17359768-Properties-Buy-Sell-App-Screen",
    },
  },
  {
    id: "cryptowire-app-login-signup",
    title: "CryptoWire App Login/Signup",
    category: "UI/UX Design",
    previewImage:
      "https://cdn.dribbble.com/userupload/35196937/file/original-47853cc7a78b383ef529317d548bdc8a.jpg?resize=1024x744&vertical=center",
    tags: ["Figma", "Mobile Screen"],
    description:
      "Sleek and dark-themed login and sign-up screens for a cryptocurrency app.",
    linkType: "internal",
    url: "https://dribbble.com/shots/17359670-CryptoWire-App-Login-Signup",
    links: {
      dribbble: "https://dribbble.com/shots/17359670-CryptoWire-App-Login-Signup",
    },
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    previewImage:
      "https://raw.githubusercontent.com/HadiuzzamanBappy/hadiuzzamanbappy.github.io/main/public/images/demo/home.png",
    tags: ["Vercel", "Deployment", "Portfolio", "React"],
    description:
      "A personal portfolio website deployed on Vercel to showcase projects and skills.",
    linkType: "external",
    url: "https://hadiuzzamanbappy.vercel.app",
    links: {
      figma: "https://www.figma.com/design/pR3HaL04hXj4NskRl5cwGi/Portfolio?node-id=0-1&t=cHjMja2zub1aJoCr-1",
      github: "https://hadiuzzamanbappy.github.io",
      vercel: "https://hadiuzzamanbappy.vercel.app",
      netlify: "https://hadiuzzamanbappy.netlify.app",
    },
  },
  {
    id: "color-craft-color-palette-generator",
    title: "Color Craft - Color Palette Generator",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Color-Craft/raw/main/public/images/image.png",
    tags: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    description:
      "A modern color palette generator built with Vite, React, and TypeScript.",
    linkType: "external",
    url: "https://color-craft-hb.vercel.app/",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Color-Craft",
      vercel: "https://color-craft-bro.vercel.app/",
    },
  },
  {
    id: "scasl-frontend-development-project",
    title: "SCASL - Frontend Development Project",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/SCASL/raw/main/assets/img/demo.png",
    tags: ["HTML", "CSS", "SCSS", "JavaScript", "Desktop"],
    description:
      "A professional services frontend project with clean navigation and responsive design.",
    linkType: "external",
    url: "https://scasl.vercel.app/",
    links: {
      github: "https://github.com/HadiuzzamanBappy/SCASL",
      vercel: "https://scasl.vercel.app/",
      figma: "https://www.figma.com/design/VxeHCmdzGI2Lf4IMt63uG3/SCASL---Refined?node-id=2701-9298&t=IfyQsrcovklxSipo-1"
    },
  },
  {
    id: "open-llm-chat",
    title: "Open LLM Chat",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Open-LLM-AI/raw/main/public/images/image.png",
    tags: ["React", "AI", "ChatGPT", "TypeScript"],
    description:
      "A modern ChatGPT-like AI assistant interface built with React for intelligent conversations and chat history management.",
    linkType: "external",
    url: "https://open-llm-chat.vercel.app/",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Open-LLM-CHAT",
      vercel: "https://open-llm-chat.vercel.app/",
    },
  },
]);

/**
 * Archived Projects
 * 
 * Collection of older or completed projects maintained for portfolio history.
 * These projects may be less actively maintained but demonstrate skill progression
 * and diverse project experience over time.
 */
export const archivedProjects = [
  {
    id: "logo-design-cryptowire-cryptocurrency",
    title: "Logo Design : CryptoWire - Cryptocurrency",
    category: "Others",
    previewImage:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/280345134145281.61cf0b18bf3ce.jpg",
    tags: ["Branding", "Graphic Design", "Industrial Design"],
    description:
      "Logo design for a platform facilitating cryptocurrency and NFT transactions.",
    linkType: "external",
    url: "https://www.behance.net/gallery/134145281/Logo-Design-CryptoWire-Cryptocurrency",
    links: {
      behance: "https://www.behance.net/gallery/134145281/Logo-Design-CryptoWire-Cryptocurrency",
    },
  },
  {
    id: "gotravel-app-onboard-to-explore",
    title: "GoTravel App : Onboard to Explore",
    category: "UI/UX Design",
    previewImage:
      "https://cdn.dribbble.com/userupload/35197113/file/original-346810f091f7f5c63c3d3ad0a7778951.jpg?resize=1024x700&vertical=center",
    tags: ["Figma", "Mobile Screen"],
    description:
      "Onboarding, login, and registration screens for a travel application.",
    linkType: "external",
    url: "https://dribbble.com/shots/17359757-GoTravel-App-Onboard-to-Explore",
    links: {
      dribble: "https://dribbble.com/shots/17359757-GoTravel-App-Onboard-to-Explore",
    },
  },
  {
    id: "dynamic-currency-converter",
    title: "Dynamic Currency Converter",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Currency-Converter/raw/master/res/img/image.png",
    tags: ["JavaScript", "CSS", "HTML", "API"],
    description:
      "A web app that fetches real-time exchange rates to convert between currencies.",
    linkType: "external",
    url: "https://currency-convert-bro.vercel.app",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Currency-Converter",
      vercel: "https://currency-convert-bro.vercel.app",
    },
  },
  {
    id: "asset-bundler",
    title: "Asset Bundler",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Asset-Bundle-Web/raw/main/assets/image/image.png",
    tags: ["JavaScript", "HTML", "CSS", "Client-side Tools"],
    description:
      "A lightweight, client-side tool for combining and minifying JS and CSS in the browser.",
    linkType: "external",
    url: "https://asset-bundle-bro.vercel.app",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Asset-Bundle-Web",
      vercel: "https://asset-bundle-bro.vercel.app",
    },
  },
  {
    id: "e-home-app-explore",
    title: "E-Home App : Explore",
    category: "UI/UX Design",
    previewImage:
      "https://cdn.dribbble.com/userupload/35197024/file/original-3cf00daef5efcb61ee2aa9786a2b7f35.jpg?resize=1024x728&vertical=center",
    tags: ["Figma", "Mobile Screen"],
    description: "A dark-themed dashboard for controlling smart home devices.",
    linkType: "internal",
    url: "https://dribbble.com/shots/17359709-E-Home-App-Explore",
    links: {
      dribbble: "https://dribbble.com/shots/17359709-E-Home-App-Explore",
    },
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Unit-Converter/raw/main/res/image/image.png",
    tags: ["JavaScript", "CSS", "HTML", "Bootstrap"],
    description:
      "A responsive unit converter with light/dark modes and real-time conversions.",
    linkType: "external",
    url: "https://unit-converter-bro.vercel.app/",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Unit-Converter",
      vercel: "https://unit-converter-bro.vercel.app/",
    },
  },
  {
    id: "todo-management-system",
    title: "Todo Management System",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Todo-Management/raw/master/uploads/demo/admin.png",
    tags: ["Java", "Spring Boot", "HTML", "JavaScript"],
    description:
      "A robust Todo Management System with role-based access control and notifications.",
    linkType: "external",
    url: "https://github.com/HadiuzzamanBappy/Todo-Management",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Todo-Management",
    },
  },
  {
    id: "cleancoder-website",
    title: "CleanCoder Website",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Clean-Coder/raw/main/res/image/image.png",
    tags: ["JavaScript", "CSS", "HTML", "Developer Tools"],
    description:
      "A suite of free developer tools, including formatters, minifiers, and code converters.",
    linkType: "external",
    url: "https://clean-coder.vercel.app/",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Clean-Coder",
      vercel: "https://clean-coder.vercel.app/",
    },
  },
  {
    id: "crystal-app-login-signup",
    title: "Crystal App : login/signup",
    category: "UI/UX Design",
    previewImage:
      "https://cdn.dribbble.com/userupload/35196998/file/original-eac3ae4b6011fe8535c07b0854939449.jpg?resize=1024x728&vertical=center",
    tags: ["Figma", "Mobile Screen"],
    description:
      "Vibrant red-themed login and sign-up screens for a mobile application.",
    linkType: "external",
    url: "https://dribbble.com/shots/17359690-Crystal-App-login-signup",
    links: {
      dribble: "https://dribbble.com/shots/17359690-Crystal-App-login-signup",
    },
  },
  {
    id: "advanced-font-previewer",
    title: "Advanced Font Previewer",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Font-Previewer/raw/main/res/image/image.png",
    tags: ["JavaScript", "HTML", "CSS", "Google Fonts API"],
    description:
      "A web app for designers and developers to discover and compare Google Fonts.",
    linkType: "external",
    url: "https://font-previewer-bro.vercel.app",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Font-Previewer",
      vercel: "https://font-previewer-bro.vercel.app",
    },
  },
  {
    id: "developers-multi-tool-dashboard",
    title: "Developer's Multi-Tool Dashboard",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Dev-Tools/raw/main/res/img/image.png",
    tags: ["JavaScript", "CSS", "Developer Tools", "Dashboard"],
    description:
      "An all-in-one toolkit dashboard designed for frontend developers and designers.",
    linkType: "external",
    url: "https://dev-tools-bro.vercel.app",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Dev-Tools",
      vercel: "https://dev-tools-bro.vercel.app",
    },
  },
  {
    id: "neomorphic-markdown-previewer",
    title: "Neomorphic Markdown Previewer",
    category: "Web Development",
    previewImage:
      "https://github.com/HadiuzzamanBappy/Markdown-Previewer/raw/main/res/image/image.png",
    tags: ["CSS", "JavaScript", "HTML", "Neomorphic"],
    description:
      "A stylish, real-time Markdown editor with a side-by-side preview.",
    linkType: "external",
    url: "https://markdown-bro.vercel.app",
    links: {
      github: "https://github.com/HadiuzzamanBappy/Markdown-Previewer",
      vercel: "https://markdown-bro.vercel.app",
    },
  },
];
