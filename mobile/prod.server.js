var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var appData = require('./data.json');
var homeSwiper = appData.homeSwiper;


var apiRoutes = express.Router();

apiRoutes.get('/homeSwiper', function (req, res) {
	res.json({
		errno: 0,
		srcArr: homeSwiper,
	});
});

app.use('/api', apiRoutes);




var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});
