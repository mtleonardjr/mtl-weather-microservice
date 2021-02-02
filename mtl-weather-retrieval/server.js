//Express initialization
const express = require('express');
const app = express();
const logger = require('node-color-log');

//check api
app.get('/check', (req, res) => {
    res.send('retrieval running')
})

//Port assignment
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => logger.info('Server started on: ' + PORT));