class ChocolateBoiler {
    constructor(name) {
        this.empty = true;
        this.boiled = false;
        this.name = name;
        this.instance;
    }

    static getInstance(name) {
        if (!this.instance) {
            this.instance = new ChocolateBoiler(name);
        }
        return this.instance;
    }

    fill() {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
            console.log("在锅炉内填满巧克力和牛奶的混合物");
        }
    }

    drain() {
        if (!this.isEmpty() && this.isBoiled()) {
            console.log("排出煮沸的巧克力和牛奶")
            this.empty = true;
        }
    }

    boil() {
        if (!this.isEmpty() && !this.isBoiled()) {
            console.log("将炉內物煮沸");
            this.boiled = true;
        }
    }

    isEmpty() {
        return this.empty;
    }

    isBoiled() {
        return this.boiled;
    }
}

exports = module.exports = ChocolateBoiler;