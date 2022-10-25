const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());


const categories = require("./data/category.json")


app.get("/",(req,res)=>{
    res.send("Blockchain Course Api Running")
})

app.get("/course-categories",(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log("blockchain course on port ",port);
})