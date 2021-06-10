import { By } from "selenium-webdriver";
import {driver} from "../../driver-factory";

export class My_accountpage {
    
    url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";
    enterMail = driver.findElement(By.id('email_create'));
    createAccount = driver.findElement(By.name('SubmitCreate'));
    
}

