import json
import os

with open('static-extract.html', 'r', encoding='utf-8') as f:
    raw_html = f.read()

root_start = '<div id="root">'
body_content = raw_html[raw_html.find(root_start) + len(root_start):]
body_content = body_content[:body_content.rfind('</div>')]

banner_string = 'group relative bg-white/90 hover:bg-white border border-purple-200 hover:border-purple-400/80 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl shadow-purple-950/5 hover:shadow-purple-900/15 cursor-pointer overflow-hidden transform hover:-translate-y-0.5'
body_content = body_content.replace(banner_string, 'onclick="openPortfolioModal()" ' + banner_string)

modal_html = """
  <!-- Portfolio Showcase Modal -->
  <div id="portfolio-modal" class="fixed inset-0 z-50 items-center justify-center p-4 bg-purple-950/40 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">
    <div class="relative w-full max-w-2xl max-h-[85vh] bg-white border border-purple-200 rounded-3xl text-slate-900 shadow-2xl flex flex-col overflow-hidden transform scale-95 transition-transform duration-300" id="portfolio-modal-content">
      <!-- Modal Header -->
      <div class="p-6 border-b border-purple-100 flex items-center justify-between bg-purple-50/60">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
          <h2 class="text-xl font-bold text-purple-950">
            <span class="font-light">Port</span>
            <span class="font-extrabold">folio</span> - Maria Santos
          </h2>
        </div>
        <button onclick="closePortfolioModal()" class="text-purple-400 hover:text-purple-950 p-1 rounded-full hover:bg-purple-100 transition-colors cursor-pointer">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Modal Content / Gallery -->
      <div class="p-6 overflow-y-auto space-y-6">
        <p class="text-sm text-purple-900/80 leading-relaxed font-medium">
          Confira alguns dos projetos recentes de design gráfico, sites e artes sob medida desenvolvidos para negócios e marcas de sucesso:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Project 1 -->
          <div class="bg-purple-50/50 border border-purple-200/80 rounded-2xl overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-sm">
            <div class="h-32 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute top-2 left-2 bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-[10px] text-purple-100 font-semibold px-2 py-0.5 rounded-full">
                Criação de Sites
              </div>
            </div>
            <div class="p-3">
              <h4 class="font-bold text-sm text-purple-950 mb-1 group-hover:text-purple-700 transition-colors">Um site acima da media para seu negócio.</h4>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-purple-50/50 border border-purple-200/80 rounded-2xl overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-sm">
            <div class="h-32 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute top-2 left-2 bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-[10px] text-purple-100 font-semibold px-2 py-0.5 rounded-full">
                Identidade Visual
              </div>
            </div>
            <div class="p-3">
              <h4 class="font-bold text-sm text-purple-950 mb-1 group-hover:text-purple-700 transition-colors">Sua marca com presença marcante e profissional.</h4>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-purple-50/50 border border-purple-200/80 rounded-2xl overflow-hidden group hover:border-purple-400 transition-all duration-300 shadow-sm">
            <div class="h-32 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute top-2 left-2 bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-[10px] text-purple-100 font-semibold px-2 py-0.5 rounded-full">
                Artes para Redes Sociais
              </div>
            </div>
            <div class="p-3">
              <h4 class="font-bold text-sm text-purple-950 mb-1 group-hover:text-purple-700 transition-colors">Designs estratégicos que encantam e convertem.</h4>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-100/80 via-purple-50 to-purple-100/80 p-4 rounded-2xl border border-purple-200 text-center">
          <h4 class="text-sm font-bold text-purple-950 mb-1">Quer um projeto sob medida para seu negócio?</h4>
          <p class="text-xs text-purple-800/80 mb-3">Solicite um orçamento sem compromisso diretamente no WhatsApp.</p>
          <a href="#" class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer">
            <span>Solicitar Orçamento</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <script>
    function openPortfolioModal() {
      const modal = document.getElementById('portfolio-modal');
      const content = document.getElementById('portfolio-modal-content');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      // trigger reflow
      void modal.offsetWidth;
      modal.classList.remove('opacity-0');
      content.classList.remove('scale-95');
    }

    function closePortfolioModal() {
      const modal = document.getElementById('portfolio-modal');
      const content = document.getElementById('portfolio-modal-content');
      modal.classList.add('opacity-0');
      content.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }, 300);
    }
  </script>
"""

final_html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Maria Santos | Social Media</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {{ font-family: 'Montserrat', sans-serif; color: #1e112a; }}
    .bg-textured-light {{
      background-color: #f8f6fb;
      background-image: 
        radial-gradient(at 0% 0%, rgba(216, 180, 254, 0.25) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(192, 132, 252, 0.20) 0px, transparent 50%),
        radial-gradient(at 50% 50%, rgba(243, 232, 255, 0.5) 0px, transparent 100%),
        radial-gradient(rgba(147, 51, 234, 0.08) 1.2px, transparent 1.2px);
      background-size: 100% 100%, 100% 100%, 100% 100%, 20px 20px;
    }}
    @keyframes marquee {{
      0% {{ transform: translateX(0%); }}
      100% {{ transform: translateX(-50%); }}
    }}
    .animate-marquee {{
      display: flex;
      width: max-content;
      animation: marquee 20s linear infinite;
    }}
    .animate-marquee:hover {{
      animation-play-state: paused;
    }}
    ::-webkit-scrollbar {{ width: 6px; }}
    ::-webkit-scrollbar-track {{ background: #f1edf8; }}
    ::-webkit-scrollbar-thumb {{ background: #c084fc; border-radius: 3px; }}
    ::-webkit-scrollbar-thumb:hover {{ background: #a855f7; }}
  </style>
</head>
<body class="bg-textured-light text-slate-900 selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
{body_content}
{modal_html}
</body>
</html>"""

# Now write the final HTML to a file so we can view it
with open("final-static.html", "w", encoding="utf-8") as f:
    f.write(final_html)

prompt_str = f"""export const linkNaBio02Prompt = `Você é um especialista em Copywriting e Posicionamento Digital.
Sua missão é reescrever APENAS OS TEXTOS (copy) de uma página de "Link na Bio", mantendo TODA a estrutura HTML, classes CSS (Tailwind), links de imagens e ícones exatamente como estão.

SOBRE A PÁGINA ORIGINAL (BASE):
- Produto/Serviço: Profissional de Social Media
- Nicho original: Social Media, Design, Marketing, Agências.
- Cores/Estilo: Tons de roxo e fúcsia, estilo tech/moderno e dinâmico, tipografia Montserrat.

=======================================================
INSTRUÇÕES CRÍTICAS - LEIA ATENTAMENTE:
=======================================================
- O HTML retornado DEVE conter as MESMAS classes Tailwind e IDs originais.
- NÃO altere atributos de imagens, ícones SVG ou a estrutura de divs.
- Substitua todos os textos, mantendo o tom do novo profissional.
- A HIERARQUIA DA PÁGINA NÃO DEVE SER MUDADA DE FORMA ALGUMA.
- Crie perguntas estratégicas para extrair do cliente o texto ideal para cada um dos botões, modal e seções.

Aqui está a estrutura de conteúdo original que deve ser substituída para o NOVO cliente.

CONTEÚDO ORIGINAL:

[Header Topo]
MS (Iniciais)
MARIA SANTOS
Social Media

[Marquee de Imagens]
(NÃO ALTERAR AS IMAGENS, MAS SE HOUVER TEXTO, ADAPTE SE NECESSÁRIO)

[Nome Principal]
MARIA SANTOS
Social Media

[Sessão Sobre Mim]
Sobre Mim
Sou Maria Eduarda, atuo como Social Media especialista em transformar a presença digital de marcas. Crio estratégias de conteúdo visual, design marcante e posicionamento de alto impacto para atrair e engajar seu público ideal.

[Links que vão te ajudar]
Links que vão te ajudar

[Botão 1]
Orçamento
Fale comigo no WhatsApp

[Botão 2]
Meu site
Acesse agora meu site

[Botão 3]
Youtube
Se Inscreva no Canal

[Botão 4]
Tiktok
Me siga no tiktok

[Botão 5]
Instagram
Me siga no instagram

[Rodapé]
Todos os direitos reservados

=======================================================
Aqui está o código HTML original para você basear sua resposta (modifique apenas os textos visíveis e mantenha exatamente o HTML intacto):

{final_html}
`;
"""

output_path = os.path.join('..', '..', '..', 'src', 'data', 'templates', 'linkNaBio02Prompt.ts')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(prompt_str)
print("Updated prompt!")
