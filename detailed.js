var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
    var id=req.params.id;
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {

        if(err) throw  err;
        data=JSON.parse(data);
        var address=findAddress(data,JSON.parse(id));
        
        if(address===false){
            res.status(404).end("id不存在");
        }

        else{
            res.send(data[address]);
            res.status(200).end();
        }

    });
});

function findAddress(data,id) {

    for(var i=0;i<data.length;i++){

        if(data[i].id===id){
            return i;
        }
    }

    return false;
}

module.exports=app;
