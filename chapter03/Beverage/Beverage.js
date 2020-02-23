class Beverage {
    constructor() {
        this.description = "Unknown Beverage";

        if (new.target === Beverage) {
            throw new Error("Beverage is an interface, which cannot be instantiated.");
        }

        if (!this.cost) {
            throw new Error("Cost function must be implemented!");
        }
    }

    getDescription() {
        return this.description;
    }
}

exports = module.exports = Beverage;