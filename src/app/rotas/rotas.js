const db = require('../../config/database');
const LivroDao = require('../infra/LivroDao');

module.exports = (app) => {
  app.get('/', function(req, resp){
    resp.end('Menu');  
  });

  app.get('/livros', function(req, resp){
    
    const livroDao = new LivroDao(db);

    livroDao.lista(function(error, result){
      resp.marko(  
        require('../views/lista/livros.marko'),
        { livros: result });
    });
  });

  
}