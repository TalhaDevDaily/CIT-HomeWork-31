"use strict";

const handleCheckWeather = function () {
  console.log(`Hello World from World`);
};

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=23.8103&lon=90.4125&appid=0133a01997a0515f964051513c4d9a2c`
)
  .then((res) => res.json())
  .then((weather) => {
    console.log(weather);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Weather API Key:
