const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const expressNunjucks = require('express-nunjucks');
const cookieParser = require('cookie-parser');

// routes files
var routes = require('./routes/site.js');

var PORT = process.env.PORT || 3000;

var app = express();
app.set('views', __dirname + '/views');

var isDev = app.get('env') === 'development';
var njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev,
    autoescape: true,
    throwOnUndefined: isDev 
});

// middlewares
app.use(express.static('public'))
app.use(helmet()); // security stuffs
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// set up separate routes files for easier management
app.use('/', routes);

// run the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});