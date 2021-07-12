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

## How to run tests 
It is advisable to open project directly in Visual studio, therefore in terminal cd path will be automatically set up. 
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

# API testing for JsonPlaceholder

Test cases related to RestAPI [JsonPlaceholder](https://jsonplaceholder.typicode.com/) are created using [Postman tool](https://www.postman.com/).

## How to run Postman collection
To run collection run following command:
```bash
npm run apitest
```
