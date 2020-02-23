const Beverage = require("./Beverage");

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = "HouseBlend";
    }

    cost() {
        return 0.89;
    }
}

exports = module.exports = HouseBlend;