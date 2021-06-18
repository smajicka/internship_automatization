import {describe, expect, it, beforeAll } from "@jest/globals";
import {BrowserHelper} from "../lib/browser_helper";
import { Genetaror } from "../lib/value_generator";
import {driver} from "../driver-factory";
import set from "../config"
import {PageObjectFactory} from "../lib/pages/pageobjectfactory";

let browser = new BrowserHelper();
let pageobj = new PageObjectFactory();
let generator = new Genetaror();
let homepage = pageobj.getHomePage();
let myaccountpage = pageobj.getAccountPage();
let registrationpage = pageobj.getRegistrationPage();

beforeAll ( async () =>{
await browser.setToPage(set.url);
await browser.maximizeWindow();
});

describe('Click Sign in button at the homepage', () => {
it('Sign in and Registration forms dispayed', async () => {
await  browser.waitUntilElementIsVisible(homepage.signButton,40000);
await browser.click(homepage.signButton);})
})

describe('Enter e-mail to start the registration process ', () => {
it('E-mail is sucessfully entered', async () => {
await  browser.waitUntilElementIsVisible(myaccountpage.enterMail,40000);
await browser.enterText(myaccountpage.enterMail, await generator.generateMail());})    
})

describe('Click on the Register button', () => {
it('Registration page is displayed', async () => {
await browser.click(myaccountpage.createAccount);})
})

describe('Filling in the registration form', () => {
it('Title is chosen', async () => {
await  browser.waitUntilElementIsVisible(registrationpage.genderFemale,4000);
await browser.click(registrationpage.genderFemale);  
})

it('First name is entered', async () => {
await browser.click(registrationpage.firstName);
await browser.enterText(registrationpage.firstName, await  generator.generateName());
})

it('Last name is entered', async () => {
await browser.click(registrationpage.lastName);
await browser.enterText(registrationpage.lastName, await  generator.generateName());
})
   
it('Password is sucesfully entered', async () => {
await  browser.waitUntilElementIsVisible(registrationpage.password,40000);
await browser.enterText(registrationpage.password, await  generator.generateName());   
})
   
it('Adress is entered', async () => {
await browser.click(registrationpage.address);
await browser.enterText(registrationpage.address, await  generator.generateAdress());
})

it('City is entered', async () => {
await browser.click(registrationpage.city);
await browser.enterText(registrationpage.city, await  generator.generateName()); 
})

it('State is selected', async () => {
await browser.waitUntilElementIsVisible(registrationpage.state,40000);
await browser.click(registrationpage.state);
await browser.sleep (2000);
await browser.click(registrationpage.stateOption);
})

it('Zip code is entered', async () => {
await browser.click(registrationpage.zipCode)
await browser.enterText(registrationpage.zipCode, await  generator.generateZip()); 
})

it('Country is selected', async () => {
await browser.waitUntilElementIsVisible(registrationpage.country,40000);
await browser.click(registrationpage.country);
await browser.selectOption(registrationpage.country, "country");
})

it('Mobile number is entered', async () => {
await browser.enterText(registrationpage.mobilePhone, await  generator.generateMobile());  
})

it('Registration button clicked', async () => {
await browser.click(registrationpage.registerButton);
})});

afterAll ( async() => {
await driver.quit();
})


