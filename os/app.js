const os = require('os');

const features = {
    osAvaialableMemory: os.totalmem,
    osFreeMemory: os.freemem
};

exports.features = features;