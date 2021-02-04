const express = require('express');
const router = express.Router();
const logger = require('node-color-log');
const controller = require('../library/gateway-controller')
const config = require('../resources/config')
const serviceName = config.serviceName;
const name = 'route';

//check api
router.get('/check', (req, res) => {
    logger.info(serviceName + ": " + name+': /check endpoint hit')
    res.statusCode = 200;
    res.send({status: "success", msg: 'check route hit successfully'})
})

//main api to get weather forcast based on zip code input
router.post('/weather', (req, res) => {
    if (req.body.zip === undefined || req.body === undefined) {
        logger.error(serviceName + ": " + name+': /weather endpoint failure. zip code missing')
        res.statusCode = 500;
        res.send({status: "error", msg: 'zip code missing'});
    } else {
        logger.info(serviceName + ": " + name+': /weather endpoint hit')
        controller.processZip(req.body.zip).then(
            (response)=> {
                logger.info(serviceName + ": " + name+': /weather endpoint success')   
                res.statusCode = 200;
                res.send({status: "success", msg: response});
            },
            (err)=> {
                logger.error(serviceName + ": " + name+': /weather endpoint failure' + err)
                res.statusCode = 500;
                res.send({status: "error", msg: 'note failed to update'});
            }
        )
    }
});

module.exports = router;