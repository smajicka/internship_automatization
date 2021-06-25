import { By, WebDriver } from 'selenium-webdriver';
import 'selenium-webdriver/chrome';
import { Setup } from './setup';

export class ElementLocator {
type: string;
locatorId: string;
driver: WebDriver;

constructor(type: string, locatorId:string) {
    this.type = type;
    this.locatorId = locatorId;
    this.driver = Setup.getInstance().driver;
}

async getElement() {
    return this.driver.findElement(this.getLocator());
}

getLocator() {
    switch (this.type.toLowerCase()) {
    case 'id':
    return By.id(this.locatorId);

    case 'class':
    return By.className(this.locatorId);

    case 'css':
    return By.css(this.locatorId);

    case 'linktext':
    return By.linkText(this.locatorId);

    case 'xpath':
    return By.xpath(this.locatorId);

    case 'name':
    return By.name(this.locatorId);
}
}
}