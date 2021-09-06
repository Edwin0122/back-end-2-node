class Tp_DocumentController{

    constructor({tp_DocumentService}){
       this._tp_DocumentService = tp_DocumentService;
   } 


   async getTpDoctments(req, res){
       console.log();
       const tpDocuments = await this._tp_DocumentService.getTpDocuments();
       return res.send({
           error: false,
           payload: tpDocuments
       });
   }

   async createTpDocuments(req, res){
       const { body } = req;
       const createTpDocuments= await this._tp_DocumentService.createTpDocuments(body);
       return res.send({
           error: false,
           payload: createTpDocuments
       });
   } 

}

module.exports = Tp_DocumentController;