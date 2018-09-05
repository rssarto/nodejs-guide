const log = require('./logger');
const os = require('./os/app');

/* FUNCTIONALITIES FROM OS MODULE */
log(`Avaiable memory: ${os.features.osAvaialableMemory()}`);
log(`Free memory: ${os.features.osFreeMemory()}`);