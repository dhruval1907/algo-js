let prompt = require("prompt-sync")()

let p = prompt("enter ur principle : ")
let r = prompt("enter rate of interest : ")
let t = prompt("enter time : ")

console.log((p * Math.pow(1 + (r / 100), t) - p).toFixed(2));
