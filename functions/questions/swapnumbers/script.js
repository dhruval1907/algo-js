// swap two numbers

console.log("fisrt method");
console.log("------------------------------------------");

let a = 20;
let b = 30;
let c = a;

a = b;
b = c;

console.log(`the swap number is ${a}`);
console.log(`the swap number is ${b}`);

console.log("second method");
console.log("------------------------------------------");

let x = 38
let y = 92

x = x + y
y = x - y
x = x - y

console.log(`the swap number is ${x}`);
console.log(`the swap number is ${y}`);


console.log("third method");
console.log("------------------------------------------");
let g = 10;
let h = 20;

[g,h] = [h,g];

console.log(g);
console.log(h);

