import {forecastKey, currentKey} from './keys'
import {searchWeather} from './script'
let flag = true;

export const requestCurrentWeather = (cityName) => {
    let URL_CURRENT_WEATHER = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${currentKey}`
    if(flag) { URL_CURRENT_WEATHER += `&units=metric`;}
    console.log(flag + ' dentro Request Current')
    fetch(URL_CURRENT_WEATHER, {method:'get'})
        .then(response => { response.json()
            .then(result => { console.log(result) });
        })
        .catch(error => { console.error(error); });
}

export const requestForecastWeather = (cityName) => { 
    let URL_FORECAST_WEATHER = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${forecastKey}`
    if(flag) { URL_FORECAST_WEATHER += `&units=metric`;}
    console.log(flag + ' dentro Request Forecast')
    fetch(URL_FORECAST_WEATHER, {method:'get'})
        .then(response => { response.json()
            .then(result => { console.log(result)});
        })
        .catch(error => { console.error(error); });
}

export const switchThermometricScale = () => {
    if(flag) {
        flag = false;
        console.log(flag + ' dentro if')
        searchWeather();
    } else {
        flag = true;
        console.log(flag + ' dentro retorno')
        searchWeather()
    }
}
