const CondimentDecorator = require("./CondimentDecorator");

class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost() {
        return 0.2 + this.beverage.cost();
    }
}

exports = module.exports = Mocha;