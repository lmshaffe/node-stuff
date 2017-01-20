# weather-app
Get the current temperature for a location.


Playing with asynchronous functions with the use of callbacks and promise chains.

There are two versions of the app. One is done using callbacks and the other is done using promises.


**If running app-promise.js replace apiKey in app-promise.js**

**If running app-callback.js replace apiKey in weather/weather.js**

Example:

Get the temperature for a zip
```bash
node app-promise.js -a 10001
```
Get the temperature for an street address 
```bash
node app-promise.js -a '4202 e fowler ave tampa'
```
