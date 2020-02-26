const Pizza = require("./Pizza");

class ClamPizza extends Pizza {
    constructor() {
        super();
        this.description = "Clam Pizza";
    }
}

exports = module.exports = ClamPizza;