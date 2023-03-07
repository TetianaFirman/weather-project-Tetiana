function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentYear = date.getFullYear();
let currentDay = days[date.getDay()];
let currentMonth = months[date.getMonth()];
let currentDate = date.getDate();
let currentHours = addZero(date.getHours());
let currentMinutes = addZero(date.getMinutes());
let realDate = document.querySelector(".date");
realDate.innerHTML = `${currentDate} ${currentMonth} ${currentYear}`;
let realTimeWeekday = document.querySelector(".time-weekday");
realTimeWeekday.innerHTML = `${currentHours}:${currentMinutes} ${currentDay}`;
let iconElement = document.querySelector("#icon");

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row d-flex justify-content-center">`;
  let days = ["Sun", "Mon", "Tue", "Wen", "Thu"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
            <div class="col choose-day">
              ${day} <br />⛅<br /><strong>5°</strong> 9°
            </div>
`;
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}
function getForecast(coordinates) {
  let apiKey = "0b0819c4d7c529aeda7a6d09e4107cbd";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
}
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#today-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  celsiusTemp = response.data.main.temp;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  getForecast(response.data.coord);
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector(".search-window").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("Lviv");
//displayForecast();

//function search(event) {
//event.preventDefault();
//let searchType = document.querySelector(".search-window");
//let currentCity = document.querySelector("#city");
//if (searchType.value) {
//currentCity.innerHTML = `${searchType.value}`;
//} else {
// alert("Choose a city, please!");}}
//let searchFild = document.querySelector("#search-form");
//searchFild.addEventListener("submit", search);

//function displayCelsiusTemp(event) {
//event.preventDefault();
//celsiusLink.classList.add("activ");
//fahrenheitLink.classList.remove("activ");
//let currentTempC = document.querySelector("#today-temp");
//currentTempC.innerHTML = Math.round(celsiusTemp);
//return currentTempC;}
//function displayFahrenheitTemp(event) {
//event.preventDefault();
//celsiusLink.classList.remove("activ");
//fahrenheitLink.classList.add("activ");
//let tempElement = document.querySelector("#today-temp");
//let fahrenheitTemp = Math.round(celsiusTemp * 1.8 + 32);
//tempElement.innerHTML = fahrenheitTemp;}
//let celsiusTemp = null;
//let celsiusLink = document.querySelector("#celsius-link");
//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//celsiusLink.addEventListener("click", displayCelsiusTemp);
//fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

// challenge current button
//function showCurWeather(response) {
//let curTemp = document.querySelector("#today-temp");
//let temperature = Math.round(response.data.main.temp);
//curTemp.innerHTML = `${temperature}°`;
//document.querySelector("#city").innerHTML = response.data.name;
//}
//function showCoord(position) {
//let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//console.log(lat);
//let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//axios.get(url).then(showCurWeather);}
//function getCurrentPos() {
//navigator.geolocation.getCurrentPosition(showCoord);}
//let button = document.querySelector("#current-but");
//button.addEventListener("click", getCurrentPos);
