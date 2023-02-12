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

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#today-temp").innerHTML = Math.round(
    response.data.main.temp
  );
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

//function changeUniteC(event) {
//event.preventDefault();
//let currentTempC = document.querySelector("#today-temp");
//currentTempC.innerHTML = 17;
//return currentTempC;
//}
//function changeUniteF(event) {
// event.preventDefault();
//let tempBeg = document.querySelector("#today-temp");
//let fahrenheitTemp = Math.round(17 * 1.8 + 32);
//tempBeg.innerHTML = fahrenheitTemp;}

//let celsius = document.querySelector("#celsius-link");
//let fahrenheit = document.querySelector("#fahrenheit-link");
//celsius.addEventListener("click", changeUniteC);
//fahrenheit.addEventListener("click", changeUniteF);

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
