const { chromium } = require('playwright');
(async()=>{
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  await page.goto('http://localhost:6006/?path=/docs/components-button--docs', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(1200);
  const frame = page.frame({ name: 'storybook-preview-iframe' }) || page.frames().find(f => f.url().includes('iframe.html'));
  const info = await frame.$eval('.button-docs-hero .docs-copy', (el) => ({
    text: el.textContent.trim(),
    fontSize: getComputedStyle(el).fontSize,
    lineHeight: getComputedStyle(el).lineHeight,
    fontWeight: getComputedStyle(el).fontWeight,
  }));
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
