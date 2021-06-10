import { By } from "selenium-webdriver";
import {driver} from "../driver-factory";

class registrationpage  {

    url = "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
    genderFemale = driver.findElement(By.id('id_gender2'));
    firstName = driver.findElement(By.id("customer_firstname"));
    lastName = driver.findElement(By.id("customer_lastname"));
    password = driver.findElement(By.id("passwd"));
    birthDateDay = driver.findElement(By.id("uniform-days"));
    birthDateMonth = driver.findElement(By.id("uniform-months"));
    birthDateYear = driver.findElement(By.id("uniform-years"));
    address= driver.findElement(By.id("address1"));
    city = driver.findElement(By.id("city"));
    state = driver.findElement(By.id("id_state"));
    zipCode = driver.findElement(By.id("postcode"));
    county  = driver.findElement(By.id("uniform-id_country"));
    mobilePhone = driver.findElement(By.id("phone_mobile"));
          
}
export default new registrationpage();