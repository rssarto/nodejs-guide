const http = require('http');
const Logger = require('../logger');

const logger = new Logger();

const server = http.createServer((request, response) => {
    if( request.url === '/' ){
        response.write(JSON.stringify({id: 1, name: 'Ricardo'}));
        response.end();
    }
});
server.listen(5000);
logger.log('listening on port 5000');
