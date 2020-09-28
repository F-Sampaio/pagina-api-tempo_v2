import {switchThermometricScale, searchWeather} from './search';
export let inputCityName = document.getElementById('cityName');

document.getElementById('searchBtn').addEventListener('click', searchWeather)
document.getElementById('switchThermometricScale').addEventListener('click', switchThermometricScale);

export const createElementsforCurrent = (data) => {
    let elementCityName = document.createElement("h1");
    let elementTempMax = document.createElement("p");

    let valueCityName = document.createTextNode(data.name);
    let valueTempMax = document.createTextNode(data.main.temp_max)

    elementCityName.appendChild(valueCityName);
    elementTempMax.appendChild(valueTempMax);
    document.getElementById('response').append(elementCityName, elementTempMax);
}