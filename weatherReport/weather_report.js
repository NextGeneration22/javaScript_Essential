function showweatherDetails(event) {
      event.preventDefault();
      const  lattitude = document.getElementById('lattitude').value;
      const  longitude = document.getElementById('longitude').value;

      //the API password for the web.
      const apiKey = 'e9d291e9d6d16b23005bf90fa8fec3c8';
      //the URL when you get the wehter data
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2><br><p>Temperature: ${data.main.temp} &#8451;</p><br><p>Weather: ${data.weather[0].description}</p>`;
    })

};

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );