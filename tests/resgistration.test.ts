import {describe, expect, it, beforeAll } from "@jest/globals";
import {By, until, WebElementCondition} from "selenium-webdriver";
import {driver} from "../driver-factory";
import {BrowserHelper} from "../lib/browser_helper";
import set from "../config"
import {PageObjectFactory} from "../lib/pages/page_factory";


let browser = new BrowserHelper();
let pageObj = new PageObjectFactory();
let homepage = pageObj.getHomePage();
let my_accountpage = pageObj.getAccountPage();
let registrationpage = pageObj.getRegistrationPage();

jest.setTimeout(70000);

beforeAll ( async () =>{
   await browser.setToPage(set.url);
});


describe('Click Sign in button at the homepage', () => {
   it('Sign in and Registration forms dispayed', async () => {
     await driver.wait(until.elementIsVisible(homepage.signButton),40000);
     await browser.click(homepage.signButton);
     await driver.wait(until.urlIs(my_accountpage.url));
     const myaccountUrl = await driver.getCurrentUrl();
     expect(myaccountUrl).toEqual(my_accountpage.url);    
  })
})

describe('Enter e-mail to start the registration process ', () => {
   it('E-mail is sucessfully entered', async () => {
     await driver.wait(until.elementIsVisible(my_accountpage.enterMail), 40000);
     await browser.enterText(my_accountpage.enterMail, browser.generateMail()); })
   })

describe('Click on the Register button', () => {
   it('Registration page is displayed', async () => {
     await browser.click(my_accountpage.createAccount);
     await driver.wait(until.urlIs(registrationpage.url));
     const registrationpageUrl = driver.getCurrentUrl();
     await expect (registrationpageUrl).toEqual(registrationpage.url);
  })
})

describe('Filling in the registration form', () => {
   it('Title is chosen', async () => {
      await driver.wait(until.elementIsVisible(registrationpage.genderFemale));
      await browser.click(registrationpage.genderFemale);
  })

  it('First name is entered', async () => {
   await browser.click(registrationpage.firstName);
   await browser.enterText(registrationpage.firstName, browser.generateName()); })
   
})
it('Last name is entered', async () => {
   await browser.click(registrationpage.lastName);
   await browser.enterText(registrationpage.lastName, browser.generateName());
   })

it('Day of birthdate is selected', async () => {
   await browser.click(registrationpage.birthDateDaySelect);
   await browser.selector(registrationpage.birthDateDay, "day"); 
   
})
it('Month of birthdate is selected', async () => {
   await browser.click(registrationpage.birthDateMonthSelect);
   driver.wait;
   await browser.selector(registrationpage.birthDateMonth, "month");
 })

it("Year of birthdate is selected", async () => {
   await browser.click(registrationpage.birthDateYearSelect);
   driver.wait;
   await browser.selector(registrationpage.birthDateYear, "year");
})

it('Adress is entered', async () => {
   await browser.click(registrationpage.address);
   driver.wait;
   await browser.enterText(registrationpage.address, browser.generateAdress());
   driver.wait;
})

it('City is entered', async () => {
   await browser.click(registrationpage.city);
   driver.wait;
   await browser.enterText(registrationpage.city, browser.generateName());
   driver.wait;
})

it('State is selected', async () => {
   await browser.click(registrationpage.stateSelect);
   driver.wait;
   await browser.selector(registrationpage.state, "state");
   driver.wait;
})
it('Zip code is entered', async () => {
   await browser.click(registrationpage.zipCode)
   driver.wait;
   await browser.enterText(registrationpage.zipCode, browser.generateZip());
   driver.wait;
})
it('Country is selected', async () => {
   await browser.click(registrationpage.countrySelect);
   driver.wait;
   await browser.selector(registrationpage.county, "county");
   driver.wait;
})

it('Mobile number is entered', async () => {
   await browser.enterText(registrationpage.mobilePhone, browser.generateMobile());
   driver.wait;
})
it('Registration button clicked', async () => {
   await browser.click(registrationpage.registerButton);
   driver.wait;
  const newUrl = (await driver).getCurrentUrl();
  expect (newUrl).toEqual(my_accountpage.url);
})




