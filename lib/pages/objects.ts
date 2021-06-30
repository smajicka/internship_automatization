import { ElementLocator } from "../element-locator";

export class Objects{
  
    menu = new ElementLocator("xpath", "//*[@id='block_top_menu']/ul");
    signButton = new ElementLocator("class", "header_user_info");
    womenTab = new ElementLocator ("class", "sf-with-ul");
    eveningDresses = new ElementLocator ("xpath", "//*[@id='block_top_menu']/ul/li[1]/ul/li[2]/ul/li[2]/a");
    eveningDress = new ElementLocator ("xpath", "//*[@id='center_column']/ul/li/div/div[1]"); 
    errorMessage = new ElementLocator ("class", "alert alert-danger"); 
}