import { ElementLocator } from "../element-locator";

export class HomePage {

popular = new ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/ul/li[1]/a");
itemPopular = new  ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[1]/div/a[1]");
bestSeller = new  ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/ul/li[2]/a");
itemBestSeller = new ElementLocator ("xpath", "/html/body/div/div[2]/div/div[2]/div/ul/li[2]/a");
slideShow = new ElementLocator ("class","bx-viewport");
shopNowButton = new ElementLocator ("class", "btn btn-default");
addToCart = new ElementLocator("xpath", "/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[2]/div[2]/a[1]");
itemBox = new ElementLocator ("class", "clearfix");
proceed = new ElementLocator("class", "btn btn-default button button-medium");
searchBar = new ElementLocator ("id","search_query_top");
upperCommerical = new ElementLocator("class", "htmlcontent-item-1 col-xs-4");
lowerCommercial = new ElementLocator ("class", "htmlcontent-item-2 col-xs-4");
signButton = new ElementLocator("class", "header_user_info");
}
