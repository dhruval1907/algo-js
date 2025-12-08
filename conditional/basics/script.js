let prompt = require('prompt-sync')()
let age = +(prompt("enter ur age : "))

if(age >=18){
    console.log("you can vote to modi !");
}
else if(age<=18){
    console.log("you can't vote to modi !");
}
else{
    console.log("you can not do nothing");
}