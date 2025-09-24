import React, { useEffect, useState } from "react";
import { NotesData } from "../TestDB/NotesData";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Dashboard() {
    const [SearchText, SetText] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log(token); //Debug

    useEffect(() => {
        const getNotes = async () => {

            const res = await axios.get("http://localhost:8080/getNotes", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            if (res.status == 200) {
                console.log('Auth Is Successful');
            }

        }
        getNotes()


    }, [])





    const SearchedNotes = NotesData.filter((Note) => Note.note_heading.toLowerCase().includes(SearchText.toLowerCase()) || Note.note_content.toLowerCase().includes(SearchText.toLowerCase()));

    return (

        <>
            <div className=" h-screen bg-gray-100 flex ">
                {/* For SIdebar */}

                <div className=" border-blue-800 h-screen">
                    <Sidebar />
                </div>

                <div className=" border-blue-700 flex-auto">
                    <>
                        {/* Search TopBar */}
                        <div className="border border-gray-200 h-[70px] w-full flex bg-white flex-row items-center px-2 ">
                            <i className="" class="bi bi-binoculars-fill"></i>&nbsp;&nbsp;
                            <input type="text" onChange={(e) => SetText(e.target.value)} className="border outline-gray-200 w-[200px] bg-gray-100 border-gray-200 h-[50px] p-3 rounded" placeholder="Enter The Title Of Note" name="" id="" />
                            <button><i class="bi bi-patch-plus-fill mx-3 text-xl text-green-500"></i></button>
                        </div>
                        <div className=" p-3 mt-2 h-[calc(100%-78px)]  overflow-y-auto">
                            <h1 className="text-xl text-gray-700 ">Notes</h1>

                            <hr className="border border-gray-300 mt-3" />
                            {/* Notes Starts Here */}

                            {SearchedNotes.map((note, index) => {
                                return (
                                    <button onClick={() => navigate('/view', { state: { id: note.id } })} className="container min-h-[200px] sm:w-[250px] text-left cursor-pointer border border-gray-100 bg-white rounded rounded-xl w-fit p-3 m-1">
                                        <h1 className="limitHeading"><i class="bi bi-sticky-fill text-blue-500"></i> {note.note_heading}</h1>

                                        <hr className="border border-gray-200 my-2" />

                                        <p className="text-sm text-gray-700 text-justify limitPara">{note.note_content}</p>

                                        <p className="text-[10px] text-gray-500 text-right mt-2 mb-1" >{note.date}</p>

                                    </button>
                                )
                            })}


                        </div>


                    </>
                </div>



            </div>



        </>
    )
}