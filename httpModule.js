const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        // res.write('Hellow world');
        // res.end();
        const file=fs.createReadStream('./static/dummy.json')
        // res.writeHead(200,{'content-type':'text/html'})
        // res.writeHead(200,{'content-type':'image/svg'})
        res.writeHead(200,{'content-type':'application/json'})

        file.pipe(res);

    }else{
        res.write('INCORRECT');
        res.end();
    }

})

server.listen('8080');