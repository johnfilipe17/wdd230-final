const apiKey = '19ef9fa5696576c4823c61b8bbfb08fc';
const city = 'Carlsband'; 

// Get the current date and the next 3 days
const today = new Date();
const dates = [
  new Date(today.getTime() + 24 * 60 * 60 * 1000),
  new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000),
  new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000),
];

// Build the API URL
const apiUrl = word document number one ;

// Fetch the weather data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Loop through the dates and find the forecast data for each day
    dates.forEach(date => {
      const forecast = data.list.find(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate.getDate() === date.getDate();
      });

        // Convert Kelvin to Fahrenheit
        const tempF = Math.round((forecast.main.temp -273.15) * 9/5 + 32);

       // Create a row for the forecast data
       const row = document.createElement('tr');
       row.innerHTML = `
         <td>${date.toDateString()}</td>
         <td>${forecast.main.humidity}%</td>
         <td>${tempF}°F</td>
         <td>${forecast.weather[0].description}</td>
       `;
 
       // Add the row to the table
       document.getElementById('forecast').appendChild(row);
     });
   })
   .catch(error => console.log(error));
