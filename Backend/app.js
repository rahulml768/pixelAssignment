import express from "express"
import cors from "cors"
import {logger} from "./logger.js"
import {dbConnect} from "./db/db.js"
import { Routes } from "./Routes/userRoutes.js"
import 'dotenv/config'



export const app  = express();
//middleware to convert into json format
app.use(express.json());
dbConnect();
app.use(express.urlencoded({extended:true}))
app.use(cors());


app.get("/",(req,res)=>{
    logger.info("home accessed")
    res.send(`hello world`);
});

app.use("/usersdata",Routes)
