const Duck = require("./Duck");
const Quack = require("../Quack/Quack");
const FlyWithWings = require("../Fly/FlyWithWings");

class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display() {
        console.log("I'm a real Mallard duck");
    }
}

eexports = module.exports = MallardDuck;
