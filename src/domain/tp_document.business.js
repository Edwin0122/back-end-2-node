//attributes nos ayuda a configurrar nuestras entidades de nuestra clase
const {attributes} = require("structure");


//llamamos la funcion attributes para pasarle nuestros objetos de la DB
const Tp_Document = attributes({
    id_tp_document:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    acronym:{
        type: String
    }
})//hacemos el retorno de una funcion
(class User{
    getTpDocumentComplete(){
        return this.id_tp_document+" "+ this.description+ " "+this.acronym;
    }
});


module.exports = User;