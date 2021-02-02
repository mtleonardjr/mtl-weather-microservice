const express = require('express');
const router = express.Router();
const logger = require('node-color-log');
const config = require('../resources/config')
const controller = require('../library/zip-controller')
const serviceName = config.serviceName;
const name = 'route';

//check api
router.get('/check', (req, res) => {
    logger.info(serviceName + ": " + name+': /check endpoint hit')
    res.statusCode = 200;
    res.send({status: "success", msg: 'check route hit successfully'})
})

//lookup api
router.get("/lookup/:zip", (req, res) => {
    logger.info(serviceName + ": " + name+': /lookup endpoint hit')
    if(req.params.zip === undefined) {
        logger.error(serviceName + ": " + name+': /lookup endpoint failure. zip data missing')
        res.statusCode = 500;
        res.send({status: "error", msg: 'zip data missing'});
    } else {
        controller.lookUp(req.params.zip).then(
            (response)=> {
                //logger.info(serviceName + ": " + name+': /lookup endpoint finished')
                if(response !== "" && response !== null){
                    logger.info(serviceName + ": " + name+': /read endpoint success')   
                    res.statusCode = 200;
                    res.send(response); 
                }else{
                    logger.error(serviceName + ": " + name+': /lookup failed to find data')
                    res.statusCode = 404;
                    res.send({status: "error", msg: 'failed to find data'});
                }
            },
            (err)=> {
                logger.error(serviceName + ": " + name+': /lookup failed to find data' + err)
                res.statusCode = 500;
                res.send({status: "error", msg: 'failed to find data'});
            }
        )

        

    }
});

module.exports = router;