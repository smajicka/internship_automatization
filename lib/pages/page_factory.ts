import {Homepage} from "./homepage";
import {My_accountpage} from  "./my_accountpage";
import {Registrationpage} from "./registrationpage"

export class PageObjectFactory {
               
        constructor() {
        const homepage = new Homepage ();
        const myaccountpage = new My_accountpage();
        const registrationpage = new Registrationpage();
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
        }