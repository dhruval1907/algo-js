// let prompt = require('prompt-sync')()
// let dis = +(prompt("enter your amount for discount"))

// if (year % 4 == 0 && year % 100 != 0) {
//     console.log("year is leap year");
// }
// else if (year % 400 == 0) {
//     console.log("year is leap year");
// }
// else {
//     console.log("year if not leap year");
// }


let prompt = require('prompt-sync')()
let amount = +(prompt("enter your amount "));

let dis = 0
if(amount>0 && amount <5000 ) dis =0
else if(amount>5000 && amount <7000 ) dis =5
else if(amount>7000 && amount <9000 ) dis =10
else dis=20

let payableAmount = amount - ((dis*amount)/100)

console.log(payableAmount);
