// variables and element selecting
const apiKey = "19ef9fa5696576c4823c61b8bbfb08fc";
const apiCountryURL = "https://restcountries.com/v2/alpha";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")


// functions 
// a primeira acessa os dados da api 
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    
    const res = await fetch (apiWeatherURL);
    const data = await res.json();

    return data;
};

//essa função mostra os dados da api
const showWeatherData = async (city) => {
    try {
      const data = await getWeatherData(city);
  
      if (data.cod === '404') {
        throw new Error('City not found');
      }
  
      // Clear previous error messages .
      clearErrorMessages();
  
      cityElement.innerText = data.name;
      tempElement.innerText = Math.round(data.main.temp);
      descElement.innerText = data.weather[0].description;
      weatherIconElement.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
  
      const countryCode = data.sys.country;
      const countryFlagURL = `${apiCountryURL}/${countryCode.toLowerCase()}?fields=flags`;
      const flagResponse = await fetch(countryFlagURL);
      const flagData = await flagResponse.json();
      if (flagResponse.ok) {
        countryElement.setAttribute("src", flagData.flags.png);
      } else {
        throw new Error('Failed to fetch country flag.');
      }
  
      humidityElement.innerText = `${data.main.humidity}%`;
      windElement.innerText = `${data.wind.speed}km/h`;
      weatherContainer.classList.remove("hide");
  
      // Determine if it's daytime or nighttime
      const currentTime = new Date();
      const sunriseTime = new Date(data.sys.sunrise * 1000);
      const sunsetTime = new Date(data.sys.sunset * 1000);
  
      if (currentTime > sunriseTime && currentTime < sunsetTime) {
        // Daytime
        document.body.classList.remove("night-mode");
        document.body.classList.add("day-mode");
      } else {
        // Nighttime
        document.body.classList.remove("day-mode");
        document.body.classList.add("night-mode");
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.message;
      // Clear previous error messages
      clearErrorMessages();
      // Update the UI with the error message
      const errorContainer = document.createElement('p');
      errorContainer.classList.add('error-message');
      errorContainer.innerText = errorMessage;
      weatherContainer.appendChild(errorContainer);
    }
  };
  
  // Function to clear error messages
  const clearErrorMessages = () => {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
      errorMessage.remove();
    });
  };

  const getCurrentTime = async (city) => {
  // Make an API call or use a suitable method to fetch the current time of the city
  // Replace the following line with your code to fetch the current time
  const currentTimeResponse = await fetch(`https://api.example.com/current-time?city=${city}`);
  const currentTimeData = await currentTimeResponse.json();
  return currentTimeData.time; // Adjust this to match the actual format or structure of the time data
};

  
  

// events 
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {

    if(e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city)
    }
});