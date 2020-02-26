const { getLocationLatLon } = require('./location/location');
const { getWeatherByLatLon } = require('./weather/weather');

const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Location',
        demand:true
    }
}).argv;

getLocationLatLon(argv.location)
    .then(resp => {
        console.log(resp.name);
        getWeatherByLatLon(resp.lat, resp.lon)
        .then(resp => console.log(resp))
    })
    .catch(console.log)