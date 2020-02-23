const FlyBehavior = require("./FlyBehavior");

class FlyWithWings extends FlyBehavior {
    constructor() {
        super();
    }

    fly() {
        console.log("I'm flying!!");
    }
}

exports = module.exports = FlyWithWings;