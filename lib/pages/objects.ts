import { ElementLocator } from "../element-locator";

export class Objects{
menu : ElementLocator; 
signButton: ElementLocator; 

constructor(){
this.menu = new ElementLocator("class", "sf-menu clearfix menu-content sf-js-enabled sf-arrows");
this.signButton = new ElementLocator("class", "header_user_info");
}

womenTab = new ElementLocator ("class", "sf-with-ul");
eveningDresses = new ElementLocator ("xpath", "/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[1]/ul/li[2]/ul/li[2]/a");
eveningDress = new ElementLocator ("xpath", "/html/body/div/div[2]/div/div[3]/div[2]/ul/li/div/div[1]/div/a[1]/img");    
}