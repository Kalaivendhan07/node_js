
const express=require('express');

const path=require('path');

const bodyParser=require('body-parser')

const app=express();

app.get('/',(req,res)=>{
    res.send('Hellow world');
});

app.get('/example',(req,res)=>{
    res.send('Hii kalai');
});

app.get('/example/:name/:age',(req,res)=>{
    res.send(req.params);
    console.log(req.query);
});

// get the static files

// not working need clarification
app.use('/public',express.static(path.join(__dirname,'static','index.html')));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/example/index',(req,res)=>{

    console.log(__dirname,'directory name');
    res.sendFile(path.join(__dirname,'static','index.html'))
    
})

app.get('/example/formpage',(req,res)=>{

    console.log(__dirname,'directory name');
    res.sendFile(path.join(__dirname,'static','form.html'))
    
})

// http post requies
app.post('/example/form',(req,res)=>{
    console.log(req.body);
    res.send('Succussfully posted');
})

 
app.listen(8080);