import { ElementLocator } from "../element-locator";

export class Objects{
    menu : ElementLocator; 
    signButton: ElementLocator; 

    constructor(){
        this.menu = new ElementLocator("class", "sf-menu clearfix menu-content sf-js-enabled sf-arrows");
        this.signButton = new ElementLocator("class", "header_user_info");
    }

    womenTab = new ElementLocator ("class", "sf-with-ul");
    eveningDresses = new ElementLocator ("xpath", "//*[@id='block_top_menu']/ul/li[1]/ul/li[2]/ul/li[2]/a");
    eveningDress = new ElementLocator ("xpath", "//*[@id='center_column']/ul/li/div/div[1]");    
}