import {BrowserHelper} from "../lib/browser-helper";
import {PageObjectFactory} from "../lib/pages/page-object-factory";
import {Setup} from "../lib/setup";
import { Generator } from "../lib/value-generator";

let browser = new BrowserHelper();
let page = new PageObjectFactory();
let generator = new Generator();
let homePage = page.getHomePage();
let myAccountPage = page.getAccountPage();
let purchase = page.getPurchasePage();
let set =  Setup.getInstance();

beforeAll ( async () =>{
await browser.setToPage(set.url);
});

describe('Click Sign in button at the homepage', () => {
    it('Sign in and Registration forms dispayed', async () => {
        await browser.waitUntilElementIsVisible(homePage.signButton,40000);
        await browser.click(homePage.signButton);
        await browser.checkUrl(myAccountPage.urlAuthentication);
    })
})

describe('Enter valid data to sign in', () => {
    it('E-mail is sucessfully entered', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.enterMailOld,40000 );
        await browser.enterText(myAccountPage.enterMailOld, generator.getRegisteredMail()); 
        await browser.checkText(myAccountPage.enterMail);
    })

    it('Password is sucessfully entered', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.enterPass,40000 );
        await browser.enterText(myAccountPage.enterPass, set.password);
    })
})

describe('Click on the Sign in button', () => {
    it('My account page is displayed', async () => {
        await browser.click(myAccountPage.signIn);
        await browser.checkUrl(myAccountPage.url);
    })
})

describe('Add item to cart using popular section on the homepage', () => {
    it('User is redirected to the homepage', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.home,60000);
        await browser.click(myAccountPage.home);
        await browser.checkUrl(set.url);
    })

    it('Popular section is found', async () => {
        await browser.waitUntilElementIsVisible(homePage.popular,60000);
        await browser.scrollTo(homePage.popular);
    })  

    it('Choose item from the popular section', async () => {
        await browser.scrollTo(homePage.itemPopular);
        await browser.waitUntilElementIsVisible(homePage.itemPopular,60000); 
        await browser.hoverOver(homePage.itemPopular);
    })
   
    it('Add item to the cart', async () => {
        await browser.waitUntilElementIsVisible(homePage.addToCart,60000);
        await browser.click(homePage.addToCart);
        await browser.checkElement(purchase.preview);
    })

    it('Click on proceed to check out', async () => {
        await browser.waitUntilElementIsVisible(homePage.proceed,40000);
        await browser.click(homePage.proceed);
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
        await browser.scrollTo(purchase.acceptTerms);
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

afterAll ( async() => {
    await set.quitDriver();
})