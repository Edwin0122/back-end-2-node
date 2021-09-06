module.exports = function(sequelize, DataTypes){
    return sequelize.define(
        "document_type",
        {
            id_tp_document:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey:true
                
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false
            },
            acronym:{
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: "document_type",
            timestamps: false
        }
    );
};