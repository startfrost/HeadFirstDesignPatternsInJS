// 在JS中要实现两个接口混合需要用到后面章节的装饰器模式，并不是本章的内容，故这里先手动合并。
class ObserverAndDisplayElement {
    constructor() {
        if (new.target === ObserverAndDisplayElement) {
            throw new Error("ObserverAndDisplayElement is an interface, which cannot be instantiated.");
        }

        if (!this.update) {
            throw new Error("Update function must be implemented!");
        }

        if (!this.display) {
            throw new Error("Display function must be implemented!");
        }
    }
}

exports = module.exports = ObserverAndDisplayElement;