const logger = require('node-color-log');
const DSAdaptor = require ('./dataservice-adaptor')
const zipAdaptor = require ('./zip-retrieval-adaptor')
const weatherAdaptor = require ('./weather-retrieval-adaptor')
const config = require ('../resources/config')
const moment = require('moment')
const serviceName = config.serviceName;
const name = 'gateway-controller';

class Controller {
    processZip(zip) {
        return new Promise ((resolve, reject) => {
            logger.info(serviceName + ": " + name + ': processZip hit. zip code: '+ zip)
            zipAdaptor.convertZip(zip).then(
                (response)=>{
                    logger.info(serviceName + ": " + name + ': zip converted to: '+ JSON.stringify(response))
                    weatherAdaptor.getWeather(response).then(
                        (res)=>{
                            const week = res.dataseries;
                            week.map(obj=>{ 
                                obj.day = moment(obj.date, 'YYYYMMDD').format('dddd') 
                                obj.date = moment(obj.date, 'YYYYMMDD').format('ll') 
                            })
                            resolve(week)
                        },
                        (error)=>{
                            logger.error(serviceName + ": " + name + ': get weather failed') 
                            reject(error);
                        }
                    )
                },
                (error)=>{
                    logger.error(serviceName + ": " + name + ': zip conversion failed') 
                    reject(error);
                }
            )
        })
    }

}
module.exports = new Controller;