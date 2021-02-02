const express = require('express');
const router = express.Router();
const logger = require('node-color-log');
const config = require('../resources/config')
const controller = require('../library/weather-controller')
const serviceName = config.serviceName;
const name = 'route';

//check api
router.get('/check', (req, res) => {
    logger.info(serviceName + ": " + name+': /check endpoint hit')
    res.statusCode = 200;
    res.send({status: "success", msg: 'check route hit successfully'})
})

//getWeather api
router.get("/getWeather/", (req, res) => {
    logger.info(serviceName + ": " + name+': /getWeather endpoint hit')
    if(req.params.lon === undefined ||req.params.lat === undefined) {
        logger.error(serviceName + ": " + name+': /getWeather endpoint failure. lat/long data missing')
        res.statusCode = 500;
        res.send({status: "error", msg: 'lat/long data missing'});
    } else {
        controller.getWeather(req.params.lon, req.params.lat).then(
            (response)=> {
                //logger.info(serviceName + ": " + name+': /getWeather endpoint finished')
                if(response !== "" && response !== null){
                    logger.info(serviceName + ": " + name+': /getWeather endpoint success')   
                    res.statusCode = 200;
                    res.send(response); 
                }else{
                    logger.error(serviceName + ": " + name+': /getWeather failed to find data')
                    res.statusCode = 404;
                    res.send({status: "error", msg: 'failed to find data'});
                }
            },
            (err)=> {
                logger.error(serviceName + ": " + name+': /getWeather failed to find data' + err)
                res.statusCode = 500;
                res.send({status: "error", msg: 'failed to find data'});
            }
        )

        

    }
});

module.exports = router;