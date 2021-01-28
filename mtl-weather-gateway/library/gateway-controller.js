const logger = require('node-color-log');
const DSAdaptor = require ('./dataservice-adaptor')
const zipAdaptor = require ('./zip-retrieval-adaptor')
const weatherAdaptor = require ('./weather-retrieval-adaptor')
const config = require ('../resources/config')
const serviceName = config.serviceName;
const name = 'gateway-controller';

class Controller {
    processZip(zip) {
        return new Promise ((resolve, reject) => {
            logger.info(serviceName + ": " + name + ': processZip hit. zip code: '+ zip)
            resolve(zip)
        })
    }

}
module.exports = new Controller;