function getWeatherData(apiKey, location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=19ef9fa5696576c4823c61b8bbfb08fc&units=imperial `;
  
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const condition = data.weather[0].description;
  
      document.getElementById("temperature").textContent = `${temperature}°F`;
      document.getElementById("humidity").textContent = `${humidity}%`;
      document.getElementById("condition").textContent = condition;
      })
      .catch(error => console.log(error));
  }
  
  
  getWeatherData(apiKey, location);
  
