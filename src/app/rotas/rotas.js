module.exports = (app) => {
  app.get('/', function(req, resp){
    resp.end('Raiz');  
  });

  app.get('/php', function(req, resp){
    resp.end('PHP');  
  });

  app.get('/html', function(req, resp){
    resp.end('html');  
  });
}