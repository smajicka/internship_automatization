import {describe, expect, it, beforeAll } from "@jest/globals";
import {driver} from "../driver-factory";
import {BrowserHelper} from "../lib/browser_helper";
import set from "../config"
import {PageObjectFactory} from "../lib/pages/page_factory";



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
await  browser.waitUntilElementIsVisible(homepage.signButton,40000);
await browser.click(homepage.signButton);})
})

describe('Enter valid data to sign in', () => {
it('E-mail is sucessfully entered', async () => {
await  browser.waitUntilElementIsVisible(my_accountpage.enterMailOld,40000 );
await browser.enterText(my_accountpage.enterMailOld, "selma.smajic99@gmail.com"); 
})

it('Password is sucessfully entered', async () => {
await  browser.waitUntilElementIsVisible(my_accountpage.enterPass,40000 );
await browser.enterText(my_accountpage.enterPass, "pr@ksa27");})
})

describe('Click on the Sign in button', () => {
it('Registration page is displayed', async () => {
await browser.click(my_accountpage.signIn);})
})

describe('Add item to cart using popular section on the homepage', () => {
it('User is redirected to the homepage', async () => {
await  browser.waitUntilElementIsVisible(my_accountpage.home,4000 );
await browser.click(my_accountpage.home);
})

it('Popular section is found', async () => {
await  browser.waitUntilElementIsVisible(homepage.popular,4000 );
await browser.scrollTo(homepage.popular);
})

it('Choose item from the popluar section', async () => {
await browser.scrollTo(homepage.itemPopular);
await browser.waitUntilElementIsVisible(homepage.itemPopular,4000); 
await browser.hoverOver(homepage.itemPopular);
})
   
it('Add item to the cart', async () => {
await  browser.waitUntilElementIsVisible(homepage.addToCart,40000 );
await browser.click(homepage.addToCart);
})

it('Click on proceed to check out', async () => {
await  browser.waitUntilElementIsVisible(homepage.proceed,40000 );
await browser.click(homepage.proceed);
})

it('Validate purchase summary', async () => {
await  browser.waitUntilElementIsVisible(purchase.proceed,40000 );
await browser.click(purchase.proceed); 
})

it('Validate adress summary', async () => {
await  browser.waitUntilElementIsVisible(purchase.processAdress,40000 );
await browser.click(purchase.processAdress); 
})

it('Accept terms and conditions ', async () => {
await browser.scrollTo(purchase.acceptTerms);
await browser.waitUntilElementIsVisible(purchase.acceptTerms,40000);
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

