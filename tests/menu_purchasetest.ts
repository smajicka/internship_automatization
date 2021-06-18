import {describe, expect, it, beforeAll } from "@jest/globals";
import { until} from "selenium-webdriver";
import {driver} from "../driver-factory";
import {BrowserHelper} from "../lib/browser_helper";
import set from "../config"
import {PageObjectFactory} from "../lib/pages/pageobjectfactory";

let browser = new BrowserHelper();
let pageObj = new PageObjectFactory();
let homepage = pageObj.getHomePage();
let my_accountpage = pageObj.getAccountPage();
let purchase = pageObj.getPurchasePage();

jest.setTimeout(70000);

beforeAll ( async () =>{
await browser.setToPage(set.url);
await browser.maximizeWindow();
});

describe('Click Sign in button at the homepage', () => {
it('Sign in and Registration forms dispayed', async () => {
await browser.waitUntilElementIsVisible(homepage.signButton,40000);
await browser.click(homepage.signButton);})
})

describe('Enter valid data to sign in', () => {
it('E-mail is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(my_accountpage.enterMailOld,40000);
await browser.enterText(my_accountpage.enterMailOld, "selma.smajic99@gmail.com");
})

it('Password is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(my_accountpage.enterPass,40000);
await browser.enterText(my_accountpage.enterPass, "pr@ksa27"); })
})

describe('Click on the Sign in button', () => {
it('Registration page is displayed', async () => {
await browser.click(my_accountpage.signIn);})
})

describe('Add item to cart using menu', () => {
it('User is redirected to the homepage', async () => {
await browser.waitUntilElementIsVisible(my_accountpage.home,4000);
await browser.click(my_accountpage.home);
})

it('Menu is found', async () => {
await browser.waitUntilElementIsVisible(homepage.menu,4000);
})

it('Evening dresses category is selected', async () => {
await browser.waitUntilElementIsVisible(homepage.womenTab,4000);
await browser.hoverOver(homepage.womenTab);
await browser.waitUntilElementIsVisible(homepage.eveningDresses,4000);
await browser.click(homepage.eveningDresses);
})
   
it('Add item to the cart', async () => {
await browser.hoverOver(homepage.eveningDress);
await  browser.waitUntilElementIsVisible(purchase.addToCartSearch,40000);
await browser.click(purchase.addToCartSearch);
})

it('Click on proceed to check out', async () => {
await  browser.waitUntilElementIsVisible(homepage.proceed,40000);
await browser.click(homepage.proceed);
})

it('Validate purchase summary', async () => {
await  browser.waitUntilElementIsVisible(purchase.proceed,40000);
await browser.click(purchase.proceed); 
})

it('Validate adress summary', async () => {
await  browser.waitUntilElementIsVisible(purchase.processAdress,40000);
await browser.click(purchase.processAdress); 
})

it('Accept terms and conditions ', async () => {
await  browser.waitUntilElementIsVisible(purchase.acceptTerms,40000);
await browser.click(purchase.acceptTerms); 
})

it('Validate summary details', async () => {
await  browser.waitUntilElementIsVisible(purchase.processShipping,40000);
await browser.click(purchase.processShipping); 
})

it('Select payment option', async () => {
await  browser.waitUntilElementIsVisible(purchase.paymentOptionWire,40000);
await browser.click(purchase.paymentOptionWire); 
})

it('Confirm order', async () => {
await  browser.waitUntilElementIsVisible(purchase.confirmOrder,40000);
await browser.click(purchase.confirmOrder); 
})
})

afterAll ( async() => {
await driver.quit();
})