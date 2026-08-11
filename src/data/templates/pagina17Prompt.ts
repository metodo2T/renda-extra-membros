export const pagina17Prompt = (answers: Record<string, string>) => `Build a static responsive landing page for the infoproduct "Método Conteúdo com IA" using plain HTML, CSS, and JavaScript with GSAP and ScrollTrigger. The goal is to create a high-converting, modern, and fast sales page focused on teaching how to create content with Artificial Intelligence.

PAGE IDENTITY
- Product Name: \${answers.productName || 'Método Conteúdo com IA'}
- Target Audience: \${answers.targetAudience || 'Criadores de conteúdo, empreendedores e social medias que sofrem com bloqueio criativo'}
- Main Promise: \${answers.mainPromise || 'Crie conteúdo com IA todos os dias sem travar e sem depender de agência'}
- Price: \${answers.price || 'R$ 49,00'}
- Original Price: \${answers.originalPrice || 'R$ 149,00'}
- Primary Color: #00a8b5 (Cyan/Teal)
- Typography: "Plus Jakarta Sans" for headings, "Inter" for body text

PAGE SECTIONS (Must follow this exact structure):

1. HERO SECTION
- Seals/Badges above title: "Sem bloqueio criativo", "Sem depender de agência", "Sem perder horas escrevendo"
- Main Title: "Use este método e crie conteúdo com IA todos os dias sem travar" (Highlight 'crie conteúdo com IA' in primary color)
- Subtitle: "Chega de olhar para a tela sem saber o que postar. Com um processo validado e prompts prontos, você cria ideias, roteiros, legendas e peças completas com IA em minutos."
- Call to Action (CTA): "Quero criar conteúdo com IA hoje"
- Background: A modern hero image or a dark, tech-oriented abstract background.

2. VIDEO CAROUSEL (Resultados Reais)
- Title: "Veja o tipo de conteúdo que você vai conseguir criar"
- Content: A horizontal swipeable/draggable carousel of video placeholders.

3. PAIN POINTS
- Title: "Você já passou por alguma dessas situações na hora de criar conteúdo?"
- Bullet points with icons:
  * Abriu a IA para pedir conteúdo e recebeu textos genéricos que parecem iguais aos de todo mundo.
  * Perdeu horas testando prompts, gastou energia e no final ainda achou o resultado fraco.
  * Precisa produzir conteúdo com frequência, mas trava na hora de transformar ideias em posts, vídeos e roteiros.
  * Publica sem consistência, vê o engajamento cair e sente que está ficando para trás no mercado.
- Highlight at the bottom: "É por isso que existe o Método Conteúdo com IA" followed by an infinite scrolling marquee of the product name.

4. EXPECTATION BENEFITS
- Title: "Com o método você vai:"
- Cards with icons:
  * Criar conteúdo com mais clareza, mantendo uma comunicação forte e consistente
  * Parar de postar no improviso e construir autoridade com conteúdos estratégicos
  * Produzir ideias, roteiros e legendas em minutos usando inteligência artificial
  * Transformar conteúdo em atenção, confiança e mais oportunidades de venda
- CTA: "Quero acessar o método agora"

5. HOW IT WORKS
- Title: "Veja como funciona na prática"
- 3 Steps:
  1. Escolha um objetivo (Defina o que você quer criar no dia: post, roteiro curto, carrossel...)
  2. Use os prompts guiados (Aplique os prompts do método para gerar conteúdo alinhado...)
  3. Refine e publique (Faça os ajustes finais e publique com segurança...)

6. DELIVERABLES (O que você vai receber)
- Title: "Veja tudo o que você vai receber"
- Cards with placeholder images/icons:
  * Biblioteca de Prompts para Conteúdo com IA
  * Guia Prático de Criação com IA
  * Checklist de Consistência

7. BONUS SECTION
- Eyebrow: "Bônus Exclusivos"
- Title: "E ainda tem mais"
- 2 Bonus Cards:
  * Bônus 01: Calendário de Conteúdo IA
  * Bônus 02: Arsenal de Ganchos e CTAs
- CTA: "Acessar o Método agora"

8. WHO IS THIS FOR
- Title: "O método de conteúdo com IA é pra você que:"
- Points:
  * Quer criar conteúdo de forma profissional sem depender de equipe grande.
  * Quer fugir do conteúdo genérico com cara de texto automático.
  * Quer produzir com mais velocidade sem perder qualidade.
  * Quer transformar conteúdo em autoridade, demanda e vendas.

9. VALUE ANCHORING
- Center-aligned card: "Quando finalizei este método, me disseram para cobrar no mínimo R$ 197... e faria sentido."
- Compare the price to consulting or creating without a method. "Mas eu não queria que preço fosse barreira..."

10. OFFER SECTION
- Title: "Hoje você pode entrar no método com uma condição especial:"
- Checklist of all deliverables included.
- Price Display: From {Original Price} to {Price}
- Main CTA Button: "Quero criar conteúdo com IA hoje"

11. GUARANTEE
- Big '7' Icon
- Title: "7 dias de Garantia Incondicional"
- Description: "Você tem 7 dias para testar o método completo. Se não fizer sentido para você, é só pedir reembolso..."

12. COMPARISON (Opção 1 vs Opção 2)
- Title: "Agora, você tem duas opções"
- Option 1 (Bad): Sem o método (Continuar travando, perder tempo, conteúdo genérico).
- Option 2 (Good): Com o método (Estruturas validadas, em poucos minutos, diferenciação, autoridade).
- CTA: "Quero acessar o método agora"

13. FAQ & FOOTER
- Standard Accordion FAQ (5 questions).
- Footer: © 2026 Operação Conteúdo com IA. Todos os direitos reservados.

TECHNICAL & DESIGN REQUIREMENTS
- Single HTML file output preferred (or clear separation of HTML, CSS, JS).
- Styling: Use modern CSS variables, Grid/Flexbox, and a dark mode aesthetic with the primary Cyan color (#00a8b5) for accents, glows, and buttons.
- Animations: Use GSAP for scroll-triggered reveals (fade-ins, slide-ups) and smooth interactions.
- Buttons: High-conversion styling with subtle pulse animations or gradient borders.
- Responsiveness: Must look perfect on mobile devices (stack elements appropriately).
- Avoid frameworks like React or Tailwind; stick to vanilla web technologies to maintain the exact desired markup structure.
\`;
