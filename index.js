import express from 'express';
import axios from 'axios';

const app = express();
import bodyParser from "body-parser";
const port = 3000;

const url  = "https://api.weatherbit.io/v2.0/current";
const api_key = "37e9beda33594207a415b790b51fc226"; 

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})