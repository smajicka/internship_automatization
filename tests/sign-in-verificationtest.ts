import {BrowserHelper} from "../lib/browser-helper";
import set from "../config"
import { PageObjectFactory} from "../lib/pages/page-object-factory";

let browser = new BrowserHelper();
let pageobj = new  PageObjectFactory();
let homepage = pageobj.getHomePage();
let myaccountpage = pageobj.getAccountPage();


beforeAll ( async () =>{
await browser.setToPage(set.url);
await browser.maximizeWindow();
});

describe('Click Sign in button at the homepage', () => {
it('Sign in and Registration forms dispayed', async () => {
await  browser.waitUntilElementIsVisible(homepage.signButton,40000);
await browser.click(homepage.signButton);})
})

describe('Enter invalid data to sign in', () => {
it('Input form appears red', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.enterMailOld,40000);
await browser.enterText(myaccountpage.enterMailOld, "selmagmail.com"); 
await browser.waitUntilElementIsVisible(myaccountpage.enterPass,40000);
await browser.enterText(myaccountpage.enterPass, "ksa27");
expect 

})

it('Error message is shown', async () => {
await browser.click(myaccountpage.signIn);})
expect ( )
})

