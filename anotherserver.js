var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    if(req.url==='/'){

   

    fs.readFile('index.html',function(err,data){

        res.writeHead(200,{'content-Type':'text/html'})
    res.write(data);
    res.end()

    })

  }  
   else if(req.url=='/login'){

    res.write('login')
    res.end()


    }

    else{
        res.write('error')
        res.end()
    }


}).listen(8000,()=>console.log('server started'))
