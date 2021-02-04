const { default: axios } = require('axios');
const logger = require('node-color-log');
const config = require ('../resources/config')
const serviceName = config.serviceName;
const name = 'weather-controller';

class Controller {
    getWeather(lon, lat) {
        return new Promise ((resolve, reject) => {

            logger.info(serviceName + ": " + name + ': lon: '+ lon + ', lat: ' + lat)
            const product = 'civillight';
            const output = 'json'

            axios.get(config.baseURI, { params: { 
                lon,
                lat,
                product,
                output
            }}).then(
                (response)=>{
                    logger.info(serviceName + ": " + name + ': GET response received') 
                    resolve(response.data);
                },
                (error)=>{
                    reject(error);
                }
            )
        })
    }

}
module.exports = new Controller;