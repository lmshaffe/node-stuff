const yargs = require('yargs');
const axios = require('axios');
const apiKey = 'bef3e4dbcbdfec6e5ee112b8771e5fc3';

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((res) => {
  if (res.data.status === 'ZERO_RESULTS') throw new Error('Unable to find the address provided');

  var lat = res.data.results[0].geometry.location.lat;
  var long = res.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`
  console.log(res.data.results[0].formatted_address);
  return axios.get(weatherUrl)
}).then((res) => {
  var currentTemp = res.data.currently.temperature;
  var feelsLikeTemp = res.data.currently.apparentTemperature;
  console.log(`It's currently ${currentTemp}. It feels like ${feelsLikeTemp}`);
}).catch((err) => {
  if (err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND') console.log('Unable to connect to API servers');
  else console.log(err.message);
});
