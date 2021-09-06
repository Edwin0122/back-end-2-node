class Tp_DocumentRepository{
    constructor({db}){
        this._db = db;
}
        getTpDoctments(){
            return this._db.document_type.findAll();
        }
        createTpDocuments(user){
            return this._db.document_type.create();
        }
    
}


module.exports = Tp_DocumentRepository;