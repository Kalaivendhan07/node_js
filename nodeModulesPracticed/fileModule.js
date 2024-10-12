
const fs =require('fs');

// fs.writeFile('./example/newFile2.txt','Hi i am kalaivendhan',(err)=>{
//     if(err)
//           console.log(err);
//     else 
//           console.log('file succussfully created');
// })

// fs.rename('newFile.txt','normalFile.txt',(err)=>{
//     if(err)
//           console.log(err);
//     else 
//           console.log('file renamed');
// })


// fs.appendFile('normalFile.txt','   i am working in amshuhu i tech solution',(err)=>{
//     if(err)
//            console.log(err);
//     else
//            console.log('Content added');
// })

// fs.readFile('normalFile.txt','utf8',(err,file)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(file);
//     }
// })

// fs.unlink('normalFile.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file succussfully deleted');
//     }
// })

// we can delete the folder if the folder having files

// fs.mkdir('example',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('succussfully folder created');
//     }
// })

// fs.readdir('example','utf8',(err,files)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(files);
//        for (const file of files) {
//         //   console.log(file);
//         fs.unlink(`./example/${file}`,(err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('file deleted');
//             }
//         })
//        }
//     }
// })

// fs.rmdir('example',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('folder deleted   ');
//     }
// })