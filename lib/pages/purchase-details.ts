import { ElementLocator } from "../element-locator";

export class PurchaseDetails {

    preview = new ElementLocator("class","clearfix");
    proceed = new ElementLocator("class", "btn btn-default standard-checkout button-medium");
    processAdress = new ElementLocator ("name", "processAddress");
    acceptTerms = new ElementLocator ("class", "checker");
    processShipping = new ElementLocator ("name", "processCarrier");
    paymentOptionWire = new ElementLocator ("class", "bankwire");
    confirmOrder = new ElementLocator ("xpath","/html/body/div/div[2]/div/div[3]/div/form/p/button");
    addToCartSearch = new ElementLocator ("class","button ajax_add_to_cart_button btn btn-default");
    minusButton = new ElementLocator("class","cart_quantity_down btn btn-default button-minus");
    firstItem = new ElementLocator("class", "cart_item last_item address_509928 even first_item");
}

