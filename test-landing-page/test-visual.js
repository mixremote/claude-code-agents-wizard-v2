const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('=== TESTING INDEX.HTML ===');
  await page.goto('http://localhost:8080/index.html');
  await page.screenshot({ path: '/tmp/screenshot-index.png', fullPage: true });
  console.log('Screenshot taken: index.html');
  
  const indexTitle = await page.title();
  console.log('Title:', indexTitle);
  
  const heroHeading = await page.textContent('.hero h2');
  console.log('Hero heading:', heroHeading);
  
  const navLinks = await page.$$eval('.nav-menu a', links => links.map(a => ({ text: a.textContent, href: a.getAttribute('href') })));
  console.log('Nav links:', JSON.stringify(navLinks));
  
  console.log('\n=== TESTING NAVIGATION TO ABOUT.HTML ===');
  await page.click('a[href="about.html"]');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/tmp/screenshot-about.png', fullPage: true });
  console.log('Screenshot taken: about.html');
  
  const aboutTitle = await page.title();
  console.log('Title:', aboutTitle);
  
  const aboutHeading = await page.textContent('.hero h2');
  console.log('Hero heading:', aboutHeading);
  
  console.log('\n=== TESTING NAVIGATION TO CONTACT.HTML ===');
  await page.click('a[href="contact.html"]');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/tmp/screenshot-contact.png', fullPage: true });
  console.log('Screenshot taken: contact.html');
  
  const contactTitle = await page.title();
  console.log('Title:', contactTitle);
  
  const contactHeading = await page.textContent('.hero h2');
  console.log('Hero heading:', contactHeading);
  
  const formInputs = await page.$$eval('.contact-form input, .contact-form textarea', inputs => 
    inputs.map(i => ({ type: i.type || 'textarea', id: i.id, placeholder: i.placeholder }))
  );
  console.log('Form inputs:', JSON.stringify(formInputs));
  
  console.log('\n=== TESTING FOOTER NAVIGATION ===');
  await page.click('footer a[href="index.html"]');
  await page.waitForLoadState('networkidle');
  const backToHome = await page.title();
  console.log('Back to home, title:', backToHome);
  
  console.log('\n=== ALL NAVIGATION TESTS PASSED ===');
  
  await browser.close();
})();
