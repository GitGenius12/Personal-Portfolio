export const portfolioData = {
  personalInfo: {
    name: "Margesh Modi",
    role: "Software Engineer",
    tagline: "Building scalable, high-performance backend systems",
    resumeUrl: "/resume.pdf",
    github: "https://github.com/Margesh06",
    linkedin: "https://www.linkedin.com/in/margesh-modi",
    email: "margesh@example.com"
  },
  
  about: {
    description: "I'm Margesh Modi, a software engineer with a strong focus on building scalable, high-performance backend systems. I currently work at Fitpage, where I design and optimize production APIs and PostgreSQL databases for high-traffic applications. I've led performance-critical improvements that directly impacted user growth and revenue, and I enjoy taking ownership of problems from design to deployment. I'm driven by writing clean, efficient code and building systems that scale reliably in real-world conditions."
  },
  
  experience: [
    {
      id: 1,
      company: "Fitpage",
      location: "Mumbai, Maharashtra",
      positions: [
        {
          title: "Software Engineer",
          period: "Jun 2025 – Present",
          achievements: [
            "Designed and implemented low-latency, high-throughput backend services for high-traffic applications with a strong focus on scalability, reliability, and security.",
            "Optimized SQL queries, indexes, and joins across critical PostgreSQL services, significantly reducing API response times and improving system efficiency.",
            "Collaborated in Agile sprints with product managers and business stakeholders to deliver customer-facing features with measurable performance improvements."
          ]
        },
        {
          title: "Software Engineer Intern",
          period: "Jan 2025 – May 2025",
          achievements: [
            "Led the end-to-end revamp of training.fitpage.in, improving system performance and user experience, resulting in a 50% increase in active users and a 30% revenue growth.",
            "Designed and deployed scalable, low-latency RESTful APIs for the Spolo app, supporting seamless feature integration under expected production load."
          ]
        }
      ],
      technologies: ["NextJS", "NestJS", "JavaScript", "PostgreSQL"]
    },
    {
      id: 2,
      company: "Oopar Growth Ventures Pvt Ltd",
      location: "Bangalore, Karnataka",
      positions: [
        {
          title: "Software Engineer Intern",
          period: "April 2024 – June 2024",
          achievements: [
            "Optimized core application features (chat, events, notifications) through refactoring and performance tuning, reducing load times by 80%.",
            "Developed a centralized Admin Dashboard and integrated OneSignal for scalable, automated user notifications."
          ]
        }
      ],
      technologies: ["Angular", "NodeJS", "JavaScript", "Firestore"]
    }
  ],
  
  technologies: [
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Java", category: "language" },
    { name: "C++", category: "language" },
    { name: "Python", category: "language" },
    { name: "NestJS", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "FastAPI", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "Rails", category: "backend" },
    { name: "Next.js", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Angular", category: "frontend" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
    { name: "AWS", category: "devops" },
    { name: "Docker", category: "devops" }
  ],
  
  projects: [
    {
      id: 1,
      title: "Stock Market Portfolio",
      description: "Developed an interactive stock market portfolio project allowing users to buy, sell, and fostering a hands-on learning experience. Additionally, I had integrated OpenCV for face logging, enhancing the project's security and user authentication by implementing a facial recognition system during login.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      github: "https://github.com/Margesh06/Stock-Market-Portfolio",
      technologies: ["Python", "OpenCV", "Flask"]
    },
    {
      id: 2,
      title: "dermAID",
      description: "Developed a Skin Disease Detection AI Tool which is a cutting-edge solution designed to assist healthcare professionals and individuals in identifying various skin conditions accurately and efficiently. Designed an app with an intuitive interface, users can easily upload images, receive diagnoses, and access valuable information about detected conditions, all while prioritizing privacy and security.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      github: "https://github.com/Margesh06/dermAID",
      technologies: ["AI/ML", "TensorFlow", "React"]
    },
    {
      id: 3,
      title: "Hostel Leave Management System",
      description: "Developed a comprehensive hostel leave management web application with separate panels for students, staff, and admins to streamline the leave process. Students submit leave requests, which are reviewed and approved by wardens, generating a QR code displayed on the student dashboard. The system ensures secure entry and exit through QR code scanning, improving efficiency and security in leave management.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      github: "https://github.com/Margesh06/Leave-Management-System",
      technologies: ["Node.js", "MongoDB", "React"]
    }
  ]
};