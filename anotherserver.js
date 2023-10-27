var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res){

var q=url.parse(req.url,true)


    if(q.pathname==='/'){

   

    fs.readFile('index.html',function(err,data){

        res.writeHead(200,{'content-Type':'text/html'})
    res.write(data);
    res.end()

    })

  }  
   else if(q.pathname=='/signup'){
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
    res.end()

    })
 
    

    }
    else if(q.pathname=='/signupaction'){

        console.log(q.query,)

        res.write('action')
        res.end()
      
    
        }

    else{
        res.write('error')
        res.end()
    }


}).listen(8000,()=>console.log('server started'))
