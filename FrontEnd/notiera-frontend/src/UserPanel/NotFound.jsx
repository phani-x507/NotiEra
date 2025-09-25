import React from "react";
import { useNavigate } from "react-router-dom";

export function NotFound(){
    const navigate = useNavigate();


    return(
        <>
            <div className="w-screen flex h-screen items-center justify-center bg-gray-500">
                    <div className="flex p-5 flex-col rounded-md bg-white" >
                        <h1 className="text-md sm:text-xl lg:text-3xl md:text:3xl">404. Page Not Found</h1>
                        <button onClick={()=>navigate('/')} className=" p-3 bg-green-300 m-3 hover:bg-green-200 cursor-pointer" >Login</button>
                    </div>
            </div>
        </>
    )
}