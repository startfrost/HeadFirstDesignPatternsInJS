const Pizza = require("./Pizza");

class CheesePizza extends Pizza {
    constructor() {
        super();
        this.description = "Cheese Pizza";
    }
}

exports = module.exports = CheesePizza;