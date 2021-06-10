import {Builder, WebDriver, Capabilities } from "selenium-webdriver";
import "selenium-webdriver/chrome"
import config from "../config";

export class Setup{

    private static instance: Setup;

    url: String;
    browser: String;
    browserVersion: String;

    constructor (){
    this.url = config.url;
    this.browser = config.browser;}

    public static getInstance(): Setup {
        return Setup.instance;}
}