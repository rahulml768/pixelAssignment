import express from "express"
import {getApiData} from "../Controller/userController.js"


export const Routes = express.Router();

//get route for gettoing user data
Routes.get("/",getApiData);