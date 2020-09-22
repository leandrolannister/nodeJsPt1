const { ___resolveComponentKey } = require("marko/src/components/renderer");

class LivroDao{
  
  constructor(db){
   this._db = db;
   this._query = "SELECT * FROM LIVROS";
  }

  lista(){
    return new Promise((resolve, reject) => {
      this._db.all(
        this._query,
        (error, result) => { 
          if (error){
            return reject('Não foi possível listar os livros');
          }  
          return resolve(result)
        }  
      )            
    });
  }  
}

module.exports = LivroDao;