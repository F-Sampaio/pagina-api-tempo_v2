import {switchThermometricScale, searchWeather} from './search';
export let inputCityName = document.getElementById('cityName');

document.getElementById('searchBtn').addEventListener('click', searchWeather)
document.getElementById('switchThermometricScale').addEventListener('click', switchThermometricScale);

export const responseElementsforCurrent = (data) => {
        document.getElementById('response_cityName').innerHTML = data.name;
        document.getElementById('response_current_temp').innerHTML = `${data.main.temp_max} ºC`;
    }


