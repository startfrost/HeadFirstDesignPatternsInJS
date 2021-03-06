const Pizza = require("./Pizza");   

class CheesePizza extends Pizza {
    constructor(ingredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare() {
        console.log("Preparing " + this.name)
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

exports = module.exports = CheesePizza;