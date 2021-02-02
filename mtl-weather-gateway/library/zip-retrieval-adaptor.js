const logger = require('node-color-log');
const config = require ('../resources/config');
const axios = require('axios');
const serviceName = config.serviceName;
const name = 'zip-retrieval-adaptor';

class ZipAdaptor {
    init() {
        return new Promise ((resolve, reject) => {
        })
    }

    convertZip(zip) {
        return new Promise ((resolve, reject) => {
            logger.info(serviceName + ": " + name + ': convertZip hit. zip code: '+ zip)

            axios.get("http://localhost:5005/lookup/"+ zip).then(
                (response)=>{
                    logger.info(serviceName + ": " + name + ': convertZip finished')
                    resolve(response.data);
                },
                (error)=>{
                    reject(error);
                }
            )

            // resolve({"lat":123,"long":123});
            // zipAdaptor.convertZip(zip).then(
            //     ()=>{}                    logger.info(serviceName + ": " + name + ': GET response: '+ response.data) 
                    // logger.info(response.data) ,
            //     ()=>{}
            // )
        })
    }

}
module.exports = new ZipAdaptor;