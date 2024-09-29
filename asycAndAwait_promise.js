

const a=new Promise((resolve, reject) => {
    // console.log('promise a');
    const bool=true;
    if(bool){
        resolve('Hii kalai...api finish')
    }else{
        reject('rejected')
    }
})

const b=new Promise((resolve, reject) => {
    const bool=true;
    if(bool){
        setTimeout(()=>{
            resolve('Hii kalai...api 2 finish')
           },3000)
        
    }else{
        reject('rejected')
    }
   
})

// console.log(a);

// a.then(console.log('a promise completed')).then(console.log(b))

// let result=Promise.all([a,b]);


// console.log(result,'result');

// console.log(Promise.allSettled([a,b]));

// console.log(a);

// console.log(b);

async function api1(){
    return new Promise((resolve, reject) => {
        const bool=true;
        if(bool){
            setTimeout(()=>{
                resolve([1,2,3])
            },5000)
        }else{
            reject([]);
        }
    })
}

async function getFun(){
    console.log('check1');
    let result=await api1();
    console.log(result);
    console.log('check2');
}

getFun();