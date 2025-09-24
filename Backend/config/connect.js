import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async() =>{
    try{
        const MONGO_URL = process.env.MONGO_URL; 
        const conn = mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("DB Connected");
    }
    catch(err){
        console.log(err);
        process.exit(1);

    }
}

export default connectDb;