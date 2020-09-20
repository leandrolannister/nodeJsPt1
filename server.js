const app = require('./src/app/config/express-custom');

app.get('/', function(req, resp){
   resp.end('I am alive2');
});

app.listen(3000, function(){
   console.log('Server is running');
});