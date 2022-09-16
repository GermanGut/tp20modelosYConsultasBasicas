module.exports = (sequelize, dataTypes) => {

const alias = 'Actor';

const cols = {
    id : {
        type : dataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        allowNull : false,
        autoincrement : true,
        unique : true,
    },
    first_name : {
        type : dataTypes.STRING(100),
        allowNull : false,
    },
    last_name : {
        type : dataTypes.STRING(100),
        allowNull : false,
    },
    rating : {
        type : dataTypes.DECIMAL(3,1),
        allowNull : true, 
    },
    favorite_movie_id : {
        type : dataTypes.INTEGER.UNSIGNED,
        allowNull : true,
        unique : true, 
    },
}

const config = {
    tableName : 'actors',
    timetamps : true,
    underscore : true,
}

const Actor = sequelize.define(alias, cols, config)

return Actor
}

