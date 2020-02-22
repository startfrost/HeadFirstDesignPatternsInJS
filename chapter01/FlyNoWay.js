const FlyBehavior = require("./FlyBehavior");

class FlyNoWay extends FlyBehavior {
    constructor() {
        super();
    }

    fly() {
        console.log("I can't fly");
    }
}

exports = module.exports = FlyNoWay;