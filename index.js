const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
//app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));

/*app.get('/', (req, res, next) => {
    res.send("Hello World!")
});*/

app.listen(3000);