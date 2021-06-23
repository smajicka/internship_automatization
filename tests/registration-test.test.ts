import {BrowserHelper} from "../lib/browser-helper";
import {Generator} from "../lib/value-generator";
import {Setup} from "../lib/set-up";
import {PageObjectFactory} from "../lib/pages/page-object-factory";

let browser = new BrowserHelper();
let page = new PageObjectFactory();
let generator = new Generator();
let homePage = page.getHomePage();
let myAccountPage = page.getAccountPage();
let registrationPage = page.getRegistrationPage();
let set = Setup.getInstance();

beforeAll ( async () =>{
await browser.setToPage(set.url);
});

describe('Click on the Sign in button at the homepage', () => {
it('Sign in and Registration forms are dispayed', async () => {
await browser.waitUntilElementIsVisible(homePage.signButton,60000);
await browser.click(homePage.signButton);
await browser.checkUrl(myAccountPage.urlAuthentication);})
})

describe('Enter e-mail to start the registration process', () => {
it('E-mail is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(myAccountPage.enterMail,60000);
await browser.enterText(myAccountPage.enterMail, await generator.generateMail());   
await browser.checkText(myAccountPage.enterMail);})
})

describe('Click on the Register button', () => {
it('Registration page is displayed', async () => {
await browser.click(myAccountPage.createAccount);
await browser.waitUntilElementIsVisible(registrationPage.registrationForm,60000)
await browser.checkUrl(registrationPage.urlCreation)})
})

describe('Fill in the registration form', () => {
it('Title is chosen', async () => {
await browser.waitUntilElementIsVisible(registrationPage.genderFemale,60000);
await browser.click(registrationPage.genderFemale);  
})

it('First name is entered', async () => {
await browser.click(registrationPage.firstName);
await browser.enterText(registrationPage.firstName, await generator.generateName());
await browser.checkText(registrationPage.firstName);
})

it('Last name is entered', async () => {
await browser.click(registrationPage.lastName);
await browser.enterText(registrationPage.lastName, await generator.generateName());
await browser.checkText(registrationPage.lastName);
})
   
it('Password is sucesfully entered', async () => {
await browser.waitUntilElementIsVisible(registrationPage.password,60000);
await browser.enterText(registrationPage.password, "pksa27"); 
await browser.checkText(registrationPage.password);  
});
   
it('Address is entered', async () => {
await browser.click(registrationPage.address);
await browser.enterText(registrationPage.address, await generator.generateAdress());
await browser.checkText(registrationPage.address);
})

it('City is entered', async () => {
await browser.click(registrationPage.city);
await browser.enterText(registrationPage.city, await generator.generateName()); 
})

it('State is selected', async () => {
await browser.waitUntilElementIsVisible(registrationPage.state,70000);
await browser.click(registrationPage.state);
await browser.click(registrationPage.stateOption);
})

it('Zip code is entered', async () => {
await browser.click(registrationPage.zipCode)
await browser.enterText(registrationPage.zipCode, await generator.generateZip()); 
})

it('Country is selected', async () => {
await browser.waitUntilElementIsVisible(registrationPage.country,70000);
await browser.click(registrationPage.country);
await browser.selectOption(registrationPage.country, "country");
})

it('Mobile number is entered', async () => {
await browser.enterText(registrationPage.mobilePhone, await  generator.generateMobile());  
await browser.checkText(registrationPage.mobilePhone);
})

it('Registration button is clicked', async () => {
await browser.click(registrationPage.registerButton);
await browser.checkUrl(myAccountPage.url);
})
});

afterAll ( async () =>{
await set.quitDriver();
});


