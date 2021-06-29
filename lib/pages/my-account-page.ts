import { ElementLocator } from "../element-locator";
import { Setup } from "../setup";
import { Objects } from "./objects";

export class MyAccountPage extends Objects{
    url = Setup.getInstance().url + "?controller=my-account";
    urlAuthentication = Setup.getInstance().url + "?controller=authentication&back=my-account";
    enterMail = new ElementLocator("id",'email_create');
    createAccount = new ElementLocator ("name", ('SubmitCreate'));
    enterMailOld = new ElementLocator ("id", "email");
    enterPass = new ElementLocator ("id", "passwd");
    signIn = new ElementLocator ("id", "SubmitLogin");
    home = new ElementLocator ("class","home");    
    authenticationTitle = new ElementLocator ("class", "page-heading");
    createAccountForm = new ElementLocator("class", "col-xs-12 col-sm-6");
    invalidMailError = new ElementLocator ("id","create_account_error");
}

