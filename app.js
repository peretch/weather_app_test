const { getLocationLatLon } = require('./location/location');
const { getWeatherByLatLon } = require('./weather/weather');

const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Location',
        demand:true
    }
}).argv;

const getInfo = async location => {
    try{
        const { name, lat, lon } = await getLocationLatLon(location);
        const { temp } = await getWeatherByLatLon(lat, lon);
        return `The temperature in "${name}" is ${temp}ºC`;
    }catch (e){
        throw `Can't find weather for ${location}`;
    }
}

getInfo(argv.location).then(console.log).catch(console.log);