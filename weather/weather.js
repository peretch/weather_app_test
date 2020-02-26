const axios = require('axios');

const getWeatherByLatLon = async (lat, lon) => {
    const appid = '2be7dc1e7e21a7b4e0dac421d63b35a3';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`);

    const data = response.data;

    return { data };
}

module.exports = {
    getWeatherByLatLon
};