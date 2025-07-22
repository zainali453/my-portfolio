export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  images: string[];
  category: "web" | "mobile" | "fullstack" | "other";
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "mobile"
    | "database"
    | "devops"
    | "design"
    | "enterprise/integrations"
    | "other";
  level: number; // 1-100
  icon?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  achievements?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  avatar: string;
  resume: string;
}

// Portfolio Data - Replace with your actual information
export const personalInfo: PersonalInfo = {
  name: "Zain Ali",
  title: "Full Stack Developer & Frontend Specialist",
  description:
    "Passionate full-stack developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly applications that solve real-world problems.",
  email: "zainyounas101@gmail.com",
  phone: "+92 301 6211450",
  location: "Gujranwala, Pakistan",
  website: "https://yourwebsite.com",
  linkedin: "https://www.linkedin.com/in/zainyounas/",
  github: "https://github.com/zainali453",
  twitter: "https://www.linkedin.com/in/zainyounas/",
  avatar: "/images/image.jpg",
  resume: "/ZainAli_Resume.pdf",
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Self-Employed",
    position: "Full Stack Developer Freelancer",
    duration: "Mar 2025 - Present",
    location: "Gujranwala, Pakistan",
    description: [
      "Built and deployed full-stack web and mobile applications for property listings, restaurant booking, and copyright services.",
      "Integrated third-party APIs such as Realtor.ca, Google Maps, and Stripe for live data, geolocation, and payments.",
      "Designed mobile apps using React Native and Expo/EAS, including internal tools and client-facing apps.",
      "Created responsive front-end interfaces with Next.js and implemented admin panels for client management.",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "React Native",
      "Next.js",
      "AWS S3",
      "Google Maps API",
      "Stripe",
      "Expo",
      "TypeScript",
    ],
    achievements: [
      "Launched propertypost.ca with live property listings and payments, attracting active users.",
      "Developed and deployed 5+ production-grade apps across web and mobile platforms.",
      "Successfully implemented secure Stripe payments and geolocation features.",
      "Delivered projects with high client satisfaction and repeat contracts.",
    ],
  },
  {
    id: "2",
    company: "Techmutator",
    position: "Associate Software Engineer (Full Stack)",
    duration: "2024 - 2025",
    location: "Rawalpindi, Pakistan",
    description: [
      "Orchestrated Azure & Active Directory (LDAP/ADFS SSO) solutions with Google Workspace API integration for seamless user provisioning",
      "Architected Chrome Extensions (Manifest V3) leveraging Web Sockets, React Flow & content scripts for real-time data capture, visualization and policy enforcement",
      "Administered Linux server environments for production deployments and implemented ELK.js dashboards for interactive data insights",
    ],
    technologies: [
      "Node.js",
      "React",
      "Chrome Extensions",
      "Azure",
      "Active Directory",
      "Google Workspace API",
      "Web Sockets",
      "TypeScript",
      "ClickHouse",
      "Docker",
    ],
    achievements: [
      "Initiated and led a project to integrate Azure AD SSO",
      "Developed a Chrome Extension that improved data capture efficiency by 30%",
      "Implemented a real-time data visualization dashboard using ELK.js",
      "Maintained 99% client satisfaction rate",
    ],
  },
  {
    id: "3",
    company: "Techmutator",
    position: "Associate Software Engineer Intern",
    duration: "2023 - 2024",
    location: "Remote",
    description: [
      "Engineered a Node.js/React/Puppeteer/Electron.js solution for end-to-end vehicle listing management with FTP-based data ingestion",
      "Developed a React-integrated Electron.js desktop app (with auto-updates via Electron Updater) and optimized multiple React management interfaces for improved functionality and UX",
    ],
    technologies: [
      "React",
      " Node.js",
      "Puppeteer",
      "Electron.js",
      "JavaScript",
      "Electron Updater",
    ],
    achievements: [
      "Improved application performance by 40%",
      "Enhanced user experience with a new desktop app interface",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with advanced features",
    longDescription:
      "A comprehensive e-commerce solution built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, payment processing, and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for management",
      "Responsive design for all devices",
    ],
    demoUrl: "https://your-demo-url.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    videoUrl: "/videos/ecommerce-demo.mp4",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    category: "fullstack",
    status: "completed",
    year: 2023,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application",
    longDescription:
      "A real-time collaborative task management application with team features, project tracking, and productivity analytics. Built with modern web technologies for optimal performance.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Real-time collaboration",
      "Project and task management",
      "Team member assignments",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Mobile-responsive design",
    ],
    demoUrl: "https://your-task-app-demo.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    videoUrl: "/videos/task-manager-demo.mp4",
    images: ["/images/projects/task-1.jpg", "/images/projects/task-2.jpg"],
    category: "web",
    status: "completed",
    year: 2023,
  },
  {
    id: "3",
    title: "Mobile Banking App",
    description: "Secure mobile banking application",
    longDescription:
      "A secure mobile banking application with biometric authentication, transaction history, account management, and financial analytics. Designed with security and user experience in mind.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Biometric authentication",
      "Account balance and transactions",
      "Money transfer functionality",
      "Bill payment system",
      "Financial analytics and insights",
      "Push notifications",
    ],
    demoUrl: "https://your-banking-demo.com",
    githubUrl: "https://github.com/yourusername/banking-app",
    images: [
      "/images/projects/banking-1.jpg",
      "/images/projects/banking-2.jpg",
    ],
    category: "mobile",
    status: "in-progress",
    year: 2024,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 95 },
  { name: "Next.js", category: "frontend", level: 70 },
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 95 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "Material UI", category: "frontend", level: 88 },
  { name: "React Flow", category: "frontend", level: 70 },
  { name: "Redux", category: "frontend", level: 60 },

  // Backend
  { name: "Node.js", category: "backend", level: 90 },
  { name: "Express.js", category: "backend", level: 99 },
  { name: "Chrome Extensions (MV3)", category: "backend", level: 90 },
  { name: "Puppeteer", category: "backend", level: 85 },
  { name: "Electron.js", category: "backend", level: 80 },
  { name: "Socket.io", category: "backend", level: 75 },

  // Database
  { name: "MongoDB", category: "database", level: 85 },
  { name: "PostgreSQL", category: "database", level: 80 },
  { name: "My SQL", category: "database", level: 80 },
  { name: "ClickHouse", category: "database", level: 50 },

  // Mobile
  { name: "React Native", category: "mobile", level: 80 },
  { name: "Expo/EAS", category: "mobile", level: 70 },

  // DevOps
  { name: "Git", category: "devops", level: 90 },
  { name: "Digital Ocean VPS", category: "devops", level: 88 },
  { name: "Domain Integration", category: "devops", level: 85 },
  { name: "Vercel", category: "devops", level: 85 },
  { name: "AWS", category: "devops", level: 70 },
  { name: "Docker", category: "devops", level: 65 },

  // Enterprise
  {
    name: "Google (Maps, OAuth)",
    category: "enterprise/integrations",
    level: 90,
  },
  { name: "Realtor.ca", category: "enterprise/integrations", level: 80 },
  { name: "Stripe", category: "enterprise/integrations", level: 75 },
  { name: "Graph API", category: "enterprise/integrations", level: 70 },
  { name: "Active Directory", category: "enterprise/integrations", level: 50 },
];

export const education: Education[] = [
  {
    institution: "FAST NUCES",
    degree: "Bachelor of Science ",
    field: "Computer Science",
    duration: "2020 - 2024",
    achievements: [
      "Event Organizer for Daira 2024",
      "Member of the Programming Club",
      "Participated in various hackathons and coding competitions",
      "Developed a web application for university event management",
    ],
  },
];
