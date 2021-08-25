const express = require('express');
require('./db/mongoose');

const app = express();

require('./src/middleware/app.middleware')(app);
app.use('/api', require('./src/api.routes'))

app.use(function (err, req, res, next) {
    res.json({result:false, message: 'Something went wrong'})
})

app.listen(8000, () => {
    console.log('Server is up on', 8000)
})

module.exports = app;