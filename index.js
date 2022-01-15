const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php', {delay: 3000});

  await page.type('[name="endereco"]', '60175-055');
  await page.waitForTimeout(2000).then(() => console.log('Waited a second!'));

  
  await page.keyboard.press('Enter',{delay:500});
 
  await page.screenshot({ path: 'endereco.png'});

  await page.waitForTimeout(2000).then(() => console.log('Waited a second!'));


  await browser.close(); 
 
 
})();