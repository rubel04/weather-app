const apiKey = "e9d6961519de7b9541ad2b5343fcfeff";
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
          `;
        } else {
          weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        weatherResult.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
      });
  } else {
    weatherResult.innerHTML = `<p>Please enter a city name.</p>`;
  }
});
