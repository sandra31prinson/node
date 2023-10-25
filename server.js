var http = require('http')

http.createServer(Server).listen(7000)

function Server(req,res){

    res.write('hi.. sandra')
    res.end()
}