import {describe, expect, it } from "@jest/globals";
import {By, until, WebElementCondition} from "selenium-webdriver";
import {driver} from "../driver-factory";
import homepage from "../pages/homepage";
import my_accountpage from "../pages/my_accountpage";
import helper from "../browser_helper";
import set from "../config"
import registrationpage from "../pages/registrationpage";


describe('executing test scenario for the sign in button on the hompepage', () => {
   it('it performs a validation of functionality of the sign in button', async () => {
     driver.get(set.url);
     driver.wait;
     driver.wait(until.elementIsVisible(homepage.signButton),40000);
     helper.click(homepage.signButton);
     driver.wait(until.urlIs(my_accountpage.url));
     const myaccountUrl = await driver.getCurrentUrl();
     expect (myaccountUrl).toEqual(my_accountpage.url);    
  })
})

describe('executing test scenario for entering e-mail for the registration ', () => {
   it('it performs a validation of functionality of e-mail text form', async () => {
      driver.wait(until.elementIsVisible(my_accountpage.enterMail), 40000);
      helper.enterText(my_accountpage.enterMail, "rer@hotmail.com"); })
   })

describe('executing test scenario for redirection to the registration page', () => {
   it('it performs a validation of functionality of the create an account button', async () => {
     helper.click(my_accountpage.createAccount);
     driver.wait(until.urlIs(registrationpage.url));
     const registrationpageUrl = driver.getCurrentUrl();
     expect (registrationpageUrl).toEqual(registrationpage.url);
  })
})
describe('filling in the registration form', () => {
   it('it performs a validation of functionality of the title button', async () => {
     driver.wait(until.elementIsVisible(registrationpage.genderFemale));
     helper.click(registrationpage.genderFemale);
  })
  it('it performs a validation of entering first name in text box', async () => {
   helper.click(registrationpage.firstName);
   driver.wait;
   helper.enterText(registrationpage.firstName, "Kanita");
   driver.wait;
   const newName = (await registrationpage.firstName).getText;
   expect (newName).toEqual("Kanita");
})
it('it performs a validation of entering last name in text box', async () => {
   helper.click(registrationpage.lastName);
   driver.wait;
   helper.enterText(registrationpage.lastName, "Dizdar");
   driver.wait;
   const newName = (await registrationpage.lastName).getText;
   expect (newName).toEqual("Dizdar");
})

it('it performs a validation of selecting and entering day of birthdate', async () => {
   helper.click(registrationpage.birthDateDaySelect);
   driver.wait;
   helper.enterText(registrationpage.birthDateDay, "23");
   driver.wait;
   const newBirthDay = (await registrationpage.birthDateDay).getText;
   expect (newBirthDay).toEqual("23");
})
it('it performs a validation of selecting and entering month of birthdate', async () => {
   helper.click(registrationpage.birthDateMonthSelect);
   driver.wait;
   helper.enterText(registrationpage.birthDateMonth, "June");
   driver.wait;
   const newBirthMonth = (await registrationpage.birthDateMonth).getText;
   expect (newBirthMonth).toEqual("June");
})
it('it performs a validation of selecting and entering year of birthdate', async () => {
   helper.click(registrationpage.birthDateYearSelect);
   driver.wait;
   helper.enterText(registrationpage.birthDateYear, "1981");
   driver.wait;
   const newBirthDay = (await registrationpage.birthDateYear).getText;
   expect (newBirthDay).toEqual("1981");
})
it('it performs a validation of entering adress in text box', async () => {
   helper.click(registrationpage.address);
   driver.wait;
   helper.enterText(registrationpage.address, "Park Ave 1310");
   driver.wait;
   const newAddress = (await registrationpage.address).getText;
   expect (newAddress).toEqual("Park Ave 1310");
})
it('it performs a validation of entering city', async () => {
   helper.click(registrationpage.city);
   driver.wait;
   helper.enterText(registrationpage.city, "Loganville");
   driver.wait;
   const newCity = (await registrationpage.city).getText;
   expect (newCity).toEqual("Loganville");
})
it('it performs a validation of selecting and entering state', async () => {
   helper.click(registrationpage.stateSelect);
   driver.wait;
   helper.enterText(registrationpage.state, "Georgia");
   driver.wait;
   const newState = (await registrationpage.state).getText();
   expect (newState).toEqual("Georgia");
})
it('it performs a validation entering zip code', async () => {
   helper.enterText(registrationpage.zipCode, "30052");
   driver.wait;
   const newZip = (await registrationpage.zipCode).getText();
   expect (newZip).toEqual("Georgia");
})
it('it performs a validation of selecting and entering country', async () => {
   helper.click(registrationpage.countrySelect);
   driver.wait;
   helper.enterText(registrationpage.county, "United States");
   driver.wait;
   const newCountry = (await registrationpage.county).getText();
   expect (newCountry).toEqual("United States");
})
it('it performs a validation of entering mobile number', async () => {
    helper.enterText(registrationpage.mobilePhone, "+17705701140");
    driver.wait;
   const newNumber = (await registrationpage.mobilePhone).getText();
   expect (newNumber).toEqual("+17705701140");
})
it('it performs a validation of Register button', async () => {
   helper.click(registrationpage.registerButton);
   driver.wait;
  const newUrl = (await driver).getCurrentUrl();
  expect (newUrl).toEqual(my_accountpage.url);
})



})

