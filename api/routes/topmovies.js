module.exports= app =>{
    const topmovies = require("../controllers/topmovies")

    const router = require("express").Router();

    router.get("/",topmovies.topmovie)

    app.use("/api/top",router);
}