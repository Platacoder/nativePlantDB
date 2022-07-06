const express = require('express');
const http = require('http');
const { mongoose } = require('./db');
var plantsController = require('./controller/plantController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.log(`Server is up and running on port ${port}`)
});

app.use('/plants', plantsController);


