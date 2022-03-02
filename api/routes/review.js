module.exports= app =>{
    const review = require("../controllers/review")

    const router = require("express").Router();
   
    //create a review
    router.post("/",review.createreview)

    // delete a review 
    router.delete("/:id",review.deletereview)

    app.use("/api/review",router);

}