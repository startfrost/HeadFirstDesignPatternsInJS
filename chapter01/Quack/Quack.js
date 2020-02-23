const QuackBehavior = require("./QuackBehavior");

class Quack extends QuackBehavior {
    constructor() {
        super();
    }

    quack() {
        console.log("Quack");
    }
}

exports = module.exports = Quack;