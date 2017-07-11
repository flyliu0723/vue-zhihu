
/**
 * Created by Administrator on 2017/7/5 0005.
 */
let Express = require('express');
let bodyParser = require('body-parser');
let app = Express();
let http = require('http');

app.use(bodyParser.json());
app.use((request, response, next) => {
    console.log(request.query)
    var req = http.get(request.query.url, function (res) {
        var datas = '';
        res.on('data', function (chunk) {
            datas += chunk;
        });
        res.on('end', function () {
            datas = JSON.parse(datas);
            response.jsonp(datas);
        })
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
});
app.listen(4567);