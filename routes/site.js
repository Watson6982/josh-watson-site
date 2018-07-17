var request = require('request');
var express = require('express');
var router = express.Router();

// 
router.get('/', (req, res) => {
    var url = 'https://graph.facebook.com/100001719130569?fields=picture.width(720).height(720)';
    var facebookprofile = request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        var JSONdata = JSON.parse(body);
        var imagelink = JSONdata.picture.data.url;
        console.log(imagelink);
        res.render('index', {profileURL: imagelink});
        }
    });
});

module.exports = router;