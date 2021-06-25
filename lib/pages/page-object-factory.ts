import {HomePage} from "./home-page";
import {MyAccountPage} from  "./my-account-page";
import {RegistrationPage} from "./registration-page"
import {PurchaseDetails} from "./purchase-details";
import {SearchResults} from "./search-results";
import { Objects } from "./objects";

export class PageObjectFactory {
            
getHomePage(){
    return new HomePage();
}
getAccountPage(){
    return new MyAccountPage();
}
getRegistrationPage(){
    return new RegistrationPage();
}
getPurchasePage(){
    return new PurchaseDetails();
}
getSearchResults(){
    return new SearchResults();
}
getObjects(){
    return new Objects();
}
}