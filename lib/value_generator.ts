export class Genetaror {
    
async generateMail() {
let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
let mail = '';
for (var i = 0; i < 15; i++) {
mail += chars[Math.floor(Math.random() * chars.length)];
}
return (mail + '@domain.com');
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