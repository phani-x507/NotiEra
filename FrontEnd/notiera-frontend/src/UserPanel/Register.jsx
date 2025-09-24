import React from "react";
import { useNavigate } from "react-router-dom";


export function Register() {
    const navigate = useNavigate();

    return (
        <>
            <div className="border gradientBg h-screen   mx-auto flex flex-wrap flex-col justify-start sm:justify-center items-center">

                <div className="container bg-white rounded md:p-5 rounded-md border h-screen sm:h-auto border-gray-200 customShadow1 max-w-[500px]   sm:h-auto p-3">
                    <h1 className="text-3xl m-3  font-bold">Register</h1>
                    <img className="w-[200px] mb-4  mx-auto" src="notieraLogoBG.png" alt="" />
                    <label htmlFor="">Full Name</label><br />
                    <input type="text" className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                    <br />
                    <label htmlFor="" >Username</label><br />
                    <input type="text" className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                    <br />
                    <label htmlFor="">Password</label><br />
                    <input type="password" className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                    <br />
                    <label htmlFor="">Email</label><br />
                    <input type="email" className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />

                    <br />
                    <label htmlFor="">Mobile Number</label><br />
                    <input type="number" className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                    <br />
                    <button className="m-2 bg-white border border-gray-800 p-3 w-[150px] cursor-pointer hover:bg-gray-400 active:bg-gray-800 active:text-white" >Register</button><br />
                    <button onClick={()=>navigate('/')} className="text-sm my-2 text-blue-800 underline hover:text-blue-400 cursor-pointer ">Already Registered? Click Here to Login</button>







                </div>

            </div>
        </>
    )
}