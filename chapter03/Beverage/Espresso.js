const Beverage = require("./Beverage");

class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }

    cost() {
        return 1.99;
    }
}

exports = module.exports = Espresso;