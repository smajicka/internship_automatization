import {describe, it, beforeAll } from "@jest/globals";
import {BrowserHelper} from "../lib/browser-helper";
import {Setup} from "../lib/setup";
import {PageObjectFactory} from "../lib/pages/page-object-factory";

let browser = new BrowserHelper();
let pageobj = new  PageObjectFactory();
let homepage = pageobj.getHomePage();
let myaccountpage = pageobj.getAccountPage();
let purchase = pageobj.getPurchasePage();
let search = pageobj.getSearchResults ();
let set =  Setup.getInstance();

beforeAll ( async () =>{
await browser.setToPage(set.url);
});

describe('Click Sign in button at the homepage', () => {
it('Sign in and Registration forms dispayed', async () => {
await  browser.waitUntilElementIsVisible(homepage.signButton,40000);
await browser.click(homepage.signButton);
await browser.checkUrl(myaccountpage.urlAuthentication);})
})

describe('Enter valid data to sign in', () => {
it('E-mail is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.enterMailOld,40000);
await browser.enterText(myaccountpage.enterMailOld, "selma.smajic99@gmail.com"); 
await browser.checkText(myaccountpage.enterMail);
})

it('Password is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.enterPass,40000);
await browser.enterText(myaccountpage.enterPass, "pr@ksa27");})
})

describe('Click on the Sign in button', () => {
it('User account page is displayed', async () => {
await browser.click(myaccountpage.signIn);
await browser.checkUrl(myaccountpage.url)})
})

describe('Add item to cart using searchbar', () => {
it('User is redirected to the homepage', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.home,4000);
await browser.click(myaccountpage.home);
})

it('Enter item you want to find in the search bar', async () => {
await browser.waitUntilElementIsVisible(homepage.searchbar,4000);
await browser.enterText(homepage.searchbar, "blouse");
await browser.enter(homepage.searchbar);
})

it('Hover over the item offered', async () => {
await browser.waitUntilElementIsVisible(search.blouse,4000);
await browser.hoverOver(search.blouse)
})
   
it('Add item to the cart', async () => {
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
await  browser.waitUntilElementIsVisible(purchase.paymentOptionWire,40000);
await browser.click(purchase.paymentOptionWire); 
})

it('Confirm order', async () => {
await  browser.waitUntilElementIsVisible(purchase.confirmOrder,40000);
await browser.click(purchase.confirmOrder); 
})})
 
afterAll ( async() => {
await Setup.getInstance().quitDriver();
})

