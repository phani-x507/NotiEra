import express from 'express';
import { logger } from '../middleware/logger.js';
import mongoose from 'mongoose';
import { getUserDetails, logout, Register, updateUserDetails, verifyLogin } from '../controllers/cred.js';
import { createNote, deleteNote, getNoteByID, getNotes, Login, updateNote } from '../controllers/mainController.js';
import verifyUser from '../middleware/auth.js';


const router = express.Router();

router.get('/',logger,Login)

router.post('/register',logger, Register);

router.post('/login',logger,verifyLogin);

router.get('/getNotes',verifyUser,getNotes);

router.post('/createNote',verifyUser,createNote); 

router.post('/getNoteByID',verifyUser,getNoteByID);

router.post('/updateNote',verifyUser,updateNote);

router.post('/deleteNote',verifyUser,deleteNote);

router.get('/userDetails',verifyUser,getUserDetails);

router.post('/updateUser',verifyUser,updateUserDetails);

router.post('/logout',logout);

export default router;

