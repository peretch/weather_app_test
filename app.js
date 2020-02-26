const { getLocationLatLon } = require('./location/location');

const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Location',
        demand:true
    }
}).argv;

const locationLatLon = getLocationLatLon(argv.location).then( console.log );