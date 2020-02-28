const ChocolateBoiler = require("./ChocolateBoiler");

let chocolateBoiler = ChocolateBoiler.getInstance("boiler1");
console.log(chocolateBoiler.name);

let chocolateBoiler2 = ChocolateBoiler.getInstance("boiler2");
console.log(chocolateBoiler2.name);

console.log(chocolateBoiler === chocolateBoiler2);