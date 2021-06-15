import { By, WebElement } from "selenium-webdriver";
import { elementTextContains } from "selenium-webdriver/lib/until";
import {driver} from "../../driver-factory"
import { ElementLocator } from "../element_locator";

export class Homepage {

    signButton = new ElementLocator("class", "header_user_info")
    popular = new ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/ul/li[1]/a");
    itemPopular = new  ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[1]/div/a[1]");
    bestseller = new  ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/ul/li[2]/a");
    itemBestseller = new ElementLocator ("xpath", "/html/body/div/div[2]/div/div[2]/div/ul/li[2]/a");
    addToCart = new ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[2]/div[2]/a[1]");
    itemBox = new ElementLocator ("class", "clearfix");
    proceed = new ElementLocator("class", "btn btn-default button button-medium");
    searchbar = new ElementLocator ("id","searchbox");
    menu = new ElementLocator("class", "sf-menu clearfix menu-content sf-js-enabled sf-arrows");
    womenTab = new ElementLocator ("class", "sf-with-ul");
    eveningDress = new ElementLocator ("xpath", "//*[@id=block_top_menu]/ul/li[1]/ul/li[2]/ul/li[2]/a");
}
