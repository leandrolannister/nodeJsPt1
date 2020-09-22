const db = require('../../config/database');
const LivroDao = require('../infra/LivroDao');

module.exports = (app) => {
  app.get('/', function(req, resp){
    resp.end('Menu');  
  });

  app.get('/livros', function(req, resp){
    
    const livroDao = new LivroDao(db);
    
    livroDao.lista()
    .then(livros => resp.marko(  
      require('../views/lista/livros.marko'),
      { livros: livros } 
    ))
    .catch(error => console.log(error));    
  });  
}