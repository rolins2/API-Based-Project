import express from 'express';
import axios from 'axios';

const app = express();
import bodyParser from "body-parser";
const port = 3000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})