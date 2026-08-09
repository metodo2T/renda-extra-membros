# Plano de Implementação: Área de Membros (Galeria de Modelos)

Você solicitou uma alteração estrutural no aplicativo para adotar o formato de uma **Área de Membros**. O visual atual será mantido, mas a tela inicial agora exibirá um acervo de modelos (templates) dispostos em grid, semelhantes ao design enviado no print.

## User Review Required

> [!WARNING]
> **Sobre o botão "Prompt" e o Formulário (Quiz)**
> Atualmente, nós temos aquele Quiz (Briefing Form) que pergunta as dores e promessas do usuário ANTES de gerar o prompt. 
> Com a nova interface, quando o aluno clicar em **"Prompt"** no card, o que deve acontecer?
> **Opção A:** Ele vai para o Quiz responder as perguntas e, no final, o sistema entrega o Prompt final já preenchido com as informações dele para ele copiar.
> **Opção B:** Abre uma janela imediatamente com o "Prompt Genérico" (com espaços em branco tipo `[NOME DO PRODUTO]`) para ele copiar e colar no ChatGPT/Claude e preencher lá.
> **Como você prefere?**

## Proposed Changes

### 1. Novo Componente: `MemberArea.tsx`
- **Estrutura:** 
  - Header de navegação superior (Início, Tutoriais, Modelos, etc.).
  - Título Hero "Modelos Disponíveis" e botões de Filtro (Todos, Páginas Completas, etc.).
  - Grid de Cards (estilo Masonry/Grid responsivo).
- **Cards:**
  - Imagem de capa do template.
  - Título e Categoria.
  - 3 Botões em formato "Pill": `Preview`, `Baixar`, `Prompt`.

### 2. Ações dos Botões
- **[ Preview ]**: Abre um modal (ou tela cheia) renderizando o código HTML cru do template para o aluno ver como é o design real.
- **[ Baixar ]**: Gera um download do arquivo `.html` (ou `.zip`) do template original.
- **[ Prompt ]**: *A definir (conforme a pergunta acima).* Mostrará o texto do prompt pronto para cópia.

### 3. Ajuste no `App.tsx`
- O `HeroBanner` e o fluxo atual serão desativados.
- O `App.tsx` iniciará diretamente no componente `MemberArea.tsx`.

## Verification Plan
1. Recriar a interface do print utilizando Tailwind CSS, mantendo o fundo escuro (`bg-[#0a0a0a]`) e os efeitos de vidro (glassmorphism).
2. Adicionar dados mocados no `models.ts` para popular a galeria com imagens variadas simulando os vários modelos do print.
3. Testar a ação de Preview carregando um HTML mocado no iframe.
4. Testar a ação de Download.
