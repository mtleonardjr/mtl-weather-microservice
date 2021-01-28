//Express initialization
const express = require('express');
const app = express();

//check api
app.get('/check', (req, res) => {
    res.send('dataservice running')
})

//Port assignment
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log('Server started on: ' + PORT));