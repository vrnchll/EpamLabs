const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

const driver = new Builder().forBrowser("chrome").build();

describe('Selenium-Webdriver test', () => {


it('should change value from 650 to 5 due to filtering by size in block "650 Товары"', async () => {

  driver.get('https://www.reserved.com/ru/ru/');

  const buttNovelties = driver.findElement(By.className('sc-fHxwqH jfOjFv'));
  await buttNovelties.click();

  const buttSize = driver.findElement(By.className('sc-uJMKN kNRivP'));
  await buttSize.click();
  
  const selectedSize = driver.findElement(By.xpath('//*[@id="РазмерList"]/ul/li[5]/label/input'));
  await selectedSize.click();

  const buttFilter = driver.findElement(By.className('sc-gqjmRU bXRaMh'));
  await buttFilter.click();
 
  driver.wait(until.elementLocated(By.css('#esProductQuantity > span')))

  driver.findElement(By.css('#esProductQuantity > span')).getText().then(value => {
    assert.strictEqual(value, '5');
  })

   await driver.quit();
})
});