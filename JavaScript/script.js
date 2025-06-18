"use strict";

const inputField = document.querySelector("input");
const country = document.querySelector(".country");
const locationName = document.querySelector(".name");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels_like");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const deg = document.querySelector(".deg");
const speed = document.querySelector(".speed");
const gust = document.querySelector(".gust");

const handleCheckWeather = function () {
  let cityName = inputField.value;

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=0133a01997a0515f964051513c4d9a2c&units=metric`
  )
    .then((res) => res.json())
    .then((geoLocation) => {
      console.log(geoLocation[0]);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation[0].lat}&lon=${geoLocation[0].lon}&appid=0133a01997a0515f964051513c4d9a2c&units=metric`
      )
        .then((res) => res.json())
        .then((weather) => {
          console.log(weather);
          country.innerHTML = geoLocation[0].country;
          locationName.innerHTML = geoLocation[0].name;
          temp.innerHTML = weather.main.temp;
          feelsLike.innerHTML = weather.main.feels_like;
          pressure.innerHTML = weather.main.pressure;
          humidity.innerHTML = weather.main.humidity;
          deg.innerHTML = weather.wind.deg;
          speed.innerHTML = weather.wind.speed;
          gust.innerHTML = weather.wind.gust;
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
};

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Weather API Key:
