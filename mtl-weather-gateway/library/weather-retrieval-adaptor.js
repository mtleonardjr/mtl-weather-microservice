const logger = require('node-color-log');
const config = require ('../resources/config');
const axios = require('axios');
const serviceName = config.serviceName;
const name = 'Weather-retrieval-adaptor';

class WeatherAdaptor {

    getWeather(zipInfo) {
        return new Promise ((resolve, reject) => {
            logger.info(serviceName + ": " + name + ': getWeather hit')
            axios.get("http://localhost:5004/getWeather/",{params: {lon: zipInfo.places[0].longitude, lat: zipInfo.places[0].latitude}})
                .then(
                (response)=>{
                    logger.info(serviceName + ": " + name + ': getWeather finished')
                    resolve(response.data);
                },
                (error)=>{
                    reject(error);
                }
            )
        })
    }

}
module.exports = new WeatherAdaptor;