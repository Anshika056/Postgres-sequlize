module.exports = app =>{
    const actor = require("../controllers/actor");

    const router = require("express").Router();

    // create a new actor
    router.post("/create", actor.createactor);

    router.get('/:id', actor.findone);

    router.get("/",actor.findall);

    router.put("/:id",actor.update);

    app.use('/api/actor', router);


}