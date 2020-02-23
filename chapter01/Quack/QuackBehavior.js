// QuackBehavior接口
class QuackBehavior {
    constructor() {
        if (new.target === QuackBehavior) {
            throw new Error("QuackBehavior is an interface, which cannot be instantiated.");
        }

        if (!this.quack) {
            throw new Error("Quack function must be implemented!");
        }
    }
}

exports = module.exports = QuackBehavior;
