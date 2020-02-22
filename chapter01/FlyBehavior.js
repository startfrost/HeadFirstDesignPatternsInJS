// FlyBehavior接口
class FlyBehavior {
    constructor() {
        if (new.target === FlyBehavior) {
            throw new Error("FlyBehavior is an interface, which cannot be instantiated.");
        }

        if (!this.fly) {
            throw new Error("Fly function must be implemented!");
        }
    }
}

exports = module.exports = FlyBehavior;
