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
searchbar = new ElementLocator ("id","search_query_top");
menu = new ElementLocator("class", "sf-menu clearfix menu-content sf-js-enabled sf-arrows");
womenTab = new ElementLocator ("class", "sf-with-ul");
eveningDresses = new ElementLocator ("xpath", "/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/ul/li[2]/ul/li[2]/a");
eveningDress = new ElementLocator ("xpath", "/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[1]/div/a[1]/img")
}
