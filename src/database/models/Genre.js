module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(200)
        },
        ranking: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "genres",
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols, config)

    return Genre
}