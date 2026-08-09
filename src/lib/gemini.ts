import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
// Note: We use import.meta.env.VITE_GEMINI_API_KEY in Vite
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function generateUniqueTitle(prompt: string, category: string, gender: string): Promise<string> {
  if (!genAI) {
    throw new Error('Chave de API do Gemini não configurada (VITE_GEMINI_API_KEY).');
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const systemInstruction = `
Você é um especialista criativo em banco de imagens premium. 
Sua tarefa é criar UM ÚNICO TÍTULO CURTO e atrativo (máximo de 4 a 5 palavras) para uma foto, baseando-se no prompt em inglês que gerou a imagem.
- A categoria atual é: "${category}".
- O gênero/público-alvo é: "${gender}".
- O título deve ser em Português do Brasil.
- O título deve soar sofisticado, como "Retrato Editorial Executivo" ou "Estúdio Médico Elegante".
- NÃO retorne aspas, explicações, nem mais de um título. Apenas a frase do título final.
  `;

  const userMessage = `Crie um título para o seguinte prompt: "${prompt}"`;

  try {
    const result = await model.generateContent([
      { text: systemInstruction },
      { text: userMessage }
    ]);
    const response = await result.response;
    return response.text().trim().replace(/['"]/g, ''); // Remove quotes if any
  } catch (error) {
    console.error('Error generating title with Gemini:', error);
    throw error;
  }
}
