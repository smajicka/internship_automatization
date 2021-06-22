import { BrowserHelper } from "./browser-helper";

export class Generator {

browser = new BrowserHelper();

async generateMail() {
let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
let mail = '';
let date: Date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let finalDate = year+"/"+month+"/"+day+"/"+hour+"/"+minute+"/"+second;

for (var i = 0; i < 15; i++) {
mail += chars[Math.floor(Math.random() * chars.length)];
}
let email = mail + '@domain.com';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
path: "./storedata.cvs",
header: [
{id: 'data', title: 'E-mail'}
]
});  
const records = [{data: finalDate+email}];
await csvWriter.writeRecords(records).then(()=> console.log('The CSV file was written successfully'+year+month+day+hour+minute+second));;
return email;
}

async getRegisteredMail(){
const csv = require('csv-parser');
const fs = require('fs');
    
fs.createReadStream('./storedata.cvs')
.pipe(csv())
.on('data', (row:"data") => {
console.log(row);
})
.on('end', () => {
console.log('CSV file successfully processed');
});
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