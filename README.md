# Stellix Portfolio - Refatoração Next.js

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-3.4-blue)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🚁 Visão Geral do Projeto
Este é o site oficial do portfólio de **Gabriel Menezes**, Especialista em Qualidade e Testes de Software. O projeto serve como uma vitrine profissional dinâmica, projetada sob o conceito de **"Technical Grid Aesthetic"** (Estética de Grade Técnica). Ele une a precisão analítica do Quality Assurance com a liberdade da exploração outdoor e fotografia aérea.

O site destaca:
- **Jornada Profissional**: Mais de 7 anos de experiência em QA, liderança técnica e automação Android.
- **Engajamento com a Comunidade**: Envolvimento ativo na comunidade Python Brasil, incluindo organização de eventos e palestras.
- **Perspectivas**: Uma galeria visual de fotografias aéreas capturadas via drone, representando o equilíbrio entre o código e o horizonte.

---

## 🏗️ Padrão de Design: Arquitetura Baseada em Componentes
O projeto foi refatorado de um projeto legado de arquivo único (HTML/JS) para uma aplicação profissional Next.js 14+ utilizando a App Router para garantir escalabilidade e manutenibilidade.

### 🧩 Componentização
Desconstruímos o `index.html` legado em componentes React especializados em `src/components/`:
- **Navbar**: Navegação dinâmica com rastreamento de seção ativa.
- **Hero**: Ponto de entrada principal com integração com Spotify e imagens otimizadas.
- **Experience**: Exibição de linha do tempo e stack técnica.
- **Journey**: Histórico de eventos e envolvimento com a comunidade.
- **Lifestyle**: Galeria de mosaico interativa para fotografia aérea.
- **Social**: Pontos de conexão e links de rodapé.

### 🌍 i18n e Gerenciamento de Estado
- **Seletor de Idioma (PT/EN)**: Implementado via **React Context API** (`LanguageContext.tsx`). A preferência é persistida no `localStorage`.
- **Gerenciamento de Tema**: Modos Claro/Escuro gerenciados via `ThemeContext.tsx`, integrando-se perfeitamente com as classes `dark:` do Tailwind.

---

## 🚀 Otimização e Engenharia
- **Next/Image**: Todas as imagens utilizam carregamento otimizado, redimensionamento automático e formatos modernos.
- **Next/Font**: As fontes do Google (**Manrope**, **Epilogue**, **Inter**, **Space Grotesk**) são hospedadas localmente para evitar saltos de layout (Zero Layout Shift).
- **Performance**: Alta utilização de Server-Side Rendering (SSR) com interatividade mínima no lado do cliente.

---

## 🛠️ Configuração Local
1. **Clonar o repositório**:
   ```bash
   git clone https://github.com/stellix-adm/Stellix.git
   cd Stellix
   ```
2. **Instalar dependências**:
   ```bash
   npm install
   ```
3. **Executar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

---

## 🚢 Implantação na Vercel
1. Certifique-se de que todas as alterações foram enviadas para o branch `main`.
2. No [Painel da Vercel](https://vercel.com/), importe o repositório.
3. Utilize o preset **Next.js** com o comando de build `npm run build`.

---
© 2026 Gabriel Menezes. Onde o Código encontra o Horizonte.
