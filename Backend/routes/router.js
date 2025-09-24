import express from 'express';
import { logger } from '../middleware/logger.js';
import mongoose from 'mongoose';
import { Register, verifyLogin } from '../controllers/cred.js';
import { createNote, getNotes, Login } from '../controllers/mainController.js';
import verifyUser from '../middleware/auth.js';


const router = express.Router();

router.get('/',logger,Login)

router.post('/register',logger, Register);

router.post('/login',logger,verifyLogin);

router.get('/getNotes',verifyUser,getNotes);

router.post('/createNote',verifyUser,createNote); 


export default router;

