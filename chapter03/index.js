const Espresso = require("./Beverage/Espresso");
const HouseBlend = require("./Beverage/HouseBlend");
const Soy = require("./CondimentDecorator/Soy");
const Mocha = require("./CondimentDecorator/Mocha");
const Whip = require("./CondimentDecorator/Whip");

let beverage = new Espresso();
console.log(beverage.getDescription() + " $" + beverage.cost());

let beverage2 = new HouseBlend();
console.log(beverage2.getDescription() + " $" + beverage2.cost());
beverage2 = new Soy(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());
beverage2 = new Mocha(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

