
const events=require('events');

// console.log(eventEmitter);

// Core Concepts of the events Module
// EventEmitter class – The main class for creating custom event emitters.
// emit() – Emits (triggers) an event.
// on() – Adds a listener (callback) for an event.
// once() – Adds a listener that is called only once and then removed.
// removeListener() or off() – Removes a specific listener for an event.
// removeAllListeners() – Removes all listeners for a specific event.
// listeners() – Returns the list of listeners for a specific event.


const eventsEmitter=new events();

eventsEmitter.on('trigger',()=>{
    console.log('done');
})

eventsEmitter.emit('trigger');


eventsEmitter.on('sumOfTwoNumbers',(a,b)=>{
   console.log(a+b);
})


eventsEmitter.emit('sumOfTwoNumbers',10,10);

