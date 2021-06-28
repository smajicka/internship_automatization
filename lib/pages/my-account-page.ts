import { ElementLocator } from "../element-locator";
import { Setup } from "../setup";

export class MyAccountPage {
    url = Setup.getInstance().url + "?controller=my-account";
    urlAuthentication = Setup.getInstance().url + "?controller=authentication&back=my-account";
    enterMail = new ElementLocator("id",'email_create');
    createAccount = new ElementLocator ("name", ('SubmitCreate'));
    enterMailOld = new ElementLocator ("id", "email");
    enterPass = new ElementLocator ("id", "passwd");
    signIn = new ElementLocator ("id", "SubmitLogin");
    home = new ElementLocator ("class","home");    
    authenticationTitle = new ElementLocator ("class", "page-heading")
}

