const express = require('express');
const http = require('http');
const { mongoose } = require('./db');
const cors = require('cors');
var plantsController = require('./controller/plantController');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.log(`Server is up and running on port ${port}`)
});

app.use('/plants', plantsController);


