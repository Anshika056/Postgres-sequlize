const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/",(req,res)=>{
    res.send("hello")
    console.log("hi there!");  
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
   console.log(`app is running at ${PORT}`);
})
