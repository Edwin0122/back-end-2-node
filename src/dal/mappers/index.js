module.exports = {
    toDbEntity(user){
        const {document_number, first_name, second_name, surname, second_surname, fk_id_tp_document, } = user;
        return new User ({document_number, first_name, second_name, surname, second_surname, fk_id_tp_document, fk_country_id});
    },
    toDbEntity(tp_document){
        const {id_tp_document, description, acronym}=tp_document;
        return new Tp_Document ({id_tp_document, description, acronym});
    }
};