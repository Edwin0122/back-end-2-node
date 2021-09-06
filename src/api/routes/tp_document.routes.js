const { Router } = require("express");

module.exports = function({ Tp_DocumentController }) {
    const router = Router();
  
    router.get('/', Tp_DocumentController.getTpDocyments.bind(Tp_DocumentController));
    router.post('/', Tp_DocumentController.createTpDocyments.bind(Tp_DocumentController));



    /* router.get("/", Tp_DocumentController.getTpDocyment.bind(Tp_DocumentController));
    router.get("/:id", Tp_DocumentController.getTpDocyment.bind(Tp_DocumentController));
    router.post("/", Tp_DocumentController.createTpDocyment.bind(Tp_DocumentController));
    router.put("/:id", Tp_DocumentController.updateTpDocyment.bind(Tp_DocumentController));
    router.delete("/:id", Tp_DocumentController.deleteTpDocyment.bind(Tp_DocumentController));
   */
    return router;
  };