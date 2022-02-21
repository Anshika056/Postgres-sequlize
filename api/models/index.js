const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{          //new ins
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})                                
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const {DataTypes} = Sequelize


db.users = require("../models/users")(sequelize, Sequelize);

module.exports = db;


