import {Builder, WebDriver, Capabilities } from "selenium-webdriver";
import "selenium-webdriver/chrome"
import 'chromedriver';
import set from "../config";


export class Setup{

    private static instance: Setup;

    url: string;
    browser: string;
    browserVersion: string;
    driver: WebDriver = null;
    enviroment : Enviroment;

    constructor (){
    this.url = this.enviroment.url;
    this.browser = this.enviroment.browser;
    this.newDriver();
    jest.setTimeout(70000);
    }

    public static getInstance(): Setup {
        return Setup.instance;}

    private newDriver() {
    return this.driver = new Builder().forBrowser(this.browser).build();
    }    


            
}