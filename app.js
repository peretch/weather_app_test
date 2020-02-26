const { getLocationLatLon } = require('./location/location');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Address',
        demand:true
    }
}).argv;

const locationLatLon = getLocationLatLon(argv.address).then( console.log );