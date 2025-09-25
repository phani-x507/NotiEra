import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { Popup } from "./popUp";
import { useNavigate } from "react-router-dom";



export function CreateNotes() {
    const [noteHeading, SetTitle] = useState('');
    const [noteContent, SetContent] = useState('');
    const [response,SetResponse] = useState('');
    const [isOpen,SetIsOpen] = useState(false);
    const navigate = useNavigate();

    const sendNote = async () => {
        try{
        const token = localStorage.getItem('token');
        const res = await axios.post("http://localhost:8080/createNote", 
            {noteHeading,noteContent},
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(res.status == 200){
            SetResponse('Saved Successfully');
            SetIsOpen(true);
        }
        }catch(error){
            if(error.status == 500){
                navigate('/');
            }
        }


    }




    return (
        <>        <div className=" h-screen bg-gray-100 flex ">
            {/* For SIdebar */}

            <div className=" border-blue-800 h-screen">
                <Sidebar  val={2} />
            </div>

            <div className=" border-blue-700 flex-auto">

                <div className="border border-gray-200 h-[70px] w-full flex bg-white flex-row items-center px-2 justify-between ">

                    <div className="flex items-center ">
                        <button><i class="bi bi-patch-plus-fill mx-3 text-xl text-green-500"></i></button>
                        <h1>Create Note</h1>
                    </div>

                    <div className="">
                        <button onClick={sendNote} className="p-2 px-4 bg-green-400 rounded rounded-md"><i class="bi bi-sticky-fill"></i> &nbsp;Save</button>
                    </div>






                </div>


                <div className=" h-[calc(100%-70px)] p-2 overflow-y-auto">
                    <Popup isOpen={isOpen} onClose={()=>{navigate('/dashboard'); SetIsOpen(false);}} data={response} />
                    <input onChange={(e) => SetTitle(e.target.value)} type="text" className="border outline-gray-300 border-gray-300 border-l-0 border-r-0 mt-2 w-[95%] p-3 text-lg" name="" id="" placeholder="Enter Title" />

                    <textarea onChange={(e) => SetContent(e.target.value)} className=" outline-none bg-white w-full p-2 h-[calc(100%-70px)]" name="" id=""></textarea>
                </div>

            </div>



        </div>

        </>
    )
}