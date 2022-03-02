const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.send("hello")
    console.log("hi there!");  
})

const db = require("./api/models");
db.sequelize.sync({alter: true}).then(()=>{
    console.log("data synced");
}).catch(err=>console.log(err));


require("./api/routes/actor")(app);
require("./api/routes/movie")(app);
require("./api/routes/review")(app);
require("./api/routes/topmovies")(app);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
   console.log(`app is running at ${PORT}`);
})
