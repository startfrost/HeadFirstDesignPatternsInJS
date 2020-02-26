class Pizza {
    constructor() {
        this.name;
        this.dough;
        this.sauce;
        this.toppings = new Array();
    }

    prepare() {
        console.log("Preparing " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: ");
        for (const topping of this.toppings) {
            console.log("   " + topping);
        }
    }

    bake() {
        console.log("Bake for 25 minutes at 350");
    }

    cut() {
        console.log("Cutting the pizza into diagonal slices");
    }

    box() {
        console.log("Place pizza in official PizzaStore box");
    }

    getName() {
        return this.name;
    }
}

exports = module.exports = Pizza;