const weatherRes = new Promise((resolve , reject) => {
    if (5 == 5){
        resolve();
    } else {
        reject();
    }
});

console.log(weatherRes);

function getWeather(){


    const inputRef=document.querySelector("#cityName");
    const cityName = inputRef.value;



    const res = axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`);

    

    res.then((data) => {
        
        const weather = data.data.current.temp_c;
      const wind = data.data.current.wind_kph;
      const humidity = data.data.current.humidity;
      const feels = data.data.current.feelslike_c;

      const divref = document.querySelector("#weather");
      divref.innerHTML = `
          <p> Temperature: ${weather}°C</p>
          <p> Wind Speed: ${wind} km/h</p>
          <p> Humidity: ${humidity}%</p>
          <p> Feels Like: ${feels}°C</p>`
    })
    .catch((error) => {
        console.log("catch")
        console.log(error)
    })
    
    
}