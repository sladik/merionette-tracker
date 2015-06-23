var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore');
var forks = [];

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('./'));


app.post('/action', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var fork = _.find(forks, function(v) {
        return v.id === req.body.id;
    });
    var checkAction = function (opt) {
        var index = opt.ip ? opt.ip.indexOf(ip) : -1;
        if (index !== -1) {
            opt.counter --;
            opt.ip.splice(index, 1);
        }
    };

    if(fork) {
        if (fork[req.body.action] && fork[req.body.action].ip.indexOf(ip) !== -1) {
            res.status(403).send();
        }
        else {
            fork[req.body.action] =  fork[req.body.action] || {};
            fork[req.body.action].ip =  fork[req.body.action].ip || [];
            fork[req.body.action].ip.push(ip);
            fork[req.body.action].counter = ++fork[req.body.action].counter || 1;
            var anotherOption = req.body.action === 'dislike' ? 'like' : 'dislike';
            checkAction(fork[anotherOption]);
            res.status(200).json({action:req.body.action});
        }

    } else {
        var action ={
            id : req.body.id
        };
        action[req.body.action] = {
            counter : 1,
            ip : []
        };
        action[req.body.action].ip.push(ip);
        forks.push(action);
        res.status(200).json({action:req.body.action});
    }
});

app.get('/', function(req,res) {
    res.sendFile('index.html');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Application starts at http://%s:%s', host, port);

});
