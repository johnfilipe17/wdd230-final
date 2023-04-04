const apiKey = word number 4 ;
const city = "Carlsbad";
const url = word number 3;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const humidity = data.main.humidity;
    document.getElementById("humidity").innerHTML = `Humidity: ${humidity}%`;
  })
  .catch(error => console.log(error));