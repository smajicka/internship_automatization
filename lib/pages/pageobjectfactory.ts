import {Homepage} from "./homepage";
import {My_accountpage} from  "./my_accountpage";
import {Registrationpage} from "./registrationpage"
import { Purchasedetails } from "./purchase_details";
import { Searchresults } from "./searchresults";

export class PageObjectFactory {
               
constructor() {
const homepage = new Homepage ();
const myaccountpage = new My_accountpage();
const registrationpage = new Registrationpage();
const purchase = new Purchasedetails ();
const searchresults = new Searchresults ();
}

getHomePage(){
return new Homepage();
}
getAccountPage(){
return new My_accountpage();
}
getRegistrationPage(){
return new Registrationpage();
}
getPurchasePage(){
return new Purchasedetails();
}
getSearchResults(){
return new Searchresults();
}
      
}