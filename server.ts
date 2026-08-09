import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit to handle base64 image uploads
  app.use(express.json({ limit: "15mb" }));

  // Initialize Gemini API client on server
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  // API route for reverse-engineering landing page screenshots
  app.post("/api/analyze-landing-page", async (req, res) => {
    try {
      const { imageBase64, mimeType = "image/png", mode = "mdx" } = req.body;

      if (!imageBase64) {
        return res.status(400).json({ error: "Nenhuma imagem foi fornecida." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({
          error: "A chave API do Gemini (GEMINI_API_KEY) não está configurada.",
        });
      }

      // Remove data URL prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

      const promptMdx = `Você é um engenheiro de software e designer UI/UX especialista em engenharia reversa de landing pages de alta conversão.
Analise detalhadamente a imagem da landing page fornecida e gere uma documentação técnica completa em formato MDX para permitir a recriação exata da página.

Sua resposta DEVE estar em formato MDX puro e conter impreterivelmente as seguintes 6 seções organizadas:

# Documentação de Engenharia Reversa: Landing Page [Nome Identificado/Sugerido]

Apresente uma breve introdução do produto e estilo visual identificado na imagem.

---

# 1. Design System

Descreva a estética visual, conceito de cores e superfícies.
Especifique detalhadamente:
- Cores Principais (Primary, Hover, Accent, Success/Economic) com Hex, RGB e HSL.
- Superfícies e Backgrounds (Fundo da página, Cards, Elementos elevados, Bordas).
- Textos (Títulos, Corpo, Muted, Contrastes).
- Gradientes utilizados na imagem (botões, badges, overlays).
- Opacidades, sombras e efeitos de transparência (blur, backdrop-filter, box-shadows).

# 2. Tipografia

Defina a hierarquia tipográfica identificada ou ideal para reprodução exata:
- Família tipográfica recomendada (ex: Plus Jakarta Sans, Inter, Outfit).
- Tabela com Nível (Hero H1, Section H2, Card H3, Subtítulo, Body, Badge, Preço Hero), Tamanho Desktop, Tamanho Mobile, Peso (Regular, Bold, ExtraBold), Line Height e Letter Spacing.

# 3. Layout e Estrutura Responsiva

Descreva a estrutura do funil de conversão:
- Largura máxima do container (ex: 1120px / max-w-6xl).
- Padding de seções em desktop e mobile.
- Grid de colunas para features, depoimentos, categorias e cards.
- Breakpoints responsivos recomendados.

# 4. Componentes Detalhados

Detalhamento componente por componente:
- Top Announcement Bar / Header / Hero Section.
- Cards de benefícios, listas, métricas, bônus, depoimentos, FAQ e precificação/checkout.
- Estilo exato dos botões CTA (padding, border-radius, sombras, hover, tipografia).

# 5. CSS e Tailwind Equivalente

Forneça pelo menos 5 trechos de código HTML com classes Tailwind CSS v4 prontas para cópia direta reproduzindo os elementos mais marcantes da imagem:
1. Botão CTA Principal
2. Badge Pill Promocional
3. Título Hero H1 com Texto em Gradiente
4. Card de Conteúdo Escuro/Elevado
5. Card de Preço / Checkout Hero

# 6. Tokens de Design (Variáveis CSS)

Forneça o bloco de código CSS :root completo com todas as variáveis (--primary, --background, --surface-card, --text-primary, --border-subtle, --shadow-cta, --gradient-cta, etc.) pronto para uso em um projeto web.

Responda exclusivamente em português do Brasil com alto nível técnico, precisão visual e clareza. Não inclua conversas ou justificativas fora do MDX.`;

      const promptHtml = `Você é um Desenvolvedor Frontend Sênior Especialista em Tailwind CSS.
Sua missão é atuar como um "clonador" perfeito. Analise a imagem da landing page fornecida e escreva o código HTML 5 COMPLETO, usando classes utilitárias do Tailwind CSS, para reproduzir a página inteira de forma visualmente idêntica e responsiva.

REGRAS OBRIGATÓRIAS:
1. O código deve ser um documento HTML 5 válido (<!DOCTYPE html>).
2. Inclua a tag <script src="https://cdn.tailwindcss.com"></script> no <head>.
3. Inclua a tag <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"> para ícones, se precisar, ou use SVG puro.
4. Você DEVE usar estilos inline de Tailwind (classes) para TUDO: cores, tamanhos, fontes, backgrounds, gradientes, flexbox, grids, paddings e margens. Se houver uma cor hexadecimal específica, use o suporte arbitrário do Tailwind (ex: bg-[#13141c], text-[#e4e4e7]).
5. A página deve ser responsiva. Use modificadores (ex: sm:, md:, lg:).
6. Preencha todos os textos, títulos, botões exatamente como aparecem na imagem.
7. Substitua imagens decorativas e avatares que não puder gerar por placeholders (ex: https://via.placeholder.com/150) ou divs coloridas.
8. Retorne EXCLUSIVAMENTE o código HTML completo. NENHUM texto antes, NENHUM texto depois. Pode usar o bloco \`\`\`html no início, mas não precisa de introduções ou conclusões.`;

      const prompt = mode === "html" ? promptHtml : promptMdx;

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: {
          parts: [
            {
              inlineData: {
                mimeType,
                data: cleanBase64,
              },
            },
            { text: prompt },
          ],
        },
      });

      const mdxContent = response.text || "Erro ao extrair conteúdo MDX da resposta.";

      res.json({ mdxContent });
    } catch (error: any) {
      console.error("Erro na análise da landing page:", error);
      res.status(500).json({
        error:
          error?.message ||
          "Ocorreu um erro interno ao processar a imagem com a IA Gemini.",
      });
    }
  });

  // API route to generate the final HTML page using Gemini
  app.post("/api/generate-page", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Nenhum prompt fornecido." });
      }

      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({
          error: "A chave API do Gemini (GEMINI_API_KEY) não está configurada no servidor.",
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: {
          parts: [{ text: prompt }],
        },
      });

      let htmlContent = response.text || "";
      // Remove possible markdown formatting from Gemini response
      htmlContent = htmlContent.replace(/```html/g, "").replace(/```/g, "").trim();

      res.json({ html: htmlContent });
    } catch (error: any) {
      console.error("Erro na geração da página:", error);
      res.status(500).json({
        error: error?.message || "Erro interno ao gerar a página.",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
