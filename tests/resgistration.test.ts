import {describe, expect, it, beforeAll } from "@jest/globals";
import { until} from "selenium-webdriver";
import {driver} from "../driver-factory";
import {BrowserHelper} from "../lib/browser_helper";
import set from "../config"
import {PageObjectFactory} from "../lib/pages/page_factory";
import { SSL_OP_EPHEMERAL_RSA } from "constants";



let browser = new BrowserHelper();
let pageObj = new PageObjectFactory();
let homepage = pageObj.getHomePage();
let my_accountpage = pageObj.getAccountPage();
let registrationpage = pageObj.getRegistrationPage();

jest.setTimeout(70000);

beforeAll ( async () =>{
   await browser.setToPage(set.url);
   await browser.maximizeWindow();
});


describe('Click Sign in button at the homepage', () => {
   it('Sign in and Registration forms dispayed', async () => {
     await driver.wait(browser.waitUntilElementIsVisible(homepage.signButton,40000));
     await browser.click(homepage.signButton);
          
  })
})

describe('Enter e-mail to start the registration process ', () => {
   it('E-mail is sucessfully entered', async () => {
      await driver.wait(browser.waitUntilElementIsVisible(my_accountpage.enterMail,40000));
      await browser.enterText(my_accountpage.enterMail, await browser.generateMail()); })
   })

describe('Click on the Register button', () => {
   it('Registration page is displayed', async () => {
     await browser.click(my_accountpage.createAccount);
        })
})

describe('Filling in the registration form', () => {
   it('Title is chosen', async () => {
      await browser.sleep(40000);
      await driver.wait(browser.waitUntilElementIsVisible(registrationpage.genderFemale,4000));
      await browser.click(registrationpage.genderFemale);
  })

  it('First name is entered', async () => {
   await browser.click(registrationpage.firstName);
   await browser.enterText(registrationpage.firstName, await browser.generateName()); })
   
})
it('Last name is entered', async () => {
   await browser.click(registrationpage.lastName);
   await browser.enterText(registrationpage.lastName, await browser.generateName());
   })
   
it('Password is sucesfully entered', async () => {
    await driver.wait(browser.waitUntilElementIsVisible(registrationpage.password,40000));
    await browser.enterText(registrationpage.password, await browser.generateName()); })
   

it('Adress is entered', async () => {
   await browser.click(registrationpage.address);
   await browser.enterText(registrationpage.address, await browser.generateAdress());
   })

it('City is entered', async () => {
   await browser.click(registrationpage.city);
   await browser.enterText(registrationpage.city, await browser.generateName());
   })

it('State is selected', async () => {
   await driver.wait(browser.waitUntilElementIsVisible(registrationpage.state,40000));
   await browser.click(registrationpage.state);
   await browser.sleep (5000);
   await browser.selector(registrationpage.state, "state");
   
})
it('Zip code is entered', async () => {
   await browser.click(registrationpage.zipCode)
   await browser.enterText(registrationpage.zipCode, await browser.generateZip());
   
})
it('Country is selected', async () => {
   await driver.wait(browser.waitUntilElementIsVisible(registrationpage.country,40000));
   await browser.click(registrationpage.country);
   await browser.selector(registrationpage.country, "country");
   })

it('Mobile number is entered', async () => {
   await browser.enterText(registrationpage.mobilePhone, await browser.generateMobile());
   
})

it('Registration button clicked', async () => {
   await browser.click(registrationpage.registerButton);
})

afterAll ( async() => {
   await driver.sleep(10000);
   await driver.quit();
} )

