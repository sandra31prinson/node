var http=require('http')

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

http.createServer(Server).listen(7000)

function Server(req,res){

    res.write('hi.. sandra')
    res.end()
}

// function server(req,res){
//     res.end("crossroads")
//   }