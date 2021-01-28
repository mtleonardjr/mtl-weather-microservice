const express = require('express');
const router = express.Router();
const logger = require('node-color-log');
const name = 'route';

//check api
router.get('/check', (req, res) => {
    logger.info(name+': /check endpoint hit')
    res.statusCode = 200;
    res.send({status: "success", msg: 'check route hit successfully'})
})

module.exports = router;