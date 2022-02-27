module.exports= app =>{
    const movie = require("../controllers/movie");

    const router = require("express").Router();

    //create
    router.post("/create",movie.create);



    app.use("/api/movie",router);
}