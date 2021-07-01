import { ElementLocator } from "../element-locator";
import { Objects } from "./objects";

export class HomePage extends Objects {
    popular = new ElementLocator("class","homefeatured");
    itemPopular = new  ElementLocator("xpath", "//*[@id='homefeatured']/li[1]/div/div[1]");
    slideShow = new ElementLocator ("class","bx-viewport");
    shopNowButton = new ElementLocator ("class", "btn btn-default");
    addToCart = new ElementLocator("class", "button ajax_add_to_cart_button btn btn-default");
    itemBox = new ElementLocator ("class", "clearfix");
    proceed = new ElementLocator("class", "btn btn-default button button-medium");
    searchBar = new ElementLocator ("id","search_query_top");
}
