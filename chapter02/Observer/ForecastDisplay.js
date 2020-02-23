const ObserverAndDislayElement = require("./ObserverAndDisplayElement");

class ForecastDisplay extends ObserverAndDislayElement {
    constructor(weatherData) {
        super();
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    display() {
        console.log("Just test ForecastDisplay.");
    }

    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
}

exports = module.exports = ForecastDisplay;