

const express=require('express');

const exphb=require('express-handlebars');

const bodyParser=require('body-parser');

require('dotenv').config();

const app=express();

const port=process.env.port || 8080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use(express.static(''))

// listen port

app.listen(8080,()=>{
    console.log('working port',{port});
});