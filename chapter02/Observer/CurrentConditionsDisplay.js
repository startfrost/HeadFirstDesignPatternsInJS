const ObserverAndDislayElement = require("./ObserverAndDisplayElement");

class CurrentConditionsDisplay extends ObserverAndDislayElement {
    constructor(weatherData) {
        super();
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    display() {
        console.log("Current conditions: " + this.temperature + "F degress and " + this.humidity + "% humidity");
    }

    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }
}

exports = module.exports = CurrentConditionsDisplay;