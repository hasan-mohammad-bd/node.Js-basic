const EventEmitter = require('events');

const emitter = new EventEmitter();

//register a listenner for balring event 
emitter.on('bellRing', (period) => {
    console.log(`we need to run ${period}`);
});//this listener will not work if it is declared after raising event. 

//raise an event
emitter.emit('bellRing', 'second period ended')