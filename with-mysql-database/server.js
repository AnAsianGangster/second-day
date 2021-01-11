const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.json());

/* app.get('/', (req, res) => {
    res.json({
        message: 'hit',
    });
}); */

const db = require('./model');

require('./routes/index')(app);
db.sequelize.sync();

app.listen(port, () => {
    console.log('running');
});
