const CheesePizza = require("./CheesePizza");
const ClamPizza = require("./ClamPizza");

class SimplePizzaFactory {
    constructor() {
        this.pizza;
    }

    createPizza(type) {
        if (type === "cheese") {
            this.pizza = new CheesePizza();
        } else if (type === "clam") {
            this.pizza = new ClamPizza();
        }
        return this.pizza;
    }
}

exports = module.exports = SimplePizzaFactory;