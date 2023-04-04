function renderWeather(weather) {
//fecth weather data for city
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results");
    
    //create h2 for name 
    var city = document.createElement("h2");
    city.textContent= weather.name;
    resultsContainer.append(city);

    //create p for humidity,wind,description,temperature
    var temp = document.createElement("p");
    temp.textContent = "Temp:" + weather.main.temp + "F";
    resultsContainer.append(temp);
    
    var humidity = document.createElement("p");
    humidity.textContent = "humidity:" + weather.main.humidity + "%";
    resultsContainer.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "wind:" + weather.wind.speed + "mph" + weather.wind.deg + "°";
    resultsContainer.append(wind);
    var weatherDetails = weather.weather[0]
    if (weatherDetails && weatherDetails.description) {
        var description = document.createElement("p");
        description.textContent = weatherDetails.description;
        resultsContainer.append(description);
    }

}

//fetch weather data for city
function fetchWeather (query){
    var url = "https://api.openweathermap.org/data/2.5/weather?lat=33.158092&lon=-117.350594&appid=19ef9fa5696576c4823c61b8bbfb08fc"

    fetch (url)
        .then((response) => response.json())
        .then((data) => renderWeather(data));
}

fetchWeather();