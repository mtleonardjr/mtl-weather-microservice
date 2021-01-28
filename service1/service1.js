//Express initialization
const express = require('express');
const app = express();

//check api
app.get('/check', (req, res) => {
    res.send('Service 1 running')
})

//Port assignment
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('Server started on: ' + PORT));