const EventEmitter = require('events');

const sgoutEvent = new EventEmitter();

//this will listen to this event
shoutEvent.on('echopoint', function(){
    console.log("Custom event received: ", data);
})

shoutEvent.emit('echopoint', {message: 'shouting name on echo point'}

)