const Pizza = require("./Pizza");

class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY Style Sauce and Cheese Pizza";
        this.dough = "Thin Crust Dough";
        this.sauce = "Marinara Sauce";

        this.toppings.push("Grated Reggiano Cheese");
    }
}

exports = module.exports = NYStyleCheesePizza;
