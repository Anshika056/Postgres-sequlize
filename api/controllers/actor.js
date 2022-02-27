const db = require("../models");
const Actor = db.actor;
const Movie = require("../models/movie");
const Op = db.Sequelize.Op;

exports.createactor = (req,res)=>{
    try{
   if(!req.body.name){
       return res.status(400).json("name cannot be empty");
   }
    const actor = {
        name:req.body.name
    }
    console.log("actor")
     Actor.create(actor)
     .then((data)=>{
       res.status(200).json(data)
     })
     .catch((err)=>{
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the actor"
          })
     })

    }catch(err){
        res.status(400).json(err);
    }
}


exports.findone = (req, res)=>{
try{
    const id = req.params.id;

    Actor.findByPk(id, {include :['movies']})
    .then((data)=> res.status(200).json(data))
    .catch((err)=>res.status(400).json({message: err.message||"Error while finding actor"}));
}catch(err){
    res.send(400).json(err);
}
}

exports.findall = (req, res)=>{
    const name = req.query.name;
    let condition = name ? {name: {[Op.iLike]:`%${name}%`}}: null;   
    Actor.findAll({where:condition, include :['movies']})
    .then(data=>res.status(200).json(data))
    
    .catch(err=>res.status(400).json(err));
}


exports.update = (req,res)=>{
    
     Actor.update(req.body,{where:{ id:req.params.id}})
    .then(num=>{
        if(num==1){
            res.status(201).json("Updated successfully")
        }
        else{
            res.status(400).json("not update")
        }
    })
    .catch(err=>res.status(501).json({message:err.message || "error updating Actor with id: "+req.params.id}));
}
    
exports.deleteactor = (req,res)=>{
        // console.log("pi");
    Actor.destroy({where:{
        id:req.params.id
    }})
    .then((num)=>{
        if(num==1){
            res.status(200).json("actor deleted");
        }
        else{
            res.status(400).json("not deleted");
        }
    })
    .catch((err)=>{
        res.status(400).json("error while deleting the actor");
    })
}