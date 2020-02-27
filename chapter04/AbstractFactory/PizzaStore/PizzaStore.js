class PizzaStore {
    constructor() {
        this.pizza;

        if (new.target === PizzaStore) {
            throw new Error("PizzaStore is an abstract class, which cannot be instantiated.");
        }

        if (!this.createPizza) {
            throw new Error("CreatePizza function must be implemented!");
        }
    }

    orderPizza(type) {
        this.pizza = this.createPizza(type);
        this.pizza.prepare();
        this.pizza.bake();
        this.pizza.cut();
        this.pizza.box();
        return this.pizza;
    }
}

exports = module.exports = PizzaStore;