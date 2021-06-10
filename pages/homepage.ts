import { By, WebElement } from "selenium-webdriver";
import {driver} from "../driver-factory"
import {menu} from "../objects/menu"
import searchbar from "../objects/searchbar";

export class homepage {


    url = "http://automationpractice.com/index.php";
    signButton = driver.findElement(By.className('login'));
    popular = driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/ul/li[1]/a"));
    itemPopular = driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div[1]/ul[1]/li[1]/div/div[1]/div/a[1]"))
    bestseller = driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/ul/li[2]/a"));
    itemBestseller = driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/ul/li[2]/a"));
}

export default new homepage ();