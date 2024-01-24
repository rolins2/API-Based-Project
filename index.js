import express from 'express';
import axios from 'axios';
import bodyParser from "body-parser";


const app = express();
const port = 3000;

const urls  = "https://api.weatherbit.io/v2.0/current";
const api_key = "37e9beda33594207a415b790b51fc226"; 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/getD",async(req,res)=>{
    console.log("this point has been hit");
    console.log(req.body.inp);

    let reqs = urls + "?&city="+ req.body.inp +"&key=" +api_key;

    console.log(reqs);

    try{
        const response = await axios.get(reqs);
        const result = response.data;

        console.log(result);

        res.render("index.ejs",{result});

    }catch(err){
        console.log(err);
    }
}
)
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})