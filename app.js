
const credentials = require('./credentials.js')
const request = require('request')

function getWeather(lat,long) {
  request.get(`https://api.darksky.net/forecast/${credentials.DARK_SKY_SECRET_KEY}/${lat},${long}?lang=es&units=si`,
    function (error, response, body){
      let jsonRequest = JSON.parse(body);
      console.log(`${jsonRequest.daily.data[0].summary} Actualmente está a ${jsonRequest.currently.temperature}° C. Hay ${jsonRequest.daily.data[0].precipProbability * 100}% de posibilidad de lluvia.`);
    }
  );
}
