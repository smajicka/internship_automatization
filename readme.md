# Test automatization for online store 

In this repository, automatization smoke test suite can be found. 
Smoke test suite is created for the following website: http://automationpractice.com/index.php
Website is presenting an online store, primarily for clothing. 

## About test cases 

Registration-test is taking valid data from user and creating new account.
This test has to be done first, since user cannot purchase anything on the website 
if he/she is not signed in. 
E-mail that is used for user to register is stored in storedata.cvs file
in order to be reused in other test cases. 

Other tests are checking item purchase flow using search bar, menu and homepage.
Meaning that user is able to add an item to the cart in these three ways.

## Technologies

### Visual Studio - IDE 
To install Visual Studio use following [website](https://visualstudio.microsoft.com/)

### Node.js and node package manager (npm)
To install Node.js use following [website](https://nodejs.org/en/)
To install node package manager, in project terminal write:
```bash
npm install
```
### Typescript 
For typescript execution add following command locally:
```bash
npm install -D typescript
```
### Jest testing framework 
To install Jest framework, in project terminal write:
```bash
npm install --save-dev jest
```
### Selenium Webdriver 
To install Selenium Webdriver and Chrome Webdriver use following commands:
```bash
npm install selenium-webdriver
npm install chromedriver
```
### Babel (JavaScript transcompiler)
To instal Babel and needed dependencies using following commands:
```bash
npm install --save-dev @babel/core 
```
All other dependencies needed for babel can be found in the file package.json
to install them use following approach:
```bash
npm install --save-dev @write_name_of_dependency 
```
### Yaml 
To instal Yaml and needed dependencies using following commands:
```bash
npm i yaml 
```
### CSV files
To read and write in comma separated value files, it is necessary to add:
```bash
npm i csv-writer
npm i csvtojson
```
## How to run tests 
It is required to run test using cd path: C:\User\automatization_internship-main. 
Depending where project is saved cd path should be adjusted.
It is advisable to open project directly in Visual studio, therefore in terminal path will automatically
set up. 
### All tests 
If one wants to run entire smoke test suite, it can be done by following command:
```bash
npm test 
```
Tests will not run parallelly, since registration test has to be done separately to store data. 
### Single test 
If one wants to run single test, it can be done by following command:
```bash
npm test -- TestFileToRun 
```
Example for popular-purchase.test.ts:
```bash
npm test -- popular-purchase.test.ts
```