import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { logger } from './middleware/logger.js';
import connectDb from './config/connect.js';
import { errorHandler, errors } from './ErrorHandler/MainErrorHandler.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
connectDb();
dotenv.config();



app.use(router);


app.use(errorHandler)
app.use(errors);

app.listen(process.env.PORT,()=>{
    console.log(`Running on port ${process.env.PORT}`);
});
