
const events=require('events');

// console.log(eventEmitter);

const eventsEmitter=new events();

eventsEmitter.on('trigger',()=>{
    console.log('done');
})

eventsEmitter.emit('trigger');


eventsEmitter.on('sumOfTwoNumbers',(a,b)=>{
   console.log(a+b);
})


eventsEmitter.emit('sumOfTwoNumbers',10,10);

