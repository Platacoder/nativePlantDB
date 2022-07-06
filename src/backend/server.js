const express = require('express');
const http = require('http');
const routes = require('./routes/base.route');
const { mongoose } = require('./db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.log(`Server is up and running on port ${port}`)
});


