import {BrowserHelper} from "../lib/browser-helper";
import {Setup} from "../lib/setup";
import {PageObjectFactory} from "../lib/pages/page-object-factory";

let browser = new BrowserHelper();
let page = new PageObjectFactory();
let myAccountPage = page.getAccountPage();
let set = Setup.getInstance();

beforeAll ( async () =>{
    await browser.setToPage(set.url);
});

describe('Click on the Sign in button at the homepage', () => {
    it('Sign in and Registration forms are dispayed', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.signButton,60000);
        await browser.click(myAccountPage.signButton);
        await browser.checkUrl(myAccountPage.urlAuthentication);
    })
})

describe('Enter invalid e-mail under create an account', () => {
    it('Invalid e-mail is recognised, form appears red', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.enterMail,60000);
        await browser.enterText(myAccountPage.enterMail, "Anytext");   
        await browser.click(myAccountPage.createAccountForm);
        await browser.checkRedColor(myAccountPage.enterMail);
    })  
})

describe('Click on the Register button', () => {
    it('Error message is dispayed', async () => {
        await browser.click(myAccountPage.createAccount);
        await browser.waitUntilElementIsVisible(myAccountPage.invalidMailError,60000);
        await browser.checkElement(myAccountPage.invalidMailError);
    })
    
    it('User stays on the same webpage', async () => {
        await browser.checkUrl(myAccountPage.urlAuthentication);
    })
});

afterAll ( async () =>{
    await set.quitDriver();
});