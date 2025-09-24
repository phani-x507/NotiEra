import mongoose from "mongoose"
import user from "../config/userSchema.js"
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();



export const Register = async (req, res) => {
    try {
        const { fullname, username, password, email, mobile } = req.body;
        // Password hashing with 10 salt rounds
        // Do not Forget, Bcrypt is an asynchronous function.
        const hashedPassword = await bcrypt.hash(password, 10);
        const User = new user({ username, fullname, password: hashedPassword, email, mobile });
        await User.save();
        res.status(201).json({ msg: 'Registered Successfully' });
    } catch (err) {
        if(err.keyValue.username){
            res.status(202).json({ msg: `User Already exists with ${err.keyValue.username}` });
        }else if(err.keyValue.email){
             res.status(202).json({ msg: `User Already exists with ${err.keyValue.email}` });
        }
        else if(err.keyValue.mobile){
             res.status(202).json({ msg: `User Already exists with ${err.keyValue.mobile}` });
        }
    }

}


export const verifyLogin = async(req,res) => {  
    try{
        const {username,password} = req.body;
        
        const User = await user.find({username:username});
        if(User.length == 0){
            return res.status(200).json({msg:'User not Existed'})
        }
        const isPassword = await bcrypt.compare(password,User[0].password);
        console.log(isPassword); // checking

        if(isPassword){
            const token = jwt.sign({
                uname:User[0].username,
                email:User[0].email
            },process.env.JWT_KEY);
            res.status(200).json({msg:'Login Successful',token:token});
        }    
    }catch(err){
        res.status(500).json({msg:'Internal Server Error'});
    }

}
