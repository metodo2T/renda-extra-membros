import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', error => console.error('BROWSER ERROR:', error.message));
  
  await page.goto('http://localhost:3000');
  
  // Wait a bit
  await new Promise(r => setTimeout(r, 2000));
  
  // Try to click Elementos tab
  try {
    const tabs = await page.$$('button');
    for (const tab of tabs) {
      const text = await page.evaluate(el => el.textContent, tab);
      if (text && text.includes('Elementos')) {
        await tab.click();
        console.log('Clicked Elementos tab');
      }
    }
  } catch(e) {
    console.error('Could not click Elementos:', e.message);
  }
  
  await new Promise(r => setTimeout(r, 2000));
  
  await browser.close();
})();
