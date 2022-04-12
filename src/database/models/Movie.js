module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: dataTypes.STRING(200)
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false
    };

    const Movie = sequelize.define(alias, cols, config)

    return Movie
}