// src/server.js
const path = require('path');
const Express = require('express');
const config = require('./config');
const api = require('./api');

const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'files')));

app.get('/', (req, res) => {
    return res.render('index.ejs');
});

// API
//app.get('/api/champs', api.getAllChamps);
app.get('/api/champ/:id', api.getChamp);

// start the server
const port = config.port;
const env = config.name;

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});
