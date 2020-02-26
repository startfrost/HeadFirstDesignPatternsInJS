const PizzaStore = require("./PizzaStore");
const NYStyleCheesePizza = require("./NYStyleCheesePizza");

class NYPizzaStore extends PizzaStore {
    constructor() {
        super();
    }

    createPizza(item) {
        if (item === "cheese") {
            return new NYStyleCheesePizza();
        }
    }
}

exports = module.exports = NYPizzaStore;