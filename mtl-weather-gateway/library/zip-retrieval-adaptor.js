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
            logger.info(serviceName + ": " + name + ': covertZip hit. zip code: '+ zip)

            axios.get("http://localhost:5000/check").then(
                (response)=>{
                    logger.info(serviceName + ": " + name + ': GET response: ') 
                    logger.info(response.data) 
                    resolve();
                },
                (error)=>{
                    reject(error);
                }
            )

            // resolve({"lat":123,"long":123});
            // zipAdaptor.convertZip(zip).then(
            //     ()=>{},
            //     ()=>{}
            // )
        })
    }

}
module.exports = new ZipAdaptor;