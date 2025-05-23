import { UserModel } from "./modal/userModal.js";
import axios from "axios"
import { logger } from "./logger.js";
export const fetchAndStoreUsers = async()=> {
    try {   
      const response = await axios.get("https://randomuser.me/api/?results=30&seed=pixel");
      const users = response.data.results;
  
      // Map users to an array of promises
      const updatePromises = users.map(user => {
        const data = {
          uuid: user.login.uuid,
          city: user.location.city,
          state: user.location.state,
          latitude: user.location.coordinates.latitude,
          longitude: user.location.coordinates.longitude,
          postcode: user.location.postcode,
          streetNumber: user.location.street.number,
          streetName: user.location.street.name,
          country:user.location.country,
          name:user.name.first,
          profile:user.picture.thumbnail
        };
  
        // Return the updateOne promise
        return UserModel.updateOne(
          { uuid: data.uuid },
          { $set: data },
          { upsert: true }
        );
      });
  
      // Wait for all update promises to complete
      await Promise.all(updatePromises);
  
      logger.info("Users synced successfully");
    } catch (error) {
      logger.error("Error fetching/storing users:", error.message);
    }
  }
  