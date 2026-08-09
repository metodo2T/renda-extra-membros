const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function run() {
  // Start server
  const server = spawn('npx', ['http-server', 'dist', '-p', '9090'], { shell: true });
  
  // Give it a second to start
  await new Promise(r => setTimeout(r, 2000));

  console.log('Launching puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  console.log('Navigating to local server...');
  await page.goto('http://127.0.0.1:9090', { waitUntil: 'networkidle0' });
  
  // Wait a bit more for any animations or state
  await new Promise(r => setTimeout(r, 1000));

  // Get the HTML content
  const html = await page.content();
  
  fs.writeFileSync(path.join(__dirname, 'static-extract.html'), html);
  console.log('Saved to static-extract.html');
  
  await browser.close();
  server.kill();
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
