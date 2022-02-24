const db = require("../models");
const Movie = db.movie;
const Op = db.Sequelize.Op;
const Actor = db.actor;

exports.create = (req, res)=>{
    if(!req.body.title) return res.status(400).json({message: "Content cannot be empty"});

    // create
    const movie = {
        title: req.body.title,
        plot: req.body.plot,
        rating:0
    }
    // save
    Movie.create(movie)
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json({message: err.message || "Something went wrong"}));
}


