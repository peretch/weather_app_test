const axios = require('axios');

const getLocationLatLon = async location => {
    const encodedUrlAddress = encodeURI(location);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrlAddress}`,
        timeout: 3000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'ad5e9cbe9cmsh739aa53e1bb0984p1e86efjsnce4b14017044'
        }
    });
    
    const resp = await instance.get();
    
    if( resp.data.Results.length === 0 ){
        throw new Error(`No results for location ${location}`);
    }
    const { name, lat, lon } = resp.data.Results[0];
    return { name, lat, lon };
}

module.exports = {
    getLocationLatLon
};