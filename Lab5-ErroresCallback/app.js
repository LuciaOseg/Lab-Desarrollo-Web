
const credentials = require('./credentials');
const request = require('request');

let city = "Sabinas Coahuila";

//Obtiene los datos del clima Daily
function getWeather(lat,long) {
  request.get(`https://api.darksky.net/forecast/${credentials.DARK_SKY_SECRET_KEY}/${lat},${long}?lang=es&units=si`,
    function (error, response, body){
      let jsonRequest = JSON.parse(body);
      console.log(`${jsonRequest.daily.data[0].summary} Actualmente está a ${jsonRequest.currently.temperature}° C. Hay ${jsonRequest.daily.data[0].precipProbability * 100}% de posibilidad de lluvia.`);
    }
  );
}

//Obtiene las coordenadas geograficas de la ciudad
function getGeo(city_name) {
  request.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city_name}.json?access_token=${credentials.MAPBOX_TOKEN}`,
  function (error, response, body){
    let jsonBody = JSON.parse(body);
    let long = jsonBody.features[0].center[0];
    let lat = jsonBody.features[0].center[1];

    getWeather(lat, long)
  });
}


console.log(`${city.toUpperCase()}`);
getGeo(city);
