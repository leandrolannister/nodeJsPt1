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
          return reject('Não foi possível cadastrar o livro')
        }
        return resolve(result);
      });      
    });
  }

  delete(id) {
    let query = `DELETE FROM livros
      WHERE id = ?`;

    return new Promise((resolve, reject) => {
      this._db.run(query, 
        (erro, result) => {
          if(erro){
            return reject('Não foi possível remover o livro')
          }
          return resolve(result);          
      });      
    });
  }

  find(id) {
    let query = `SELECT * FROM livros
      WHERE ID = ?`;

    return new Promise((resolve, reject) => {
      this._db.get(query,[
        id
      ], (erro, result) => {
          
          if(erro){
            return reject('Não foi possível encontrar o livro')
          }
          console.log(result);
          return resolve(result);          
      });      
    });
  }

  
}



module.exports = LivroDao;