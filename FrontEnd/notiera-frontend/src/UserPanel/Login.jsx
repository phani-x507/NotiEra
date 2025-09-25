import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "./Register";
import axios from "axios";



export function Login() {
    const [username,Setusername] = useState('');
    const [password,Setpassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async() =>{
        try{
            const res = await axios.post("http://localhost:8080/login",{
                username,password
            });

            if(res.status == 200){
                localStorage.setItem('token',res.data.token);
                navigate('/dashboard');
            }

        }catch(error){
                if(error.status == 500){
                    navigate('/')
                }

            }
        
    }


    return (
        <>
            <div className="border gradientBg h-screen   mx-auto flex flex-wrap flex-col justify-start sm:justify-center items-center">

                <div className="container bg-white rounded rounded-md border h-screen sm:h-auto border-gray-200 customShadow1 max-w-[500px] sm:w-fit  sm:h-auto p-3">
                    <h1 className="text-3xl m-3  font-bold">Login</h1>
                    <img className="w-[100px] mb-4  mx-auto" src="notieraLogoBG1.png" alt="" />

                    <div className=" text-center">
                    <label className="text-xs"  htmlFor="" >Username</label><br />
                    <input  onChange={(e)=>Setusername(e.target.value)}   type="text" className="border outline-green-300 mb-1 w-[300px] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <br />
                    <label className="text-xs"  htmlFor="">Password</label><br />
                    <input  onChange={(e)=>Setpassword(e.target.value)}  type="password" className="border outline-green-300 mb-1 w-[300px] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <br />
                    <button onClick={handleLogin} className="m-2 bg-green-300    p-3 w-[150px] cursor-pointer hover:bg-green-500 active:bg-gray-800 active:text-white" >Login</button><br />
                    </div>

                    <button onClick={()=>navigate('/register')} className="text-sm my-2 text-blue-800 underline hover:text-blue-400 cursor-pointer ">Not Registered Yet? Click Here</button>






                </div>

            </div>
        </>
    )
}