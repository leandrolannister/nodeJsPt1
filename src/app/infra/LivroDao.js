const { ___resolveComponentKey } = require("marko/src/components/renderer");

class LivroDao{
  
  constructor(db){
   this._db = db;   
  }

  lista(){
    let query = "SELECT * FROM LIVROS";
    return new Promise((resolve, reject) => {
      this._db.all(query,
        (error, result) => { 
          if (error){
            return reject('Não foi possível listar os livros');
          }  
          return resolve(result)
        }  
      )            
    });
  } 
  
  store(livro) {
    let query = `INSERT INTO livros(
      titulo,
      preco,
      descricao
    ) values(?,?,?)`;

    return new Promise((resolve, reject) => {
      this._db.run(query ,[
        livro.titulo,
        livro.preco,
        livro.descricao
      ], (erro, result) => {
        if(erro){
          return reject('Não foi possível listar os livros')
        }
        return resolve(result);
      });      
    });
  }
}

module.exports = LivroDao;