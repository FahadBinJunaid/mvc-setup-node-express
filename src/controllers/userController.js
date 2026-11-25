import customRes from "../utils/resHandler.js";
import User from "../models/userModel.js"

const getAllUsers = async (req, res) =>{
    try {
       const allUsers = await User.find();

       if(allUsers){
        return customRes(res, 200, "fetched all users", true , allUsers);
       }
    } catch (error) {
       return customRes(res, 400, error.message, false);
    }
}


export {getAllUsers}