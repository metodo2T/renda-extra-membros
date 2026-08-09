import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.tsx';

const cssPath = './src/index.css';
const css = fs.readFileSync(cssPath, 'utf8');

const htmlContent = ReactDOMServer.renderToString(React.createElement(App));

const fullHtml = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marcus Vance | Consultoria Imobiliária de Alto Padrão</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,400;1,600;1,700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
      ${css}
    </style>
  </head>
  <body>
    ${htmlContent}
    <script>
      // Vanilla JS para FAQs
      document.querySelectorAll('.kit-faq__question').forEach((btn) => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });
      // Intersection Observer
      const revealElements = document.querySelectorAll(
        ".reveal-media, .reveal-side, .reveal-up, .reveal-mark, .reveal-write"
      );
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.22, rootMargin: "0px 0px -8% 0px" });
        revealElements.forEach((el) => observer.observe(el));
      } else {
        revealElements.forEach((el) => el.classList.add("is-visible"));
      }
      setTimeout(() => document.documentElement.classList.add("is-ready"), 100);
    </script>
  </body>
</html>`;

fs.writeFileSync('./index-single.html', fullHtml);
console.log("corretor-imobiliario bundled successfully");
