import type { Project } from "../types";

export const salute: Project = {
  id: "salute-sports",
  title: {
    pt: "Salute Sports",
    en: "Salute Sports",
  },
  category: "web-development",
  thumbnail: "/projects/salute/login-tela.png",
  images: [
    "/projects/salute/login-tela.png",
    "/projects/salute/dashboard-tela-1.png",
    "/projects/salute/dashboard-tela-2.png",
  ],
  isPublic: false,
  technologies: [
    "PHP",
    "Laravel",
    "PostgreSQL",
    "Blade",
    "Bootstrap",
    "Docker",
    "Bling ERP API",
    "Mercado Livre API",
    "OAuth2"
  ],
  description: {
    pt: "Dashboard autenticado desenvolvido individualmente com PHP, Laravel, Blade e PostgreSQL, da modelagem de dados à implantação em produção. Integra duas contas do Mercado Livre e o Bling ERP para consolidar estoque, vendas e faturamento em uma única visão operacional. A solução segue em uso pelo cliente, com manutenção e melhorias pontuais após a entrega.",
    en: "Authenticated dashboard independently built with PHP, Laravel, Blade, and PostgreSQL, from data modeling through production deployment. Integrates two Mercado Livre accounts and Bling ERP to consolidate inventory, sales, and total revenue into a single operational view. The client continues to use the system, with occasional maintenance and feature updates after launch."
  },
};
