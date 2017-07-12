
/**
 * Created by Administrator on 2017/7/5 0005.
 */
let Express = require('express');
let bodyParser = require('body-parser');
let app = Express();
let http = require('http');

app.use(bodyParser.json());
app.use((request, response, next) => {
    var req = http.get(request.query.url, function (res) {
        var datas = '';
        res.on('data', function (chunk) {
            datas += chunk;
        });
        res.on('end', function () {
            datas = JSON.parse(datas);

            /*console.log(datas);
            for(var i=0;i<datas.stories.length;i++){
                console.log(getImg(datas.stories[i].images[0]));
                datas.stories[i].images[0] = getImg(datas.stories[i].images[0]);
            }*/
            response.jsonp(datas);
        })
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
});
app.listen(4567);


function getImg(src){
    var img = new Image,
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

    img.crossOrigin = "Anonymous";

    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage( img, 0, 0 );
        localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
    }
    img.src = src;
    //  确保缓存的图片也触发 load 事件
    if ( img.complete || img.complete === undefined ) {
        img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        img.src = src;
    }
    return img.src;
}