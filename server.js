const express = require('express');
const app = express();

require('./errorHandler');

const env = require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});


app.get('/', (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'Successfully connected!'
    })
})