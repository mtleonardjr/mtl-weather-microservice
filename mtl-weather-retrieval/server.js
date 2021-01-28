//Express initialization
const express = require('express');
const app = express();

//check api
app.get('/check', (req, res) => {
    res.send('retrieval running')
})

//Port assignment
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log('Server started on: ' + PORT));