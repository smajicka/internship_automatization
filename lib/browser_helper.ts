import {driver} from "../driver-factory";
import {Key, WebElementPromise} from "selenium-webdriver"

export class BrowserHelper{

async sleep(number){
  return new Promise((resolve) => {
    setTimeout (resolve, number);
  });
}

async click (WebElement) {
  return WebElement.click();
} 

async enterText(WebElement, string){
  await WebElement.sendKeys(string);
  let result = await WebElement.getText();
  let test = expect(result).toEqual(string);
  return test; 
  }

async hoverOver(WebElement, ){


}
async moveDownTo(WebElement){
  const actions = driver.actions({async: true});
  actions.move(WebElement);
}

getText(WebElement){
return WebElement.getText();
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

    
     getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;}

async selector(WebElement, period){
  var value;
  if (period == "day"){
     var min = 1;
     var max = 31
  } 
  else if (period == "month"){
    var min = 1;
    var max = 12;
  }
  else if (period =="year"){
    var min = 18;
    var max = 100;
  }
  else if (period == "state"){
    var min = 1;
    var max = 50;
  }
  else if (period == "coutry"){
    value = 1;
  }

 value = this.getRandomInt(min,max);

  var iterator = 0;
  while( value<iterator){
    driver.wait;
    await WebElement.sendKeys(Key.ARROW_DOWN)
    iterator++;
  }
  driver.wait;
  await WebElement.sendKeys(Key.ENTER);
  driver.wait;
  const enteredValue = (await WebElement).getText();
  expect (enteredValue).toEqual("value");
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

}

