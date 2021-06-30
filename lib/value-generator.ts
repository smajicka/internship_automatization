import { BrowserHelper } from "./browser-helper";

export class Generator {

browser = new BrowserHelper();
email: string;

async generateMail() {
    let date: Date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let finalDate = year+"/"+month+"/"+day+"/"+hour+"/"+minute+"/"+second;
    const createCsvWriter = require("csv-writer").createObjectCsvWriter;
    let email = "sanja@domain.com";
    const csvWriter = createCsvWriter({
        path: "./storedata.csv",
        header: [
            {id: "mail", title: "email"}
        ]       
    });
    const row = [{mail: `${finalDate}${email}`}];
    csvWriter
    .writeRecords(row)
    .then(()=> console.log("The CSV file was written successfully"));
    console.log("email" +row[0].mail);
    this.email = row[0].mail
    return this.email;
}

async getRegisteredMail(){
    const csv = require("csvtojson")
    const csvFilePath = "./storedata.csv"
    const array = await csv().fromFile(csvFilePath);
    return array[0].email;
}

async generateName() {
    let first = "A"
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let name = '';
    for (var i = 0; i < 8; i++) {
        name += chars[Math.floor(Math.random() * chars.length)];
    }
    return (first + name);
}

async generateZip() {
    let numbers = '0123456789';
    let zip = '';
    for (var i = 0; i < 5; i++) {
        zip += numbers[Math.floor(Math.random() * numbers.length)];
    }
    return zip;
}

async generateMobile() {
    let numbers = '0123456789';
    let number = '';
        for (var i = 0; i < 12; i++) {
            number += numbers[Math.floor(Math.random() * numbers.length)];
        }
    return "+" + number;
}

async generateAdress() {
    let first = "N"
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let address = '';
        for (var i = 0; i < 9; i++) {
            address += chars[Math.floor(Math.random() * chars.length)];
        }   
    return (first + " " + address + " 11");
}
}