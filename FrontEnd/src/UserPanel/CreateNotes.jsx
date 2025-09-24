import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export function CreateNotes() {
    const [title,SetTitle] = useState('');
    const [content,SetContent] = useState('');


    return (
        <>        <div className="border h-screen bg-gray-100 flex ">
            {/* For SIdebar */}

            <div className=" border-blue-800 h-screen">
                <Sidebar />
            </div>

            <div className=" border-blue-700 flex-auto">

                <div className="border border-gray-200 h-[70px] w-full flex bg-white flex-row items-center px-2 justify-between ">

                <div className="flex items-center ">
                   <button><i class="bi bi-patch-plus-fill mx-3 text-xl text-green-500"></i></button>
                <h1>Create Note</h1>
                </div>

                <div className="">
                    <button className="p-2 px-4 bg-green-400 rounded rounded-md"><i class="bi bi-sticky-fill"></i> &nbsp;Save</button>
                </div>





                   
                </div>

            <div className="border h-[calc(100%-70px)] p-2 overflow-scroll">
                    <input type="text" className="border outline-gray-300 border-gray-300 border-l-0 border-r-0 mt-2 w-[95%] p-3 text-lg" name="" id="" placeholder="Enter Title" />

                    <textarea className=" outline-none bg-white w-full p-2 h-[calc(100%-70px)]" name="" id=""></textarea>
            </div>

            </div>



        </div>

        </>
    )
}