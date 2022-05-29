
let weather = {
	apiKey: "9e68e371cc3c984a850c74c15ee8e1b5",
	fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=idaho%20falls&units=imperial&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".weatherIcon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        if ((speed > 3.0 && temp <= 50)) {
            const chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed,0.16)));
            document.querySelector(".windChill").innerText = chill;
        }
        document.querySelector(".windChill").innerText = "Wind Chill: N/A";
    },
};

weather.fetchWeather("idaho falls");