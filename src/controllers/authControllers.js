import customRes from "../utils/resHandler.js";
import User from "../models/userModel.js"

const signup = async (req,res)=>{
    try{
        const {email,password} = req.body
         console.log("request mai body agaye haii.. -->",req.body);

         if(!email || !password){
            return customRes(res,400,"please fill all fields", false)
         }

         const user = new User({ email, password });
         await user.save()

        return customRes(res,200,"User signup successfully",true)

    }catch(error){
      return customRes(res,400,error.message, false)
    }
}

const login = (req,res) =>{}

export {signup,login}