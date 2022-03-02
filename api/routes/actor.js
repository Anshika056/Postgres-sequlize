module.exports = app =>{
    const actor = require("../controllers/actor");

    const router = require("express").Router();

    // create a new actor
    router.post("/create", actor.createactor);
        
    //find an actor
    router.get('/:id', actor.findone);

    //find an actor to given condition
    router.get("/",actor.findall);

    //update an actor
    router.put("/update/:id",actor.update);

    //delete an actor
    router.delete("/delete/:id",actor.deleteactor);

    router.post("/add",actor.addMovie)

    app.use('/api/actor', router);


}