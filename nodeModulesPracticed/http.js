const http=require('http');

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('server created succussfully...!');
})

server.listen(7010,()=>{
    console.log('server port 7010');
})