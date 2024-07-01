const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/api', function (req, res) {
    res.send('Hello World!');
});


app.post('/api', function (req, res) {
    console.log(req.body)
    res.status(200).json({app: true});
})

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
    console.log(req.body)
    res.status(200).json({app: true});
})




app.listen(4444, function () {
    console.log('Example app listening on port 4444!');
});
