// Dados do portfólio - Claudio Junior

export const personalInfo = {
  name: "Claudio Junior",
  title: "Full Stack Developer",
  initials: "CJ",
  email: "claudiojunior2302@uol.com.br",
  phone: "+55 (11) 9 1051-0344",
  location: "Jundiaí - SP, Brasil",
  social: {
    github: "https://github.com/Claudio-16dv",
    linkedin: "https://linkedin.com/in/claudiojunior16",
    twitter: ""
  }
};

export const education = [
  {
    id: 1,
    title: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development"
    },
    institution: {
      pt: "Faculdade Estácio",
      en: "Estácio University"
    },
    period: "Jul/2025 — Dez/2027",
    description: {
      pt: "Graduação em tecnologia focada em desenvolvimento de software, banco de dados e arquitetura de sistemas.",
      en: "Technology degree focused on software development, databases and systems architecture."
    }
  },
  {
    id: 2,
    title: {
      pt: "Bootcamp UX/UI",
      en: "UX/UI Bootcamp"
    },
    institution: {
      pt: "Cubos Academy",
      en: "Cubos Academy"
    },
    period: "Fev/2024 — Ago/2024",
    description: {
      pt: "Formação intensiva em design de interfaces e experiência do usuário.",
      en: "Intensive training in interface design and user experience."
    }
  }
];

export const experience = [
  {
    id: 1,
    title: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer"
    },
    company: {
      pt: "Instituto Jovem Técnico",
      en: "Instituto Jovem Técnico"
    },
    period: "Mar/2025 — Atual",
    description: {
      pt: "Desenvolvimento e manutenção de sistemas web com PHP, Laravel e Node.js. Implementação de interfaces com Blade e Next.js. Modelagem e otimização de banco de dados MySQL.",
      en: "Development and maintenance of web systems with PHP, Laravel and Node.js. Interface implementation with Blade and Next.js. MySQL database modeling and optimization."
    }
  },
  {
    id: 2,
    title: {
      pt: "Desenvolvedor Full Stack",
      en: "Full Stack Developer"
    },
    company: {
      pt: "A.M.F Consultoria em TI",
      en: "A.M.F IT Consulting"
    },
    period: "Ago/2024 — Mar/2025",
    description: {
      pt: "Desenvolvimento de sistemas em PHP, Laravel e MySQL. Criação de interfaces com Blade, Next.js e Vue.js. Implementação de endpoints e integrações de APIs.",
      en: "Systems development with PHP, Laravel and MySQL. Interface creation with Blade, Next.js and Vue.js. API endpoints and integrations implementation."
    }
  },
  {
    id: 3,
    title: {
      pt: "Desenvolvedor Full Stack (Freelancer)",
      en: "Full Stack Developer (Freelancer)"
    },
    company: {
      pt: "Salute Ltda.",
      en: "Salute Ltd."
    },
    period: "Jan/2025 — Jul/2025",
    description: {
      pt: "Desenvolvimento de dashboard para integração de e-commerce via API (Mercado Livre e Bling). Backend em PHP/Laravel e front-end com Blade.",
      en: "Dashboard development for e-commerce integration via API (Mercado Livre and Bling). PHP/Laravel backend and Blade frontend."
    }
  },
  {
    id: 4,
    title: {
      pt: "Desenvolvedor Full Stack (Freelancer)",
      en: "Full Stack Developer (Freelancer)"
    },
    company: {
      pt: "Darwin Pet",
      en: "Darwin Pet"
    },
    period: "Jan/2025 — Ago/2025",
    description: {
      pt: "Sustentação e evolução de e-commerce na plataforma Loja Integrada. Criação de página institucional com Bootstrap, HTML, CSS e JavaScript.",
      en: "E-commerce maintenance and evolution on Loja Integrada platform. Institutional page creation with Bootstrap, HTML, CSS and JavaScript."
    }
  }
];

export const skills = [
  { name: "PHP / Laravel", percentage: 90 },
  { name: "MySQL", percentage: 85 },
  { name: "Next.js / React", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "Vue.js", percentage: 70 },
  { name: "TypeScript", percentage: 70 },
  { name: "Docker / AWS", percentage: 50 }
];

export type Project = {
  id: string;
  title: string;
  category: "web-design" | "applications" | "web-development";
  thumbnail: string;
  images: string[];
  isPublic: boolean;
  liveUrl?: string;
  repoUrl?: string;
  technologies: string[];
  description: {
    pt: string;
    en: string;
  };
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Dashboard E-commerce",
    category: "web-development",
    thumbnail: "/projects/project-1.jpg",
    images: ["/projects/project-1.jpg"],
    isPublic: false,
    technologies: ["PHP", "Laravel", "MySQL", "Blade", "API REST"],
    description: {
      pt: "Dashboard para integração de plataformas de e-commerce via API (Mercado Livre e Bling). Sistema completo de gestão de pedidos e estoque.",
      en: "Dashboard for e-commerce platform integration via API (Mercado Livre and Bling). Complete order and inventory management system."
    }
  },
  {
    id: "project-2",
    title: "Sistema Web Institucional",
    category: "web-development",
    thumbnail: "/projects/project-2.jpg",
    images: ["/projects/project-2.jpg"],
    isPublic: false,
    technologies: ["PHP", "Laravel", "MySQL", "Next.js", "Node.js"],
    description: {
      pt: "Sistema web completo com backend em Laravel e frontend em Next.js. Inclui autenticação, gestão de usuários e relatórios.",
      en: "Complete web system with Laravel backend and Next.js frontend. Includes authentication, user management and reports."
    }
  },
  {
    id: "project-3",
    title: "E-commerce Darwin Pet",
    category: "web-design",
    thumbnail: "/projects/project-3.jpg",
    images: ["/projects/project-3.jpg"],
    isPublic: true,
    liveUrl: "https://darwinpet.com.br",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Loja Integrada"],
    description: {
      pt: "Página institucional e customizações para e-commerce de produtos pet. Design responsivo e otimizado para conversão.",
      en: "Institutional page and customizations for pet products e-commerce. Responsive design optimized for conversion."
    }
  }
];

export const categories = [
  { value: "all", labelKey: "all" },
  { value: "web-design", labelKey: "webDesign" },
  { value: "applications", labelKey: "applications" },
  { value: "web-development", labelKey: "webDevelopment" }
] as const;

// About Me - textos de apresentação
export const aboutMe = {
  pt: [
    "Desenvolvedor Full Stack com experiência em PHP, Laravel e MySQL, atuando no desenvolvimento e manutenção de sistemas e integrações via APIs. Vivência com front-end usando Blade e evolução prática com Next.js e Vue.js.",
    "Experiência em projetos freelancer para e-commerce e dashboards com integrações (Mercado Livre/Bling). Conhecimentos em Docker e AWS. Focado em entregar código limpo, performático e soluções que resolvem problemas reais."
  ],
  en: [
    "Full Stack Developer with experience in PHP, Laravel and MySQL, working on systems development, maintenance and API integrations. Frontend experience with Blade and practical evolution with Next.js and Vue.js.",
    "Experience in freelance projects for e-commerce and dashboards with integrations (Mercado Livre/Bling). Knowledge in Docker and AWS. Focused on delivering clean, performant code and solutions that solve real problems."
  ]
};

// Services - o que eu faço
export const services = [
  {
    id: 1,
    icon: "code",
    title: {
      pt: "Desenvolvimento Web",
      en: "Web Development"
    },
    description: {
      pt: "Sistemas web completos com PHP, Laravel, Next.js e Vue.js. APIs RESTful e integrações.",
      en: "Complete web systems with PHP, Laravel, Next.js and Vue.js. RESTful APIs and integrations."
    }
  },
  {
    id: 2,
    icon: "server",
    title: {
      pt: "Backend & APIs",
      en: "Backend & APIs"
    },
    description: {
      pt: "Desenvolvimento de APIs robustas, integrações com plataformas externas e otimização de banco de dados MySQL.",
      en: "Robust API development, external platform integrations and MySQL database optimization."
    }
  },
  {
    id: 3,
    icon: "palette",
    title: {
      pt: "Frontend & UI",
      en: "Frontend & UI"
    },
    description: {
      pt: "Interfaces modernas e responsivas com Next.js, Vue.js, Blade e Bootstrap.",
      en: "Modern and responsive interfaces with Next.js, Vue.js, Blade and Bootstrap."
    }
  },
  {
    id: 4,
    icon: "smartphone",
    title: {
      pt: "E-commerce",
      en: "E-commerce"
    },
    description: {
      pt: "Dashboards e integrações para e-commerce. Experiência com Mercado Livre, Bling e Loja Integrada.",
      en: "Dashboards and integrations for e-commerce. Experience with Mercado Livre, Bling and Loja Integrada."
    }
  }
];
