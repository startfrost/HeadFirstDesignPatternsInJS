const CondimentDecorator = require("./CondimentDecorator");

class Whip extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }

    cost() {
        return 0.08 + this.beverage.cost();
    }
}

exports = module.exports = Whip;