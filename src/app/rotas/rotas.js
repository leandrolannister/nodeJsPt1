module.exports = (app) => {
  app.get('/', function(req, resp){
    resp.end('Menu');  
  });

  app.get('/livros', function(req, resp){
    resp.marko(
        require('../views/lista/livros.marko'),
        {
          livros: [
            { 
              id: 1,
              titulo: 'Fundamentos do Node'
            },
            { 
              id: 2,
              titulo: 'Node Avançado'
            }
          ]
        }
    );      
  });

  
}