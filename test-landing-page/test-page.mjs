import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();
  
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push(msg.type() + ': ' + msg.text());
  });
  
  const errors = [];
  page.on('pageerror', err => {
    errors.push(err.message);
  });
  
  try {
    const htmlPath = join(__dirname, 'index.html');
    await page.goto('file://' + htmlPath);
    
    await page.waitForTimeout(1000);
    
    await page.screenshot({ path: 'screenshot-full.png', fullPage: true });
    
    const htmlStructure = await page.evaluate(() => {
      return {
        hasDoctype: document.doctype !== null,
        hasHead: !!document.head,
        hasBody: !!document.body,
        hasHeader: !!document.querySelector('header'),
        hasMain: !!document.querySelector('main'),
        hasFooter: !!document.querySelector('footer'),
        title: document.title,
        charset: document.characterSet
      };
    });
    
    console.log('=== PAGE STRUCTURE ===');
    console.log(JSON.stringify(htmlStructure, null, 2));
    
    console.log('\n=== CONSOLE MESSAGES ===');
    console.log(consoleMessages.length > 0 ? consoleMessages.join('\n') : 'No console messages');
    
    console.log('\n=== ERRORS ===');
    console.log(errors.length > 0 ? errors.join('\n') : 'No errors detected');
    
    console.log('\n=== TEST RESULT ===');
    console.log('Screenshots saved successfully');
    
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
