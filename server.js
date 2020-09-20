const http = require('http');
const server = http.createServer(function(req, resp){
   resp.end('I am alive');
});

server.listen(3000, function(){
   console.log('Server is running');
});