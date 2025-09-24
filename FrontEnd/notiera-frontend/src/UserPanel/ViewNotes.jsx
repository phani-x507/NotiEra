import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { NotesData } from "../TestDB/NotesData";
import axios from "axios";


export function ViewNotes() {
    const location = useLocation();
    const navigate = useNavigate();
    const [title, SetTitle] = useState('');
    const [content, SetContent] = useState('');
    const [delid, Setdelid] = useState(0);
    const [note, Setnote] = useState([]);
    const token = localStorage.getItem('token');

    const noteId = location.state.noteId;

    useEffect(() => {

        const getNote = async () => {

            const res = await axios.post("http://localhost:8080/getNoteByID",
                { noteId }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
            if (res.status == 200) {
                Setnote(res.data.noteData)
            }
        }

        getNote();

    }, [])

    const deleteData = async () => {
        const token = localStorage.getItem('token')
        const res = await axios.post("http://localhost:8080/deleteNote",
            { noteId }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (res.status == 200) {
            console.log('Successfully Deleted');
            navigate('/dashboard');
        }
    }


    return (
        <>

            <div className="border h-screen bg-gray-100 flex ">
                {/* For SIdebar */}

                <div className=" border-blue-800 h-screen">
                    <Sidebar val={3} />
                </div>

                <div className=" border-blue-700 flex-auto">

                    <div className=" border border-gray-200 h-[70px] w-full flex bg-white flex-row items-center px-2 justify-between ">

                        <div className="flex items-center ">
                            <button><i class="bi bi-patch-plus-fill mx-3 text-xl text-green-500"></i></button>
                            <h1>View Note</h1>
                        </div>

                        <div className="">

                            <button onClick={deleteData} className="p-2 mx-0.5 text-white cursor-pointer px-2 bg-red-400 rounded rounded-md"><i class="bi bi-trash2-fill"></i>&nbsp;<span className="hidden sm:inline">Delete</span></button>
                            <button onClick={() => navigate('/edit', { state: { noteId: note.noteId } })} className="p-2 px-2 bg-blue-400 mx-0.5 rounded rounded-md cursor-pointer"><i class="bi bi-pen-fill"></i> &nbsp;<span className="hidden sm:inline">Edit</span></button>


                        </div>
                    </div>

                    <div className=" h-[calc(100%-70px)] bg-white  p-2 overflow-y-auto flex flex-col items-center">
                        <input type="text" onChange={(e) => SetTitle(e.currentTarget.value)} className="border outline-gray-300 border-gray-300 border-l-0 border-r-0 mt-2 w-[95%] md:w-full p-3 text-lg" name="" value={note.noteHeading} id="" placeholder="Enter Title" />
                        <pre className=" text-xs whitespace-pre-wrap break-words w-70 md:w-[100%]">{note.noteContent}</pre>
                    </div>

                </div>



            </div>

        </>
    )
}