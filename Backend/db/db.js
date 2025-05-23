import mongoose from "mongoose"
import { fetchAndStoreUsers } from "../storeData.js"
import { logger } from "../logger.js"
import cron from "node-cron";
import 'dotenv/config'

//connect monodb with server 
export const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE)
        mongoose.set("debug",true)
        console.log("db connected");
        fetchAndStoreUsers();
      
        //cron library use to automatic loading of function evry midnight
       cron.schedule("0 0 * * *", () => {
        console.log("Running atmidnight  user sync...");
            fetchAndStoreUsers();
       });  
    }
    catch(err){
        logger.error({message:err})
        process.exit();
    }
}