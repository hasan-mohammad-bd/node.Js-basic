const EventEmitter = require('events');

const emitter = new EventEmitter(); //we can use emitter with emitter

//register a listener for bellring event 
emitter.on('bellRing', (period) => {
    console.log(`we need to run ${period}`);
});//this listener will not work if it is declared after raising event. 

//raise an event
emitter.emit('bellRing', 'second period ended' )