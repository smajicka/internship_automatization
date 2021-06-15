import { ElementLocator } from "../element_locator";

export class Purchasedetails {
 
    proceed = new ElementLocator("class", "button btn btn-default standard-checkout button-medium");
    processAdress = new ElementLocator ("name", "processAddress");
    acceptTerms = new ElementLocator ("id", "cgv");
    processShipping = new ElementLocator ("name", "processCarrier");
    paymentOptionWire = new ElementLocator ("class", "bankwire");
    confirmOrder = new ElementLocator ("class","button btn btn-default button-medium");
}