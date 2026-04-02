const fetchWeather = async (city, country) => {
    try {
        const apiKey = '331ca92302e15a439c9d10c2f72bc394';
        const countryParam = country ? `${city},${country}` : city;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryParam}&appid=${apiKey}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        
        // Determine weather condition for background
        const condition = data.weather[0].main.toLowerCase();
        const description = data.weather[0].description.toLowerCase();
        let weatherClass = 'cloudy'; // default
        
        if (condition.includes('rain') || condition.includes('drizzle')) {
            weatherClass = 'rainy';
        } else if (condition.includes('clear') || condition.includes('sunny')) {
            weatherClass = 'sunny';
        } else if (condition.includes('cloud')) {
            weatherClass = 'cloudy';
        } else if (condition.includes('snow')) {
            weatherClass = 'snowy';
        } else if (condition.includes('thunder') || condition.includes('storm')) {
            weatherClass = 'stormy';
        }
        
        // Update body background class
        document.body.className = weatherClass;
        
        // Calculate wind direction
        const windDeg = data.wind.deg;
        const windDirections = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const windDirection = windDirections[Math.round(windDeg / 22.5) % 16];
        
        // Format visibility
        const visibility = (data.visibility / 1000).toFixed(1);
        
        // Sunrise and sunset
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Get weather icon emoji
        const weatherIcon = getWeatherEmoji(condition, data.weather[0].icon);
        
        // Build the weather info HTML
        const weatherInfo = `<h1>${weatherIcon} ${data.name}, ${data.sys.country}</h1>
            <div class="weather-description">${data.weather[0].description}</div>
            
            <div class="weather-card">
                <div class="weather-card-label">Temperature</div>
                <div class="weather-card-value">${Math.round(data.main.temp)}<span class="weather-card-unit">°C</span></div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Feels Like</div>
                <div class="weather-card-value">${Math.round(data.main.feels_like)}<span class="weather-card-unit">°C</span></div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Humidity</div>
                <div class="weather-card-value">${data.main.humidity}<span class="weather-card-unit">%</span></div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Wind Speed</div>
                <div class="weather-card-value">${(data.wind.speed * 3.6).toFixed(1)}<span class="weather-card-unit">km/h</span></div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Wind Direction</div>
                <div class="weather-card-value">${windDirection}</div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Pressure</div>
                <div class="weather-card-value">${data.main.pressure}<span class="weather-card-unit">mb</span></div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Visibility</div>
                <div class="weather-card-value">${visibility}<span class="weather-card-unit">km</span></div>
            </div>
            
            <div class="weather-card">
                <div class="weather-card-label">Cloudiness</div>
                <div class="weather-card-value">${data.clouds.all}<span class="weather-card-unit">%</span></div>
            </div>
            
            <p><span>Sunrise: ${sunrise}</span></p>
            <p><span>Sunset: ${sunset}</span></p>`;
        
        document.getElementById('weatherResult').innerHTML = weatherInfo;
    } catch (error) {
        document.body.className = '';
        document.getElementById('weatherResult').innerHTML = `<h1>⚠️ Error</h1><p>${error.message}</p>`;
        console.error('Error fetching weather data:', error);
    }
};

const getWeatherEmoji = (condition, iconCode) => {
    if (condition.includes('thunder') || condition.includes('storm')) return '⛈️';
    if (condition.includes('rain') || condition.includes('drizzle')) return '🌧️';
    if (condition.includes('snow')) return '❄️';
    if (condition.includes('clear') || condition.includes('sunny')) return '☀️';
    if (condition.includes('cloud')) return '☁️';
    return '🌤️';
};

const button = document.getElementById('getWeatherBtn');
button.addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    const country = document.getElementById('countryInput').value.trim();
    
    if (!city) {
        document.getElementById('weatherResult').innerHTML = '<h1>Please enter a city name</h1>';
        return;
    }
    
    fetchWeather(city, country);
});

