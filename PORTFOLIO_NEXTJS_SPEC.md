# Especificação: Portfólio Pessoal em Next.js

## Contexto

Este documento descreve a recriação de um portfólio pessoal baseado no template "vCard" (HTML/CSS/JS puro) para Next.js com Tailwind CSS.

Projeto de referência original: https://github.com/codewithsadee/vcard-personal-portfolio

---

## Stack Tecnológica

- **Next.js** (App Router)
- **Tailwind CSS** (estilização)
- **TypeScript** (recomendado)
- Sistema de **temas dark/light** nativo do Tailwind

---

## Estrutura de Seções

### 1. Sidebar (fixa em desktop, colapsável em mobile)
- **Avatar**: NÃO usar foto pessoal. Alternativas:
  - Iniciais estilizadas
  - Avatar ilustrado/cartoon
  - Logo/ícone pessoal
  - Gradiente abstrato ou animação
- Nome e título profissional
- Informações de contato (email, telefone, localização)
- Links para redes sociais
- Botão "Show Contacts" em mobile para expandir

### 2. About
- Texto de apresentação pessoal
- Seção "What I'm Doing" (serviços oferecidos):
  - Web Design
  - Web Development
  - Mobile Apps
  - Outros serviços relevantes
- Depoimentos (testimonials) com modal para leitura completa
- Logos de clientes (opcional)

### 3. Resume
- **Education**: Timeline com formação acadêmica
- **Experience**: Timeline com experiência profissional
- **Skills**: Barras de progresso com porcentagens

### 4. Portfolio
- Galeria de projetos com imagens
- Sistema de filtro por categoria:
  - All
  - Web Design
  - Applications
  - Web Development
- Efeito hover com ícone de visualização
- Links para projetos

### 5. Blog (opcional)
- Lista de posts com:
  - Imagem de capa
  - Categoria
  - Data
  - Título
  - Resumo

### 6. Contact
- Mapa integrado (iframe ou API)
- Formulário de contato:
  - Nome completo
  - Email
  - Mensagem
  - Botão de envio (com validação)

---

## Sistema de Temas

### Configuração Tailwind
- Usar `darkMode: 'class'` no tailwind.config
- Tema **claro como padrão**
- Toggle de tema no header ou sidebar

### Paleta de Cores (referência do original)

#### Tema Escuro (original)
```
Background principal: hsl(0, 0%, 7%) - smoky-black
Cards/Sidebar: hsl(240, 2%, 13%) - eerie-black
Bordas: hsl(0, 0%, 22%) - jet
Texto principal: hsl(0, 0%, 100%) - white
Texto secundário: hsl(0, 0%, 84%) - light-gray
Accent: hsl(45, 100%, 72%) - orange-yellow-crayola (dourado)
```

#### Tema Claro (criar)
```
Background principal: #f5f5f5 ou similar
Cards/Sidebar: #ffffff
Bordas: #e0e0e0
Texto principal: #1a1a1a
Texto secundário: #666666
Accent: manter o dourado ou ajustar
```

---

## Layout Responsivo

### Breakpoints (seguir padrão Tailwind)
- **Mobile first** (< 640px): Sidebar colapsável, navbar fixa no bottom
- **sm (640px+)**: Ajustes de padding e tipografia
- **md (768px+)**: Grid 2 colunas para portfolio/blog, filtros visíveis
- **lg (1024px+)**: Navbar no topo direito, grid 3 colunas
- **xl (1280px+)**: Layout lado a lado (sidebar + conteúdo)

### Comportamento da Navegação
- **Mobile**: Navbar fixa no bottom da tela
- **Desktop (lg+)**: Navbar no canto superior direito do conteúdo

---

## Funcionalidades JavaScript/React

1. **Toggle de tema** (dark/light) com persistência em localStorage
2. **Navegação SPA** entre seções (About, Resume, Portfolio, Blog, Contact)
3. **Toggle da sidebar** em mobile
4. **Modal de depoimentos** ao clicar em um testimonial
5. **Filtro de projetos** no portfolio por categoria
6. **Validação de formulário** de contato
7. **Animações de transição** entre páginas/seções

---

## Componentes Sugeridos

```
/components
  ├── layout/
  │   ├── Sidebar.tsx
  │   ├── Navbar.tsx
  │   └── ThemeToggle.tsx
  ├── sections/
  │   ├── About.tsx
  │   ├── Resume.tsx
  │   ├── Portfolio.tsx
  │   ├── Blog.tsx
  │   └── Contact.tsx
  ├── ui/
  │   ├── Avatar.tsx (iniciais/logo, não foto)
  │   ├── ServiceCard.tsx
  │   ├── TestimonialCard.tsx
  │   ├── TestimonialModal.tsx
  │   ├── TimelineItem.tsx
  │   ├── SkillBar.tsx
  │   ├── ProjectCard.tsx
  │   ├── BlogCard.tsx
  │   ├── FilterButton.tsx
  │   └── ContactForm.tsx
  └── icons/
      └── (ícones SVG ou usar lucide-react/react-icons)
```

---

## Efeitos Visuais a Manter

- Gradientes sutis nos cards (borda gradient)
- Sombras em múltiplas camadas
- Hover effects nos cards e botões
- Animação fade-in ao trocar de seção
- Scrollbar customizada (tema escuro)
- Barras de progresso animadas nas skills

---

## Decisões de Design

- [ ] Definir avatar (iniciais, ilustração, logo, etc.)
- [ ] Definir paleta do tema claro
- [ ] Incluir seção Blog ou não
- [ ] Backend para formulário de contato (API route, Resend, etc.)
- [ ] Dados estáticos ou CMS (Contentful, Sanity, MDX, etc.)

---

## Referências

- Projeto original: `index.html`, `assets/css/style.css`, `assets/js/script.js`
- Demo: `website-demo-image/desktop.png` e `mobile.png`
