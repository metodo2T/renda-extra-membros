import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.tsx';

const cssPath = './src/index.css';
const css = fs.readFileSync(cssPath, 'utf8');

const htmlContent = ReactDOMServer.renderToString(React.createElement(App));

const fullHtml = `<!doctype html>
<html lang="pt-BR" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gestor de Tráfego Pago | Meta Ads & Google Ads - Link na Bio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            fontFamily: {
              sans: ['Outfit', 'sans-serif'],
              serif: ['Bebas Neue', 'serif'],
            }
          }
        }
      }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
      ${css}
      /* Fallback para esconder modais nativamente se React nao rodar */
      .modal-content { display: none; }
      .modal-content.active { display: flex; }
    </style>
  </head>
  <body class="bg-[#0b0f19] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white min-h-screen overflow-x-hidden">
    ${htmlContent}
    <script>
      // Vanilla JS para Modais
      document.querySelectorAll('.movie-card-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const type = btn.getAttribute('data-type');
          // Simula abrir modal (isso é um modelo, depois da IA o usuario ajusta os links reais)
          // Mas no original, os cards abrem o ActionModal
          const modal = document.getElementById('action-modal-' + type);
          if (modal) {
             modal.classList.add('active');
             document.body.style.overflow = 'hidden';
          } else {
             // Fallback
             alert("Redirecionando para " + type);
          }
        });
      });
      document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          btn.closest('.modal-content').classList.remove('active');
          document.body.style.overflow = 'auto';
        });
      });
    </script>
  </body>
</html>`;

fs.writeFileSync('./index-single.html', fullHtml);
console.log("netflix bundled successfully");
