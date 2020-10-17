import {switchThermometricScale, searchWeather} from './search';
export let inputCityName = document.getElementById('cityName');

document.getElementById('searchBtn').addEventListener('click', searchWeather)
document.getElementById('switchThermometricScale').addEventListener('click', switchThermometricScale);

export const responseElementsforCurrent = (data) => {
        document.getElementById('currentCard').style.visibility = 'visible';
        document.getElementById('response_cityName').innerHTML = data.name;
        document.getElementById('response_current_temp').innerHTML = `${data.main.temp_max} ºC`;
        document.getElementById('response_current_weatherIcon').setAttribute("src", getIcon(data));
        document.getElementById('response_current_weatherDescription').innerHTML = data.weather[0].description;
    }
    
    const getIcon = (data) => {
        let iconCode = data.weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
        return iconUrl;
    }





