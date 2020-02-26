const SimplePizzaFactory = require("./SimplePizzaFactory");

let simplePizzaFactory = new SimplePizzaFactory();
let pizza = simplePizzaFactory.createPizza("cheese");
let pizza2 = simplePizzaFactory.createPizza("clam");

pizza.prepare();
pizza.bake();
pizza.cut();
pizza.box();

pizza2.prepare();
pizza2.bake();
pizza2.cut();
pizza2.box();