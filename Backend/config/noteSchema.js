import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        noteId:{
            type:Number,  
            unique:true  
        },
        noteHeading:{
            type:String,
            required:[true,"Note heading is mandatory"]
        },
        noteContent:{
            type:String,
            required:[true,"Note content is mandatory"]
            
        },
        noteDate:{
            type:Date,
            default:Date.now
        }

    }
)
const notesData = mongoose.model('noteSchema',noteSchema);
export default notesData;