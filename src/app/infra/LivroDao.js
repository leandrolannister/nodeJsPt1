class LivroDao{
  
  constructor(db){
   this._db = db;
   this._query = "SELECT * FROM LIVROS";
  }

  lista(callback){
    this._db.all(
      this._query,
      (error, result) => callback(error, result)
    )
  }
}

module.exports = LivroDao;