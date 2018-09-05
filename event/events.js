const EventEmitter = require('events');
const Logger = require('../logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log(`log was called: ${arg}`);
});

//Raise an event
logger.log('testing log with event');
