class Duck {
    constructor() {
        this.flyBehavior;
        this.quackBehavior;

        if (!this.display) {
            throw new Error("Display function must be implemented!")
        }
    }

    swim() {
        console.log("All ducks float, even decoys!");
    }

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack();
    }

    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    
    setQuackBehavior(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }
}

exports = module.exports = Duck;
