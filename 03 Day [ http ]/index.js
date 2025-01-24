const http = require('http') 

server = http.createServer((req,res)=>{
   if(req.url == '/'){
    res.end('This is Home page')
   }
   if(req.url == '/about'){
    res.end('This is About page')
   }
   if(req.url == '/contact'){
    res.end('This is Contact page')
   } 
})

server.listen(4000,()=>{
    console.log('server is running on port 4000')
})