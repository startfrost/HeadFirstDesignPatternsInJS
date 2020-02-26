const PizzaStore = require("./PizzaStore");
const ChicagoStyleCheesePizza = require("./ChicagoStyleCheesePizza")

class ChicagoPizzaStore extends PizzaStore {
    constructor() {
        super();
    }

    createPizza(item) {
        if (item === "cheese") {
            return new ChicagoStyleCheesePizza();
        }
    }
}

exports = module.exports = ChicagoPizzaStore;