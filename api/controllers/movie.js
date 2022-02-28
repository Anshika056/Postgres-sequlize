const db = require("../models");
const Movie = db.movie;
const Op = db.Sequelize.Op;
const Actor = db.actor;

exports.create = async (req, res)=>{
    if(!req.body.title) {
        return res.status(400).json("you cannot keep your content empty");
    }

    // create
    const movie = {
        title: req.body.title,
        plot: req.body.plot,
        rating:0
    }
    // save
   const movies = await Movie.create(movie);         
    // .then(data=>res.status(200).json(data))
    // .catch(err=>res.status(500).json({message: err.message || "Something went wrong"}));
    if(movies){
        res.status(200).json(movie)
    }
}


//update a movie  
exports.updatemovie = (req,res)=>{
    const id = req.params.id
     Movie.update(req.body,{where:{id:id}})
    .then(num=>{
         if(num==1){
             res.status(200).json("movie has been updated");
         }
         else{
             res.status(400).json("cannot update the movie");
         }
    })
    .catch(err=>{
        res.status(500).json({message: err.message || "something went  wrong"});
    })
}

//delete movie
exports.deletemovie = (req,res)=>{
    const id = req.params.id
    Movie.destroy({where:{
        id:id
    }})
    .then(num=>{
        if(num==1){
            res.status(200).json("movie has deleted");
        }
        else{
            res.status(400).json("cannot delete movie");
        }
    })
    .catch(err=>{
        res.status(400).json({message:err.message || "sommethig went wrong"});
    })
}



exports.findone = (req, res)=>{
    const id = req.params.id;

    Movie.findByPk(id,{include:['actors']})
    .then(data=>res.status(201).json(data))
    .catch(err=>res.status(501).json({message: err.message||"Error retrieving movie"}));
}

exports.findall = (req,res) =>{

    const title = req.query.title;
    const plot = req.query.plot
   // let condition = title ? {title: {[Op.iLike]:`%${title}%`}}: null;
   // let plotcon = plot ? {plot: {[Op.iLike]:1`%${plot}%`}}:null

    Movie.findAll({where : {
        [Op.or]:[{
            title : {[Op.iLike]:`%${title}%`}
        },{
             plot:  {[Op.iLike]:`%${plot}%`}
        }]
    }, include : ['actors']})
    .then(data=>res.status(201).json(data))
    .catch(err=>res.status(501).json({message: err.message||"Error retrieving movies"}));
}
