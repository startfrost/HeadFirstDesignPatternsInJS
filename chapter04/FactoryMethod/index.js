const NYPizzaStore = require("./NYPizzaStore");
const ChicagoPizzaStore = require("./ChicagoPizzaStore");

let nyStore = new NYPizzaStore();
let chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza("cheese");
console.log("Ethan ordered a " + pizza.getName());

pizza = chicagoStore.orderPizza("cheese");
console.log("Joel ordered a " + pizza.getName());
