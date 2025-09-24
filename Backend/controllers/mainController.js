import express from 'express';
import mongoose from 'mongoose';
import notesData from '../config/noteSchema.js';



export const Login = (req, res) => {
    res.status(200).json({ msg: 'Login Controller' })
}

export const getNotes = async (req, res) => {
    console.log(req.uname);
    res.status(200).json({ msg: 'GetNotesReceived' })
}

export const createNote = async (req, res) => {
    try {
        const {noteHeading, noteContent } = req.body;
        const noteId = Math.floor(Math.random()*100000000);
        const Note =  new notesData({noteId,noteHeading,noteContent});
        await Note.save();
        return res.status(200).json({msg:'Note Created Successfully'});
    } catch (err) {
        return res.status(500);
    }
}