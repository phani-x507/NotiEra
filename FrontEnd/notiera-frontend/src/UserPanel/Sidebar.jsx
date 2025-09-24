import React from "react";
import { useNavigate } from "react-router-dom";


export function Sidebar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full h-full bg-white md:min-w-[200px]  lg:min-w-[230px] border border-gray-200">
                <img className=" w-[70px] md:w-[150px] mt-3 mx-auto" src="notieraLogoBG1.png" alt="" />

                <div className="flex mt-4 p-2 flex-col ">
                    <button onClick={()=>navigate('/dashboard')} className=" w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800 cursor-pointer p-3"><i class="bi bi-house-fill"></i> <span className="hidden md:inline">Dashboard</span></button>
                    <button onClick={()=>navigate('/create')} className=" w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800 cursor-pointer p-3"><i class="bi bi-patch-plus-fill"></i> <span className="hidden md:inline">Create Notes</span></button>
                    <button className=" w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg  hover:bg-blue-100 hover:text-blue-800 cursor-pointer p-3"><i class="bi bi-pen-fill"></i> <span className="hidden md:inline">Manage Notes</span></button>
                    <button onClick={()=>navigate('/profile')} className=" w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800 cursor-pointer p-3"><i class="bi bi-person-fill"></i> <span className="hidden md:inline">Profile</span></button>
                    <button className=" w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800 cursor-pointer p-3"><i class="bi bi-door-closed-fill"></i> <span className="hidden md:inline">Logout</span></button>


                </div>




            </div>
        </>
    )
}