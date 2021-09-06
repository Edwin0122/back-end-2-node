//maper del domain
const {toDomainEntity} = require("../domain/models")
const {toDbEntity} = require("../dal/mappers")

//Aqui se crean los metodos que manipulan la entidad
class tp_DocumentService{
    //conecssion a Tp_DocumentRepository
    constructor({Tp_DocumentRepository}){
        this._Tp_DocumentRepository = Tp_DocumentRepository;
    }
    async getUsers(){
        const tp_documents = await this._Tp_DocumentRepository.getUsers();
        // aca va cualquier logica de validacion, etc

        return tp_documents.map(toDomainEntity);
    }

    async createTpDocument(tp_document){
        user = toDbEntity(tp_document);
        const createTpDocument = await this._Tp_DocumentRepository.createUser(tp_document);
        return createTpDocument;
    }


}


module.exports = tp_DocumentService;