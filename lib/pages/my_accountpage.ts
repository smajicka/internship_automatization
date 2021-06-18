import { ElementLocator } from "../element_locator";

export class My_accountpage {
    
    enterMail = new ElementLocator("id",'email_create');
    createAccount = new ElementLocator ("name", ('SubmitCreate'));
    enterMailOld = new ElementLocator ("id", "email");
    enterPass = new ElementLocator ("id", "passwd");
    signIn = new ElementLocator ("id", "SubmitLogin");
    home = new ElementLocator ("xpath", "/html/body/div/div[2]/div/div[1]/a");
       
}

