const { default: axios } = require('axios');
const logger = require('node-color-log');
const config = require ('../resources/config')
const serviceName = config.serviceName;
const name = 'zip-controller';

class Controller {
    getWeather(lon, lat) {
        return new Promise ((resolve, reject) => {

            logger.info(serviceName + ": " + name + ': lon: '+ lon + ', lat: ' + lat)
            resolve('success')
            // logger.info(serviceName + ": " + name + ': Controller hit. zip code: '+ zip)
            // axios.get(config.baseURI+zip).then(
            //     (response)=>{
            //         logger.info(serviceName + ": " + name + ': GET response received') 
            //         resolve(response.data);
            //     },
            //     (error)=>{
            //         reject(error);
            //     }
            // )
        })
    }

}
module.exports = new Controller;