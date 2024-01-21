import express from 'express';
import axios from 'axios';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

const url  = "https://api.weatherbit.io/v2.0/current";
const api_key = "37e9beda33594207a415b790b51fc226"; 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/getD",(req,res)=>{
    console.log("this point has been hit");
    console.log(req.body);
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})