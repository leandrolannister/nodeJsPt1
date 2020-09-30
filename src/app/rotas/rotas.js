const db = require('../../config/database');
const LivroDao = require('../infra/LivroDao');

module.exports = (app) => {
  
  app.get('/livros/form', function(req, resp){
     resp.marko(require('../views/form/form.marko'), { livro: {}});   
  });

  app.post('/livros', function(req, resp){    
    const livroDao = new LivroDao(db);
    
    livroDao.store(req.body)
      .then(resp.redirect('/livros'))
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
  
  app.delete('/livros/:id', function(req, resp){
     const { id } = req.params;
     const livroDao = new LivroDao(db);
     
     livroDao.delete(id)
      .then(() => resp.status(200).end())
      .catch(erro => console.log(erro)); 
  });

  app.get('/livro/form/:id', function(req, resp){
    const id = req.params.id;
    const livroDao = new LivroDao(db);

    livroDao.find(id)
      .then(livro => 
        
        resp.marko(
          require('../views/form/form.marko'),
          { livro: livro }
      )
    ).catch(erro => console.log(erro));

  });  
}