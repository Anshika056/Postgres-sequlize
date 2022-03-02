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

db.actor = require("../models/actor")(sequelize, Sequelize);
db.movie = require("../models/movie")(sequelize, Sequelize);
db.review = require("../models/review")(sequelize, Sequelize);

db.actor.belongsToMany(db.movie,{
    through:"actor_movie",
    foreignKey: "actorId",
})

db.movie.belongsToMany(db.actor,{
    through:"actor_movie",
    as: "actors",
    foreignKey: "movieId",
})

db.movie.hasMany(db.review, {as:'review'});
db.review.belongsTo(db.movie,{
    foreignKey: "movieId", as: "movie",
});


module.exports = db;


