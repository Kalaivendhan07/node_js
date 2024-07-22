const { userInfo } = require('os');
const releadLine=require('readline');

// readline extends events module

const rl=releadLine.createInterface({input:process.stdin,output:process.stdout});

rl.question('Are you want to calculate your percentage ? (y/n)',(userInfo)=>{
    if( userInfo.trim()=='y'){

        rl.question('Which standard you studying ?',(userInfo)=>{
            if(userInfo.trim()==10){
                rl.question("enter your mark",(mark)=>{
                    let per=(mark/500)*100;
                
                    rl.setPrompt(`your percentage is ${per}`);

                    rl.prompt();

                })
                // rl.prompt(`your percentage is ${}`)
            }else if(userInfo.trim()==12){
                rl.question("enter your mark   -  ",(mark)=>{
                    let per=(mark/1200)*100;
                    rl.setPrompt(`your percentage is ${per}`);

                    rl.prompt();
                })
            }
        })
        
    }else{
        rl.close();
    }
})

