let weather = {
    ApiKey: "508164e0478a57397dd422f292ec4b5c",
    fetchWeather: function(city, div){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + this.ApiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data, div));
    },
    displayWeather: function(data, div){
        console.log(data)
    if(div == "city1"){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        
        document.querySelector(".famousCity1").innerText = "Weather in " + name
        document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description1").innerText = description
        document.querySelector(".temp1").innerText = Math.round(temp * 10) / 10 + "°C"
        document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind1").innerText = "Wind speed: " + Math.round(speed) + " m/s"
    }

    else if(div == "city2"){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        
        document.querySelector(".famousCity2").innerText = "Weather in " + name
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description2").innerText = description
        document.querySelector(".temp2").innerText = Math.round(temp * 10) / 10 + "°C"
        document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind2").innerText = "Wind speed: " + Math.round(speed) + " m/s"

    }

    else if(div == "city3"){

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        
        document.querySelector(".famousCity3").innerText = "Weather in " + name
        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description3").innerText = description
        document.querySelector(".temp3").innerText = Math.round(temp * 10) / 10 + "°C"
        document.querySelector(".humidity3").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind3").innerText = "Wind speed: " + Math.round(speed) + " m/s"
    }


    }
}

weather.fetchWeather("New York", "city1")
weather.fetchWeather("Tokyo", "city2")
weather.fetchWeather("London", "city3")

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);