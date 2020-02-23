class Subject {
    constructor() {
        if (new.target === Subject) {
            throw new Error("Subject is an interface, which cannot be instantiated.");
        }

        if (!this.registerObserver) {
            throw new Error("RegisterObserver function must be implemented!");
        }

        if (!this.removeObserver) {
            throw new Error("RemoveObserver function must be implemented!");
        }

        if (!this.notifyObservers) {
            throw new Error("NotifyObserver function must be implemented!");
        }
    }
}

exports = module.exports = Subject;