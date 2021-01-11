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

require('./routes/index')(app);

app.listen(port, () => {
    console.log('running');
});
