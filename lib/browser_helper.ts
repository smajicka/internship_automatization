import {driver} from "../driver-factory";
import {Key, until} from "selenium-webdriver"
import { ElementLocator } from "./element_locator";
import { elementIsNotVisible } from "selenium-webdriver/lib/until";


export class BrowserHelper{

 
async sleep(number){
  ElementLocator
  return new Promise((resolve) => {
    setTimeout (resolve, number);
  });
}

async click (elementLocator: ElementLocator) {
  return (await elementLocator.getElement()).click();
} 

async HoverOver (elementLocator: ElementLocator) {
  return driver.actions().mouseMove(await elementLocator.getElement());
}

 
 async enter(elementLocator: ElementLocator){
  return await (await elementLocator.getElement()).sendKeys(Key.ENTER);
    }


async enterText(elementLocator: ElementLocator, text: any){
  return await (await elementLocator.getElement()).sendKeys(text);
  
  }

async getValue(elementLocator : ElementLocator){
  (await elementLocator.getElement()).getAttribute("value");
  return  
  }
  
async setToPage (url){
  this.sleep(10000)
  return driver.get(url);
  }
  
async generateMail (){
let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
let mail = '';
for(var i=0; i<15; i++){
    mail += chars[Math.floor(Math.random() * chars.length)];
}
return (mail + '@domain.com');
}

async generateName (){
  let first = "A"
  let chars = 'abcdefghijklmnopqrstuvwxyz';
  let name = '';
  for(var i=0; i<8; i++){
      name += chars[Math.floor(Math.random() * chars.length)];
  }
    return (first + name );}

    
async getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;}

async selector(elementLocator : ElementLocator, option){
  var value;
  if (option == "state"){
    var min = 1;
    var max = 50;
  }
  else if (option == "coutry"){
    value = 1;
  }

 value = this.getRandomInt(min,max);

  var iterator = 0;
  while( value<iterator){
    driver.wait;
    await(await elementLocator.getElement()).sendKeys(Key.ARROW_DOWN);
    iterator++;
  }
 
  (await elementLocator.getElement()).sendKeys(Key.ENTER);
  }

async generateZip (){
    let numbers = '0123456789';
    let zip = '';
    for(var i=0; i<5; i++){
        zip += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return zip;

  }

  async generateMobile (){
    let numbers = '0123456789';
    let number = '';
    for(var i=0; i<12; i++){
        number += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return "+" + number;

  }

  async generateAdress (){
    let first = "N"
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let address = '';
    for(var i=0; i<9; i++){
        address += chars[Math.floor(Math.random() * chars.length)];
    }
      return (first + " " + address + " 11");}
   
    async waitUntilElementLocated(elementLocator: ElementLocator, waitTime = 5000) {
        return driver.wait(until.elementLocated(elementLocator.getLocator()), waitTime).catch(async function (error: any) {
          console.error(error);
          console.error("For: " + elementLocator.getLocator());
          return false;
        });
      }
          
   
    async waitUntilElementIsVisible(elementLocator: ElementLocator, waitTime = 10000) {
        await this.waitUntilElementLocated(elementLocator, waitTime==10000 ? 5000 : waitTime );
        return driver.wait(until.elementIsVisible(await elementLocator.getElement()), waitTime).catch(async function (error: any) {
          console.error(error);
          console.error("For:" + elementLocator.getLocator());
          return false;
        });
      }

async maximizeWindow(){
  return await driver.manage().window().maximize();
}


}
