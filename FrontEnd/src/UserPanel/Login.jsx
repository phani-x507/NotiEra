import React from "react";

export function Login() {

    return (
        <>
            <div className="border gradientBg h-screen   mx-auto flex flex-wrap flex-col justify-start sm:justify-center items-center">

                <div className="container bg-white rounded rounded-md border h-screen sm:h-auto border-gray-200 customShadow1 max-w-[500px]   sm:h-auto p-3">
                    <h1 className="text-3xl m-3  font-bold">Login</h1>
                    <img className="w-[200px] mb-4  mx-auto" src="notieraLogoBG.png" alt="" />

                    <label className="text-gray-800 font-sem text-xl " htmlFor="username">Username :</label>
                    <input type="email" name="username" className="border border-gray-400 w-full outline-gray-200 rounded rounded-md p-2 my-1" id="" />

                    <label className="text-gray-800  text-xl" htmlFor="username">Password :</label>

                    <input type="password" name="username" className="border border-gray-400 outline-gray-200  w-full rounded rounded-md p-2 my-1" id="" />

                    <button className="m-2 bg-white border border-gray-800 p-3 w-[150px] cursor-pointer hover:bg-gray-400 active:bg-gray-800 active:text-white" >Login</button><br />

                    <button className="text-sm my-2 text-blue-800 underline hover:text-blue-400 cursor-pointer ">Not Registered Yet? Click Here</button>






                </div>

            </div>
        </>
    )
}