
const { log } = require('console');
const mysql =require('mysql');

const connnection=mysql.createConnection({
host:'localhost',
user:'root',
password:'root',
database:'practice_K'
});


connnection.connect((err)=>{
    if (err) throw err

    console.log('DB Connected succussfully');

    connnection.query("select * from strudent_info",(err,result)=>{
        if(err) throw err;

        var a=JSON.stringify(result);

        console.log(JSON.parse(a));

        // console.log(result);
    })
});


// pool connection

// For better performance and to manage multiple connections efficiently, you can use connection pooling:


const poolConnection=mysql.createPool({
    connectionLimit:'2',
    host:'localhost',
    user:'root',
    password:'root',
    database:'practice_K'
});

poolConnection.getConnection((err,connection)=>{
   if(err) throw err;

   connection.query("select * from isteer_cluster_master where status='A'",(err,result)=>{
    if (err) throw result;

    console.log(result,'result');
   });
})


poolConnection.getConnection((err,connection)=>{
    if(err) throw err;
 
    connection.query("select * from isteer_cluster_master where status='A' limit 1",(err,result)=>{
     if (err) throw result;
 
     console.log(result,'result 2');
    });
 })
