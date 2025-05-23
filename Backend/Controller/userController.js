import { UserModel } from "../modal/userModal.js";
import { logger } from "../logger.js";

//get user data from mongodb 
export const getApiData = async (req, res, next) => {
  try {
    const apiData = await UserModel.find({});;
  
    if(!apiData){
       return res.status(400).json({message:"no Data found"})
    }
    return res.status(200).json({ apiData });
  } catch (err) {
    logger.error("Error fetching API data:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
