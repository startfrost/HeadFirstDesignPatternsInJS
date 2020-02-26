class Pizza {
    constructor() {
        this.description = "Unknown Pizza";

        if (new.target === Pizza) {
            throw new Error("Pizza is an abstract class, which cannot be instantiated.");
        }
    }

    prepare() {
        console.log(this.description + " is preparing...");
    }

    bake() {
        console.log(this.description + " is baking...");
    }

    cut() {
        console.log(this.description + " is Cutting...");
    }

    box() {
        console.log(this.description + " is Boxing...");
    }
}

exports = module.exports = Pizza;