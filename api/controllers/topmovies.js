const db = require("../models");
const Actor = db.actor;
const Movie = db.movie;
const Review = db.review;
const Op = db.Sequelize.Op;

exports.topmovie = (req,res) =>{
    Movie.findAll({where:{rating:{[Op.gte]:6}}, include:["review","actors"]})
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err=>{
        res.status(500).json({message:err.message || "something went wrong"})
    })
}