function displayTemperature(response) {
  let temperatureDisplay = document.querySelector("#current-temperature-value");

  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureDisplay.innerHTML = `${currentTemperature}`;
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let city = `${searchInputElement.value}`;
  let key = "d4t1a45e6o81a70ca05f6b5864ac8f43";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&unit=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
let cityElement = document.querySelector("#current-city");

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
