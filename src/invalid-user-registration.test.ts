import {BrowserHelper} from "../lib/browser-helper";
import {Generator} from "../lib/value-generator";
import {Setup} from "../lib/setup";
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
    it('Sign in and Registration forms are displayed', async () => {
        await browser.waitUntilElementIsVisible(homePage.signButton,60000);
        await browser.click(homePage.signButton);
        await browser.checkUrl(myAccountPage.urlAuthentication);
    })
})

describe('Enter e-mail to start the registration process', () => {
    it('E-mail is successfully entered', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.enterMail,60000);
        await browser.enterText(myAccountPage.enterMail, "anymail@domain.com");   
        await browser.checkText(myAccountPage.enterMail);
    })
})

describe('Click on the Register button', () => {
    it('Registration page is displayed', async () => {
        await browser.click(myAccountPage.createAccount);
        await browser.waitUntilElementIsVisible(registrationPage.registrationForm,60000);
        await browser.checkUrl(registrationPage.urlCreation);
    });
});

describe('Fill in the registration form', () => {
    it('Title is chosen', async () => {
        await browser.waitUntilElementIsVisible(registrationPage.genderFemale,60000);
        await browser.click(registrationPage.genderFemale);  
    });

    it('First name is entered', async () => {
        await browser.click(registrationPage.firstName);
        await browser.enterText(registrationPage.firstName, await generator.generateName());
        await browser.checkText(registrationPage.firstName);
    });

    it('Recognise that last name is left empty, form appears red', async () => {
        await browser.click(registrationPage.lastName);
        await browser.clickTab(registrationPage.lastName);
        await browser.checkRedColor(registrationPage.lastName);
    });
      
    it('Recognise that password is too short, form appears red', async () => {
        await browser.waitUntilElementIsVisible(registrationPage.password,60000);
        await browser.enterText(registrationPage.password, "p"); 
        await browser.clickTab(registrationPage.password);
        await browser.checkRedColor(registrationPage.password);
        
    });
   
    it('Address is entered', async () => {
        await browser.click(registrationPage.address);
        await browser.enterText(registrationPage.address, await generator.generateAdress());
        await browser.checkText(registrationPage.address);
    });

    it('City is entered', async () => {
        await browser.click(registrationPage.city);
        await browser.enterText(registrationPage.city, await generator.generateName()); 
    });

    it('State is selected', async () => {
        await browser.waitUntilElementIsVisible(registrationPage.state,70000);
        await browser.click(registrationPage.state);
        await browser.click(registrationPage.stateOption);
    });

    it('Zip code is entered', async () => {
        await browser.click(registrationPage.zipCode);
        await browser.enterText(registrationPage.zipCode, generator.generateZip()); 

    });

    it('Mobile number is entered', async () => {
        await browser.enterText(registrationPage.mobilePhone, await  generator.generateMobile());  
        await browser.checkText(registrationPage.mobilePhone);
    });

    it('Registration button is clicked, user stays on the registration page', async () => {
        await browser.click(registrationPage.registerButton);
        await browser.waitUntilElementLocated (registrationPage.registerButton);
        await browser.checkElement (registrationPage.registerButton);
    });

    it('Error message is displayed', async () => {
        await browser.waitUntilElementIsVisible(myAccountPage.errorMessage);
        await browser.checkElement(myAccountPage.errorMessage);
    });
});

afterAll ( async () =>{
    await set.quitDriver();
});

