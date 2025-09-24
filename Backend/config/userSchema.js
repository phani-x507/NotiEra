import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname:{
            type:String,
            required:[true,"fullname is mandatory"]
        },
        username :{
            type:String,
            unique:true,
            required:[true,"username is mandatory"]
        },
        password:{
            type:String,
            required:[true,"password is Mandatory"]
        },
        email:{
            type:String,
            unique:true,
            required:[true,"email is mandatory"]
        },
        mobile:{
            type:Number,
            required:[true,"mobile number is mandatory"],
            unique:true
        }
    }
)

const user = mongoose.model('user',userSchema);
export default user;