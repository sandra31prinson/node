var http = require('http')

http.createServer(function(req,res){

    res.write('sandra');
    res.end()
}).listen(8000)
