const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errMsg, results) => {
  if (errMsg) console.log(errMsg);
  else {
    console.log(results.address);
    weather.getCurrentWeather(results.latitude,results.longitude, (errMsg, weatherResults) => {
      if (errMsg) console.log(errMsg);
      else {
        console.log(`It's currently ${weatherResults.currentTemp}. It feels like ${weatherResults.feelsLikeTemp}`);
      }
    });
  }
});
