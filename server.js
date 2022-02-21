const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.send("hello")
    console.log("hi there!");  
})

const db = require("./api/models");
db.sequelize.sync({force: true}).then(()=>{
    console.log("data synced");
}).catch(err=>console.log(err));

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
   console.log(`app is running at ${PORT}`);
})
