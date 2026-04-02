const fetchWeather = async (city, country) => {
    try{
        const apiKey = '331ca92302e15a439c9d10c2f72bc394';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const weatherInfo = `<h1>Weather in ${data.name}, ${data.sys.country}</h1>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>`;
        document.getElementById('weatherResult').innerHTML = weatherInfo;
    }
    catch(error){
        console.error('Error fetching weather data:', error);
    }
}

const button = document.getElementById('getWeatherBtn');
button.addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const country = document.getElementById('countryInput').value;
    fetchWeather(city, country);
});

