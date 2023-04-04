function getWeatherData(apiKey, location) {
    const apiUrl = word document2;
  
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
  
