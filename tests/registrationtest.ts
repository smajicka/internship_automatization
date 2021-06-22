import {describe, it, beforeAll } from "@jest/globals";
import {BrowserHelper} from "../lib/browser-helper";
import {Generator} from "../lib/value_generator";
import {Setup} from "../lib/setup";
import {PageObjectFactory} from "../lib/pages/page-object-factory";

let browser = new BrowserHelper();
let pageobj = new PageObjectFactory();
let generator = new Generator();
let homepage = pageobj.getHomePage();
let myaccountpage = pageobj.getAccountPage();
let registrationpage = pageobj.getRegistrationPage();
let set =  Setup.getInstance();
let mail : string;

beforeAll ( async () =>{
await browser.setToPage(set.url);
mail = await generator.generateMail();
});

describe('Click Sign in button at the homepage', () => {
it('Sign in and Registration forms dispayed', async () => {
await browser.waitUntilElementIsVisible(homepage.signButton,60000);
await browser.click(homepage.signButton);
await browser.checkUrl(myaccountpage.urlAuthentication);})
})

describe('Enter e-mail to start the registration process ', () => {
it('E-mail is sucessfully entered', async () => {
await browser.waitUntilElementIsVisible(myaccountpage.enterMail,60000);
await browser.enterText(myaccountpage.enterMail, mail);   
await browser.checkText(myaccountpage.enterMail);})
})

describe('Click on the Register button', () => {
it('Registration page is displayed', async () => {
await browser.click(myaccountpage.createAccount);
await browser.waitUntilElementIsVisible(registrationpage.registrationForm,60000)
await browser.checkUrl(registrationpage.urlCreation)})
})

describe('Filling in the registration form', () => {
it('Title is chosen', async () => {
await browser.waitUntilElementIsVisible(registrationpage.genderFemale,60000);
await browser.click(registrationpage.genderFemale);  
})

it('First name is entered', async () => {
await browser.click(registrationpage.firstName);
await browser.enterText(registrationpage.firstName, await generator.generateName());
await browser.checkText(registrationpage.firstName);
})

it('Last name is entered', async () => {
await browser.click(registrationpage.lastName);
await browser.enterText(registrationpage.lastName, await  generator.generateName());
await browser.checkText(registrationpage.lastName);
})
   
it('Password is sucesfully entered', async () => {
await browser.waitUntilElementIsVisible(registrationpage.password,60000);
await browser.enterText(registrationpage.password, "pra@ksa27"); 
await browser.checkText(registrationpage.password);  
});
   
it('Address is entered', async () => {
await browser.click(registrationpage.address);
await browser.enterText(registrationpage.address, await generator.generateAdress());
await browser.checkText(registrationpage.address);
})

it('City is entered', async () => {
await browser.click(registrationpage.city);
await browser.enterText(registrationpage.city, await generator.generateName()); 
})

it('State is selected', async () => {
await browser.waitUntilElementIsVisible(registrationpage.state,70000);
await browser.click(registrationpage.state);
await browser.click(registrationpage.stateOption);
})

it('Zip code is entered', async () => {
await browser.click(registrationpage.zipCode)
await browser.enterText(registrationpage.zipCode, await  generator.generateZip()); 
})

it('Country is selected', async () => {
await browser.waitUntilElementIsVisible(registrationpage.country,70000);
await browser.click(registrationpage.country);
await browser.selectOption(registrationpage.country, "country");
})

it('Mobile number is entered', async () => {
await browser.enterText(registrationpage.mobilePhone, await  generator.generateMobile());  
await browser.checkText(registrationpage.mobilePhone);
})

it('Registration button clicked', async () => {
await browser.click(registrationpage.registerButton);
await browser.checkUrl(myaccountpage.url);
})
});

afterAll ( async () =>{
await Setup.getInstance().quitDriver();
});


