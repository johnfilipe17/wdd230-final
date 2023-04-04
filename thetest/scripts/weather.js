const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=-20.336840&lon=-40.291931&appid=19ef9fa5696576c4823c61b8bbfb08fc'
// ali em cima eu coloquei meu API no final e a latitude e longitude de vila velha ele vai achar e por a temperatura atual 
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);

    const tag = document.querySelector('#weatherConditions');
    console.log(jsObject)
    tag.innerHTML = jsObject.weather.description;
   

    let wind = jsObject.wind.speed;
    document.querySelector('#wind').textContent = wind;

    let temp_int = parseInt(temp);
    let wind_int = parseInt(wind);
    windchill(temp_int, wind_int);
};

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(0);
}

const windchill = (temp, wind) => {
    const windchill = document.querySelector('#windchill');
    const windDegree = document.querySelector('#windDegree');

    windchill.textContent = 'N/A';

    if (temp <= 50 && wind >= 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
        windchill.textContent = chill.toFixed(0);
        windDegree.innerHTML = '&#8457;';
    }
    
}

getWeather();
