const db = require('../../config/database');

module.exports = (app) => {
  app.get('/', function(req, resp){
    resp.end('Menu');  
  });

  app.get('/livros', function(req, resp){
    let query = 'SELECT * FROM LIVROS';
    db.all(query, function(error, result){
      resp.marko(  
        require('../views/lista/livros.marko'),
        { livros: result });
    });
  });

  
}