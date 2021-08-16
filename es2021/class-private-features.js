class Car {
    static get count() {
        return Car.#count;
    }
    static #count = 0;

    #modelName;
    #engineNumber;

    constructor(model) {
        this.#model = model;
        this.#engineNumber = this.#generateEngineNumber();
        Car.#count++;
    }

    get model() {
        return this.#modelName;
    }
    set #model(model) {
        this.#modelName = model;
    }

    toString() {
        return `Car ${this.model} (${this.#engineNumber})`;
    }

    #generateEngineNumber() {
        return Math.round(Math.random() * 1000);
    }
}

const c = new Car('Tesla');
console.log(c.model);
console.log(c.toString());