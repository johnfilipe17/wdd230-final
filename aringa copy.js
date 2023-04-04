// esse aqui eu estava usando no meu bontiful fruits mas eu tive que trocar pois esse aqui não estava mostrando a temperatura. deixei aqui como experiencia e rascunho. 


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&appid=19ef9fa5696576c4823c61b8bbfb08fc'
// ali em cima eu coloquei meu API no final e a latitude e longitude de Carlsband ele vai achar e por a temperatura atual 
// quando eu tiver os placeholder ai vou conseguir usar esse de 5 dias: https://api.openweathermap.org/data/2.5/forecast?lat=33.158092&lon=-117.350594&appid=19ef9fa5696576c4823c61b8bbfb08fc
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

    //const tag2 = document.querySelector('#humidity');
    //console.log(jsObject)
    //tag2.innerHTML = jsObject.temp.humidity;
   

    let wind = jsObject.wind.speed;
    document.querySelector('#wind').textContent = wind;

    //let humidity = jsObject.temp.humidity;
    //document.querySelector('#humidity').textContent=humidity;

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



