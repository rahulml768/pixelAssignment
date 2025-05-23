import mongoose, { trusted } from "mongoose"


//user schema
const  userSchema = new mongoose.Schema({
    uuid:{type:String,requird:true,unique:true},
    city: { type: String, required: true },
  state: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  postcode: { type: mongoose.Schema.Types.Mixed, required: true },
  streetNumber: { type: Number, required: true },
  streetName: { type: String, required: true },
  country:{type:String ,required:true},
  name:{type:String,required:true},
  profile:{type:String,required:true}
});

export const UserModel = mongoose.model("users",userSchema);