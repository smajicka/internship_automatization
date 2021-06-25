import { Key, until, WebDriver } from "selenium-webdriver"
import { ElementLocator } from "./element-locator";
import { Setup } from "./setup";

export class BrowserHelper {

driver: WebDriver;
constructor(){
this.driver = Setup.getInstance().driver
}

async setToPage(url: string) {
    return this.driver.get(url);
}

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
    var text = await this.getText(elementLocator);
    var recieved : Boolean;
    recieved= (text != null);
    expect(recieved).toBe(true);
}

async checkElement(elementLocator:ElementLocator){
    await this.waitUntilElementIsVisible(elementLocator);
    expect(await(await elementLocator.getElement()).isDisplayed()).toBe(true);  
}

async getValue(elementLocator: ElementLocator) {
    return (await elementLocator.getElement()).getAttribute("value");
}

async getText (elementLocator: ElementLocator){
    return (await elementLocator.getElement()).getText();
}
    
async hoverOver(elementLocator: ElementLocator) {
    var element = await elementLocator.getElement();
    var mouse = this.driver.actions({async: true});
    await mouse.move({origin:element}).perform();
}

async scrollTo (elementLocator: ElementLocator){
    var element = await elementLocator.getElement();
    await this.driver.executeScript('arguments[0].scrollIntoView()', element);
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
    else if (option == "country") {
        value = 1;
    }
    value = this.getRandomInt(min, max);
    var iterator = 0;
    while (value < iterator) {
    this.driver.wait;
    await (await elementLocator.getElement()).sendKeys(Key.ARROW_DOWN);
    iterator++;
    }
    (await elementLocator.getElement()).sendKeys(Key.ENTER);
}

async waitUntilElementLocated(elementLocator: ElementLocator, waitTime = 5000) {
    return this.driver.wait(until.elementLocated(elementLocator.getLocator()), waitTime).catch(async function (error: any) {
        console.error(error);
        console.error("For: " + elementLocator.getLocator());
        return false;
    });
}

async waitUntilElementIsVisible(elementLocator: ElementLocator, waitTime = 100000) {
    await this.waitUntilElementLocated(elementLocator, waitTime == 100000 ? 50000 : waitTime);
    return this.driver.wait(until.elementIsVisible(await elementLocator.getElement()), waitTime).catch(async function (error: any) {
        console.error(error);
        console.error("For:" + elementLocator.getLocator());
        return false;
    });
}

async checkUrl(url: string){
    const currentUrl = await this.driver.getCurrentUrl();
    expect(url).toEqual(currentUrl); 
}
}
