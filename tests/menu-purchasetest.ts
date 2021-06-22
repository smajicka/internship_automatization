import {describe, it, beforeAll } from "@jest/globals";
import {BrowserHelper} from "../lib/browser-helper";
import {PageObjectFactory} from "../lib/pages/page-object-factory";
import {Setup} from "../lib/setup";

let browser = new BrowserHelper();
let pageObj = new PageObjectFactory();
let homepage = pageObj.getHomePage();
let myaccountpage = pageObj.getAccountPage();
let purchase = pageObj.getPurchasePage();
let object = pageObj.getObjects();
let set =  Setup.getInstance();

beforeAll ( async () =>{
await browser.setToPage(set.url);
});

describe('Click Sign in button at the homepage', () => {
it('Sign in and Registration forms dispayed', async () => {
await browser.waitUntilElementIsVisible(homepage.signButton,40000);
await browser.click(homepage.signButton);
await browser.checkUrl(myaccountpage.urlAuthentication);})
})

describe('Enter valid data to sign in', () => {
it('E-mail is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.enterMailOld,40000);
await browser.enterText(myaccountpage.enterMailOld, "selma.smajic99@gmail.com");
await browser.checkText(myaccountpage.enterMailOld);
})

it('Password is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.enterPass,40000);
await browser.enterText(myaccountpage.enterPass, "pr@ksa27"); })
})

describe('Click on the Sign in button', () => {
it('Account page is displayed', async () => {
await browser.click(myaccountpage.signIn);
await browser.checkUrl(myaccountpage.url)})
})

describe('Add item to cart using menu', () => {
it('User is redirected to the homepage', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.home,4000);
await browser.click(myaccountpage.home);
await browser.checkUrl(set.url);
})

it('Menu is found', async () => {
await browser.waitUntilElementIsVisible(object.menu,4000);
})

it('Evening dresses category is selected', async () => {
await browser.waitUntilElementIsVisible(object.womenTab,4000);
await browser.hoverOver(object.womenTab);
await browser.waitUntilElementIsVisible(object.eveningDresses,4000);
await browser.click(object.eveningDresses);
})
   
it('Add item to the cart', async () => {
await browser.hoverOver(object.eveningDress);
await browser.waitUntilElementIsVisible(purchase.addToCartSearch,40000);
await browser.click(purchase.addToCartSearch);
await browser.checkElement(purchase.preview)
})

it('Click on proceed to check out', async () => {
await browser.waitUntilElementIsVisible(homepage.proceed,40000);
await browser.click(homepage.proceed);
})

it('Validate purchase summary', async () => {
await browser.waitUntilElementIsVisible(purchase.proceed,40000);
await browser.click(purchase.proceed); 
})

it('Validate address summary', async () => {
await browser.waitUntilElementIsVisible(purchase.processAdress,40000);
await browser.click(purchase.processAdress); 
})

it('Accept terms and conditions ', async () => {
await browser.waitUntilElementIsVisible(purchase.acceptTerms,40000);
await browser.click(purchase.acceptTerms); 
})

it('Validate summary details', async () => {
await browser.waitUntilElementIsVisible(purchase.processShipping,40000);
await browser.click(purchase.processShipping); 
})

it('Select payment option', async () => {
await browser.waitUntilElementIsVisible(purchase.paymentOptionWire,40000);
await browser.click(purchase.paymentOptionWire); 
})

it('Confirm order', async () => {
await browser.waitUntilElementIsVisible(purchase.confirmOrder,40000);
await browser.click(purchase.confirmOrder); 
})
})

afterAll ( async () =>{
await Setup.getInstance().quitDriver();
});