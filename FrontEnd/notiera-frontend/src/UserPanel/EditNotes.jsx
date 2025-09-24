import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";
import { NotesData } from "../TestDB/NotesData";

export function EditNotes() {
    const location = useLocation();
    const [title, SetTitle] = useState('');
    const [content, SetContent] = useState('');
    const [delid,Setdelid] = useState(0);

    const id = location.state.id;


    const Note = NotesData.find((note) => note.id == id)
    
    useEffect(()=>{
        SetContent(Note.note_content)
        SetTitle(Note.note_heading)
    },[])



    return (
        <>

            <div className="border h-screen bg-gray-100 flex ">
                {/* For SIdebar */}

                <div className=" border-blue-800 h-screen">
                    <Sidebar />
                </div>

                <div className=" border-blue-700 flex-auto">

                    <div className="border border-gray-200 h-[70px] w-full flex bg-white flex-row items-center px-2 justify-between ">

                        <div className="flex items-center ">
                            <button><i class="bi bi-patch-plus-fill mx-3 text-xl text-green-500"></i></button>
                            <h1>View Note</h1>
                        </div>

                        <div className="">
                            
                            <button onClick={()=>Setdelid(Note.id)}  className="p-2 mx-1 text-white cursor-pointer px-2 bg-red-400 rounded rounded-md"><i class="bi bi-trash2-fill"></i>&nbsp;<span className="hidden sm:inline">Delete</span></button>
                            
                            <button className="p-2 px-4 bg-green-400 rounded rounded-md cursor-pointer"><i class="bi bi-sticky-fill"></i> &nbsp;Save</button>
                        </div>
                    </div>

                    <div className=" h-[calc(100%-70px)]  p-2 overflow-y-auto flex flex-col items-center">
                        <input type="text" onChange={(e)=>SetTitle(e.currentTarget.value)} className="border outline-gray-300 border-gray-300 border-l-0 border-r-0 mt-2 w-[95%] md:w-full p-3 text-lg" name="" value={title} id="" placeholder="Enter Title" />

                        <textarea value={content} onChange={(e)=>SetContent(e.currentTarget.value)} className=" outline-none bg-white w-full p-2 h-[calc(100%-70px)] " name="" id=""></textarea>
                    </div>

                </div>



            </div>

        </>
    )
}