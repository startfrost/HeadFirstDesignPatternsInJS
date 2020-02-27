const PizzaIngredientFactory = require("./PizzaIngredientFactory");
const ThinCrustDough = require("../Ingredient/ThinCrustDough");
const MarinaraSauce = require("../Ingredient/MarinaraSauce");
const ReggianoCheese = require("../Ingredient/ReggianoCheese");

class NYPizzaIngredientFactory extends PizzaIngredientFactory {
    constructor() {
        super();
    }

    createDough() {
        return new ThinCrustDough();
    }

    createSauce() {
        return new MarinaraSauce();
    }

    createCheese() {
        return new ReggianoCheese();
    }
}

exports = module.exports = NYPizzaIngredientFactory;