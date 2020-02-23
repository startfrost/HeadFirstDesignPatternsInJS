const Subject = require("./Subject");

class WeatherData extends Subject {
    constructor() {
        super();
        this.temperature;
        this.humidity;
        this.pressure;
        this.observers = new Array();
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        let i = this.observers.indexOf(observer);
        this.observers.splice(i, 1);
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged() {
        this.notifyObservers()
    }

    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

exports = module.exports = WeatherData;