const WeatherData = require("./Subject/WeatherData");
const CurrentConditionsDisplay = require("./Observer/CurrentConditionsDisplay");
const ForecastDisplay = require("./Observer/ForecastDisplay")


const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30);
weatherData.setMeasurements(60, 44, 12);
