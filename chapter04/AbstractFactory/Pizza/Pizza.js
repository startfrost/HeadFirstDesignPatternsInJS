class Pizza {
    constructor() {
        this.name;
        this.dough;
        this.sauce;
        this.cheese;

        if (!this.prepare) {
            throw new Error("Prepare function must be implemented!");
        }
    }

    bake() {
        console.log("Bake for 25 minutes at 350");
    }

    cut() {
        console.log("Cutting hte pizza into diagonal slices");
    }

    box() {
        console.log("Place pizza in official PizzaStore box");
    }

    setName(name) {
        this.name = name;
    }

    getName(name) {
        return name;
    }
}

exports = module.exports = Pizza;