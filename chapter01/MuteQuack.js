const QuackBehavior = require("./QuackBehavior");

class MuteQuack extends QuackBehavior {
    constructor() {
        super();
    }

    quack() {
        console.log("<< Silence >>");
    }
}

exports = module.exports = MuteQuack;