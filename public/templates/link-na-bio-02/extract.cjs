const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

async function renderToStatic() {
  const htmlPath = path.join(__dirname, "dist", "index.html");
  const htmlContent = fs.readFileSync(htmlPath, "utf-8");

  const dom = new JSDOM(htmlContent, {
    runScripts: "dangerously",
    resources: "usable",
    url: "file://" + htmlPath,
  });

  dom.window.console.log = () => {};
  
  // Wait for React to mount and render
  await new Promise(resolve => setTimeout(resolve, 2000));

  const renderedHtml = dom.serialize();
  
  // Extract CSS
  const cssDir = path.join(__dirname, "dist", "assets");
  const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith(".css"));
  let cssContent = "";
  for (const f of cssFiles) {
    cssContent += fs.readFileSync(path.join(cssDir, f), "utf-8") + "\n";
  }

  // Make a clean static HTML
  let finalHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Template</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    ${cssContent}
  </style>
</head>
<body class="bg-textured-light text-slate-900 selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
  ${dom.window.document.getElementById("root").innerHTML}
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, "static-extract.html"), finalHtml);
  console.log("Done");
}

renderToStatic().catch(console.error);
