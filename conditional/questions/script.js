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


// let prompt = require('prompt-sync')()
// let amount = +(prompt("enter your amount "));

// let dis = 0
// if(amount>0 && amount <5000 ) dis =0
// else if(amount>5000 && amount <7000 ) dis =5
// else if(amount>7000 && amount <9000 ) dis =10
// else dis=20

// let payableAmount = amount - ((dis*amount)/100)

// console.log(payableAmount);
let prompt = require('prompt-sync')()

let unit = +(prompt("enter your unit "));

if(unit>0 && unit<=100){
    console.log(unit*4.2);
}
else if (unit>=100 && unit<=200){
    console.log((100*4.2)+(unit-100)*6);
}
else if (unit>=200 && unit<=300){
    console.log((100*4.2)+(100*6)+(unit-200)*8);
}
else{
    console.log((100*4.2)+(100*6)+(200*8)+(unit-400)*13);
}