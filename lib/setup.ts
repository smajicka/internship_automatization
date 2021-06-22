import {Builder, WebDriver} from "selenium-webdriver";
import "selenium-webdriver/chrome"
import 'chromedriver';

export class Setup{

private static instance: Setup;

url: string;
browser: string;
driver: WebDriver = null; 

constructor (){
const fs = require ("fs");
const yaml = require ("js-yaml");
const create = yaml.load(fs.readFileSync("./enviroment.yaml"))

this.url = create.url;
this.browser = create.browser;
this.newDriver();
jest.setTimeout(80000);
}

public static getInstance(): Setup {
if(!Setup.instance) {Setup.instance = new Setup();}

return Setup.instance;}

private newDriver() : void  {
if(this.driver==null){
this.driver = new Builder().forBrowser(this.browser).build();
this.driver.manage().window().maximize();}
}    

quitDriver() : void {
this.driver.quit();
}

}