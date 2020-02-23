const Beverage = require("../Beverage/Beverage");

class CondimentDecorator extends Beverage {
    constructor() {
        super();
        
        if (new.target === CondimentDecorator) {
            throw new Error("CondimentDecorator is an interface, which cannot be instantiated.");
        }

        if (!this.getDescription) {
            throw new Error("GetDescription function must be implemented!");
        }
    }
}

exports = module.exports = CondimentDecorator;