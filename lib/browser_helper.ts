import { driver } from "../driver-factory";
import { Key, until } from "selenium-webdriver"
import { ElementLocator } from "./element_locator";

export class BrowserHelper {

async sleep(number) {
return new Promise((resolve) => {
setTimeout(resolve, number);
});
}

async click(elementLocator: ElementLocator) {
return (await elementLocator.getElement()).click();
}

async enter(elementLocator: ElementLocator) {
return await (await elementLocator.getElement()).sendKeys(Key.ENTER);
}

async enterText(elementLocator: ElementLocator, text: any) {
return await (await elementLocator.getElement()).sendKeys(text);
}
  
async checkText(elementLocator: ElementLocator){
var recived = await(await (elementLocator.getElement())).getAttribute("value");
}

async hoverOver(elementLocator: ElementLocator) {
var element = await elementLocator.getElement();
var mouse = driver.actions({async: true});
await mouse.move({origin:element}).perform();
}

async scrollTo (elementLocator: ElementLocator){
var element = await elementLocator.getElement();
await driver.executeScript('arguments[0].scrollIntoView()', element);
}

async getValue(elementLocator: ElementLocator) {
return (await elementLocator.getElement()).getAttribute("value");
}

async setToPage(url: string) {
this.sleep(10000)
return driver.get(url);
}

async getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

async selectOption(elementLocator: ElementLocator, option) {
var value;
if (option == "state") {
var min = 1;
var max = 50;
}
else if (option == "coutry") {
value = 1;
}
value = this.getRandomInt(min, max);
var iterator = 0;
while (value < iterator) {
driver.wait;
await (await elementLocator.getElement()).sendKeys(Key.ARROW_DOWN);
iterator++;
}
(await elementLocator.getElement()).sendKeys(Key.ENTER);}

async waitUntilElementLocated(elementLocator: ElementLocator, waitTime = 5000) {
return driver.wait(until.elementLocated(elementLocator.getLocator()), waitTime).catch(async function (error: any) {
console.error(error);
console.error("For: " + elementLocator.getLocator());
return false;
});
}

async waitUntilElementIsVisible(elementLocator: ElementLocator, waitTime = 10000) {
await this.waitUntilElementLocated(elementLocator, waitTime == 10000 ? 5000 : waitTime);
return driver.wait(until.elementIsVisible(await elementLocator.getElement()), waitTime).catch(async function (error: any) {
console.error(error);
console.error("For:" + elementLocator.getLocator());
return false;});
}

async maximizeWindow() {
return await driver.manage().window().maximize();
}}
