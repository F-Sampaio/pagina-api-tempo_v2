import {requestCurrentWeather, requestForecastWeather, switchThermometricScale} from './search';
let inputCityName = document.getElementById('cityName');


document.getElementById('searchBtn').addEventListener('click', searchWeather)

export function searchWeather() {
    requestCurrentWeather(inputCityName.value);
    requestForecastWeather(inputCityName.value);
}

document.getElementById('switchThermometricScale').addEventListener('click', switchThermometricScale);


