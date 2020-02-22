const QuackBehavior = require("./QuackBehavior");

class Squeak extends QuackBehavior {
    constructor() {
        super();
    }

    quack() {
        console.log("Squeak");
    }
}

exports = module.exports = Squeak;