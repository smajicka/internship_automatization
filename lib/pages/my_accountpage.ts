import { By } from "selenium-webdriver";
import {driver} from "../../driver-factory";
import { ElementLocator } from "../element_locator";
export class My_accountpage {
    
    url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";
    enterMail = new ElementLocator("id",'email_create');
    createAccount = new ElementLocator ("name", ('SubmitCreate'));
    enterMailOld = new ElementLocator ("id", "email");
    enterPass = new ElementLocator ("id", "passwd");
    signIn = new ElementLocator ("id", "SubmitLogin");
    home = new ElementLocator ("name", "home");
    
    
}

