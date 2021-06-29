import {BrowserHelper} from "../lib/browser-helper";
import {PageObjectFactory} from "../lib/pages/page-object-factory";
import {Setup} from "../lib/setup";

let browser = new BrowserHelper();
let page = new PageObjectFactory();
let myAccountPage = page.getAccountPage();
let set =  Setup.getInstance();

beforeAll ( async () =>{
    await browser.setToPage(set.url);
});

describe('Click Sign in button at the homepage', () => {
    it('Sign in and Registration forms dispayed', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.signButton,40000);
        await browser.click(myAccountPage.signButton);
        await browser.checkUrl(myAccountPage.urlAuthentication);
    })
})

describe('Enter data to sign in', () => {
    it('Invalid e-mail is recognised, form appears red', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.enterMailOld,40000);
        await browser.enterText(myAccountPage.enterMailOld, "Anytext");
        await browser.click(myAccountPage.enterPass);
        await browser.checkRedColor(myAccountPage.enterMailOld);
    })

    it('Password is sucessfully entered', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.enterPass,40000);
        await browser.enterText(myAccountPage.enterPass, set.password); 
        await browser.checkText(myAccountPage.enterPass);
    })
})

describe('Click on the Sign in button', () => {
    it('Error message is shown', async () => {
        await browser.click(myAccountPage.signIn);
        await browser.checkElement(myAccountPage.errorMessage);
    })
    it('User stays on the same webpage', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.signIn);
        await browser.checkElement(myAccountPage.signIn);
    })
})

afterAll ( async () =>{
    await set.quitDriver();
});