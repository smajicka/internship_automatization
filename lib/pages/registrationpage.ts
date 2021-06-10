import { By } from "selenium-webdriver";
import {driver} from "../../driver-factory";

export class Registrationpage  {

    url = "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
    genderMale = driver.findElement(By.id('id_gender1'));
    genderFemale = driver.findElement(By.id('id_gender2'));
    firstName = driver.findElement(By.id("customer_firstname"));
    lastName = driver.findElement(By.id("customer_lastname"));
    password = driver.findElement(By.id("passwd"));
    birthDateDaySelect = driver.findElement(By.id("days"));
    birthDateMonthSelect = driver.findElement(By.id("months"));
    birthDateYearSelect = driver.findElement(By.id("years"));
    birthDateDay = driver.findElement(By.id("uniform-days"));
    birthDateMonth = driver.findElement(By.id("uniform-months"));
    birthDateYear = driver.findElement(By.id("uniform-years"));
    address= driver.findElement(By.id("address1"));
    city = driver.findElement(By.id("city"));
    state = driver.findElement(By.id("id_state"));
    stateSelect = driver.findElement(By.id("uniform-id_state"));
    zipCode = driver.findElement(By.id("postcode"));
    county  = driver.findElement(By.id("uniform-id_country"));
    countrySelect = driver.findElement(By.id("id_country"));
    mobilePhone = driver.findElement(By.id("phone_mobile"));
    registerButton = driver.findElement(By.id("submitAccount"))
}
