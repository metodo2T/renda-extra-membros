const fs = require('fs');
let html = fs.readFileSync('public/templates/pagina-17/index.html', 'utf8');

// Replace relative asset paths with absolute paths from jsdelivr CDN pointing to the main branch
const cdnBase = 'https://cdn.jsdelivr.net/gh/metodo2T/renda-extra-membros@main/public/templates/pagina-17/assets/';
html = html.replace(/href="assets\//g, 'href="' + cdnBase);
html = html.replace(/src="assets\//g, 'src="' + cdnBase);
html = html.replace(/srcset="assets\//g, 'srcset="' + cdnBase);

let promptText = 'Build a static responsive landing page for the infoproduct "Método Conteúdo com IA".\n';
promptText += 'You MUST recreate the exact same page using the provided HTML template below.\n\n';
promptText += 'CRITICAL INSTRUCTIONS:\n';
promptText += '1. OUTPUT EXACTLY THIS HTML CODE. Do not change any class names, IDs, or the structure of the tags. The CSS and JS files are pre-configured via CDN and depend on these exact classes and IDs.\n';
promptText += '2. Replace ONLY the copy (the text inside the tags) with the appropriate content for the user\'s specific product, keeping the same tone and purpose.\n';
promptText += '3. DO NOT change the absolute asset paths (e.g. https://cdn.jsdelivr.net/.../hero1.jpg). Keep them exactly as they are.\n';
promptText += '4. Output ONLY the complete HTML code. Do not include markdown formatting or explanations.\n\n';
promptText += '--- BEGIN HTML TEMPLATE ---\n';
promptText += html + '\n';
promptText += '--- END HTML TEMPLATE ---\n';

// Escape backticks and dollar signs for the typescript template literal
const escapedPrompt = promptText.replace(/`/g, '\\`').replace(/\$/g, '\\$');

const tsContent = 'export const pagina17Prompt = `' + escapedPrompt + '`;\n';

fs.writeFileSync('src/data/templates/pagina17Prompt.ts', tsContent, 'utf8');
console.log('Successfully generated pagina17Prompt.ts with absolute CDN URLs in the full HTML template.');
