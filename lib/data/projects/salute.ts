import type { Project } from "../types";

export const salute: Project = {
  id: "salute-sports",
  title: "Salute Sports",
  category: "web-development",
  thumbnail: "/projects/salute/login-tela.png",
  images: [
    "/projects/salute/login-tela.png",
    "/projects/salute/dashboard-tela-1.png",
    "/projects/salute/dashboard-tela-2.png",
  ],
  isPublic: false,
  technologies: [
    "PHP 8.3",
    "Laravel 11",
    "PostgreSQL",
    "Blade",
    "Bootstrap",
    "Docker",
    "API Bling",
    "API Mercado Livre",
    "OAuth2",
  ],
  description: {
    pt: "Sistema web fullstack para gestão unificada de estoque e vendas de loja de artigos esportivos. Integra dados de 3 plataformas (Bling ERP + 2 contas Mercado Livre) em tempo real, com dashboard centralizado, exportação Excel/PDF, refresh automático de tokens OAuth2 e processamento assíncrono com filas.",
    en: "Fullstack web system for unified inventory and sales management of a sports store. Integrates data from 3 platforms (Bling ERP + 2 Mercado Livre accounts) in real-time, with centralized dashboard, Excel/PDF export, automatic OAuth2 token refresh and async processing with queues.",
  },
};
