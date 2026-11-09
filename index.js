//console.log("Hello world");
const taxRate = 0.16;
let price = prompt("please enter price");
console.log(typeof price);
price = Number(price);
console.log(typeof price);
console.log("tax =", price * taxRate);
