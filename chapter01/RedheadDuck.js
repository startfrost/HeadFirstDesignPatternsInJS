const Duck = require("./Duck");
const Quack = require("./Quack");
const FlyWithWings = require("./FlyWithWings");

class RedheadDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display() {
        console.log("I'm a real Redhead duck");
    }
}

eexports = module.exports = RedheadDuck;
