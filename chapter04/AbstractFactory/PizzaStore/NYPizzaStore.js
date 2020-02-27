const PizzaStore = require("./PizzaStore");
const NYPizzaIngredientFactory = require("../IngredientFactory/NYPizzaIngredientFactory");
const CheesePizza = require("../Pizza/CheesePizza");
const ClamPizza = require("../Pizza/ClamPizza");

class NYPizzaStore extends PizzaStore {
    constructor() {
        super();
    }

    createPizza(item) {
        this.pizzaIngredientFactory = new NYPizzaIngredientFactory();
        if (item === "cheese") {
            this.pizza = new CheesePizza(this.pizzaIngredientFactory);
            this.pizza.setName("New York Style Cheese Pizza");
        } else if (item === "clam") {
            this.pizza = new ClamPizza(this.pizzaIngredientFactory);
            this.pizza.setName("New York Style Veggie Pizza");
        }
        return this.pizza;
    }
}

exports = module.exports = NYPizzaStore;