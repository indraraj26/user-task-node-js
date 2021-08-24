const express = require('express');
require('./db/mongoose');
const morgan = require('morgan')

const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use('/api', require('./src/api.routes'))

app.use(function (err, req, res, next) {
    res.json({result:false, message: 'Something went wrong'})
})

app.listen(8000, () => {
    console.log('Server is up on', 8000)
})

module.exports = app;