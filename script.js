let weather = {
    ApiKey: "508164e0478a57397dd422f292ec4b5c",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.ApiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        
        document.querySelector(".city").innerText = "Weather in " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = Math.round(temp * 10) / 10 + "°C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind speed: " + Math.round(speed) + " m/s"
        document.body.style.backgroundImage = 'url(https://source.unsplash.com/1920x1080/?' + name + ")"

        document.querySelector(".locationPic").style.backgroundImage = 'url(https://source.unsplash.com/1920x1080/?' + name + ")"
    },

    search: function(){
        this.fetchWeather(document.querySelector(".input-search-bar").value)
    }
}

document.querySelector(" .search button").addEventListener("click", function(){
    weather.search()
})
document.querySelector(" .input-search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search()
    }
})

weather.fetchWeather("Vaxholm")