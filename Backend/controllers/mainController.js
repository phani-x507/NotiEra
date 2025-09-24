import express from 'express';
import mongoose from 'mongoose';
import notesData from '../config/noteSchema.js';



export const Login = (req, res) => {
    res.status(200).json({ msg: 'Login Controller' })
}

export const getNotes = async (req, res) => {
    const uname = req.uname;
    try {
        const NotesData = await notesData.find({ noteBy: uname });
        return res.status(200).json({ notesData: NotesData });
    } catch (err) {
        return res.status(500);
    }


}

export const createNote = async (req, res) => {
    try {
        const { noteHeading, noteContent } = req.body;
        console.log(req.body);
        const noteId = Math.floor(Math.random() * 100000000);
        const Note = new notesData({ noteId, noteHeading, noteContent, noteBy: req.uname });
        await Note.save();
        return res.status(200).json({ msg: 'Note Created Successfully' });
    } catch (err) {
        return res.status(500);
    }
}

export const getNoteByID = async (req, res) => {

    const { noteId } = req.body;
    console.log(req.body);
    
    try {
        const Note = await notesData.findOne({ noteId: noteId });
        return res.status(200).json({ noteData: Note });
    } catch (err) {
        return res.status(500);
    }
}

export const updateNote = async (req, res) => {
    const { noteId, noteHeading, noteContent } = req.body;
    try {
        await notesData.findOneAndUpdate({ noteId: noteId }, { $set: { noteHeading: noteHeading, noteContent: noteContent } });
        return res.status(200).json({ msg: 'Note Updated Successfully' });
    } catch (err) {
        return res.status(500);
    } 
}

export const deleteNote = async (req, res) => {
    const { noteId } = req.body;
    try {
        await notesData.findOneAndDelete({ noteId: noteId });
        return res.status(200).json({ msg: 'Note Deleted Successfully' });
    } catch (err) {
        return res.status(500);
    }
}