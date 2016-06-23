var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var detailde=require("./detailed");
var add=require("./add");
var deleted=require("./deleted");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/detailde",detailde);
app.use("/",add);
app.use('/delete',deleted);

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})