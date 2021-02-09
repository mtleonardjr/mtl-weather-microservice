const express = require('express');
const config = require('./resources/config')
const logger = require('node-color-log');
const cors = require('cors');

const app = express();

//Init middleware
app.use(express.json());

app.use(cors());

//Define Routes
app.use('/', require('./routes/route'));

//Port assignment
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => logger.info('Server started on: ' + PORT));