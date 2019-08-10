const express = require('express');
const app = express();
app.use(express);

require('./errorHandler');

const env = require('dotenv').config();

port = process.env;

app.listen(port, () => {
    console.log('Server is live');
});


app.get('/', (req, res, next) => {
    return res.send(200).json({
        success: true,
        message: 'Successfully connected!'
    })
})