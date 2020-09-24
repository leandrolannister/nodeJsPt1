const db = require('../../config/database');
const LivroDao = require('../infra/LivroDao');

module.exports = (app) => {
  
  app.get('/livros/form', function(req, resp){
     resp.marko(require('../views/form/form.marko'));   
  });

  app.post('/livros', function(req, resp){    
    const livroDao = new LivroDao(db);
    
    livroDao.store(req.body)
      .then()
      .catch(erro => console.log(erro));    
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