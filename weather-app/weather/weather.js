const request = require('request');
const apiKey = 'bef3e4dbcbdfec6e5ee112b8771e5fc3'

var getCurrentWeather = (lat, long, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`,
    json: true
  }, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      callback(undefined, {
        currentTemp: body.currently.temperature,
        feelsLikeTemp: body.currently.apparentTemperature,
        dewpoint: body.currently.dewPoint,
        humidity: body.currently.humidity

      });
    } else callback('Unable to fetch weather');
  });
}


module.exports = {
  getCurrentWeather
}
