class PizzaIngredientFactory {
    constructor() {
        if (new.target === PizzaIngredientFactory) {
            throw new Error("PizzaIngredientFactory is an interface, which cannot be instantiated.");
        }

        if (!this.createDough) {
            throw new Error("CreateDough function must be implemented!");
        }

        if (!this.createSauce) {
            throw new Error("CreateSauce function must be implemented!");
        }

        if (!this.createCheese) {
            throw new Error("CreateCheese function must be implemented!");
        }
    }
}

exports = module.exports = PizzaIngredientFactory;