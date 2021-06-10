import { By } from "selenium-webdriver";
import {driver} from "../driver-factory";

class search{

    searchForm = driver.findElement(By.id("search_query_top"));
    searchButton = driver.findElement(By.name("submit_search"));
    }

export default new search();