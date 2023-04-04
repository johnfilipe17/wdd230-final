const apiKey = "19ef9fa5696576c4823c61b8bbfb08fc";
const city = "Carlsbad";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=19ef9fa5696576c4823c61b8bbfb08fc`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const humidity = data.main.humidity;
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
  })
  .catch(error => console.log(error));