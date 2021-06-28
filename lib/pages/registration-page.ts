import { ElementLocator } from "../element-locator";
import { Setup } from "../setup";

export class RegistrationPage {

    urlCreation = Setup.getInstance().url + "?controller=authentication&back=my-account";
    registrationForm = new ElementLocator("class", "account_creation");
    genderMale = new ElementLocator("id","id_gender1");
    genderFemale = new ElementLocator("id","id_gender2");
    firstName = new ElementLocator("id","customer_firstname");
    lastName = new ElementLocator("id","customer_lastname");
    email = new ElementLocator("id", "email");
    password = new ElementLocator("id","passwd");
    address= new ElementLocator("id","address1");
    city = new ElementLocator("id","city");
    state = new ElementLocator ("id","id_state");
    stateOption = new ElementLocator("css", "#id_state > option:nth-child(2)");
    zipCode = new ElementLocator("id","postcode");
    country  = new ElementLocator("id","id_country");
    mobilePhone = new ElementLocator("id","phone_mobile");
    registerButton = new ElementLocator("id","submitAccount");
}
