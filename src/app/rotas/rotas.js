module.exports = (app) => {
  app.get('/', function(req, resp){
    resp.end('Raiz');  
  });

  app.get('/php', function(req, resp){
    resp.marko(
        require('../views/lista/livros.marko')
    );      
  });

  app.get('/html', function(req, resp){
    resp.end('html');  
  });

  app.get('/java', function(req, resp){
    resp.end('java');  
  });
}