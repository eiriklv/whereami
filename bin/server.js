var form = require('body/any');

module.exports = function () {
    var devices = {};
    return function (req, res) {
        if (req.method === 'POST') {
            form(req, res, function (err, body) {
                if (err) return res.end(err + '\n');
                devices[body.id] = body;
                res.end('ok\n');
            });
        }
        else {
            res.end(JSON.stringify(devices, null, 2) + '\n');
        }
    };
};
