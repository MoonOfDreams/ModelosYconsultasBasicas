module.exports = (sequelize, dataTypes) => {

    const alias = "Genre"

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true 
        },
        active: {
            type: dataTypes.TINYINT(1),
            allowNull: false,
            default: 1
        }
    }


    const config = {
        timestamp: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName:"genres"
    }

    const Genre = sequelize.define(alias, cols, config)
    return Genre
}