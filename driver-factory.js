const webdriver = require('selenium-webdriver');
import 'chromedriver';



     export let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

