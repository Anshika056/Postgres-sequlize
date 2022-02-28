module.exports= app =>{
    const movie = require("../controllers/movie");

    const router = require("express").Router();

    //create
    router.post("/create",movie.create);

    //update
    router.put("/update/:id",movie.updatemovie);

    //delete
    router.delete("/delete/:id",movie.deletemovie);

    router.get("/get/:id",movie.findone);

    router.get("/get",movie.findall);


    app.use("/api/movie",router);
}