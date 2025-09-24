import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export function Register() {
    const navigate = useNavigate();
    const [fullname, Setfullname] = useState('');
    const [username, Setusername] = useState('');
    const [password, Setpassword] = useState('');
    const [email, Setemail] = useState('');
    const [mobile, Setmobile] = useState('');
    const [response,SetResponse] = useState('')

    const register = async() =>{
        const res = await axios.post("http://localhost:8080/register",{
            fullname,username,password,email,mobile
        });

        if (res.status == 201){
            SetResponse(res.data.msg);
        }else if(res.status == 202){
            SetResponse(res.data.msg);
        }

    } 

    return (
        <>
        
            <div className="border gradientBg h-screen sm:h-screen   mx-auto flex flex-wrap flex-col justify-start sm:justify-center items-center">

                <div className="container border  bg-white rounded md:p-5 rounded-md border h-screen sm:h-fit border-gray-800 customShadow1 max-w-[500px]  p-3">
                    <p className="text-sm text-red-400 my-1">{response}</p>
                    <h1 className="text-3xl m-3  font-bold">Register</h1>
                    <img className="w-[100px] mb-4  mx-auto" src="notieraLogoBG1.png" alt="" />
                    <label className="text-xs" htmlFor="">Full Name</label><br />
                    <input onChange={(e)=>Setfullname(e.target.value)} type="text" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2 rounded-md border-gray-400" />
                    <br />
                    <label className="text-xs"  htmlFor="" >Username</label><br />
                    <input  onChange={(e)=>Setusername(e.target.value)}   type="text" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <br />
                    <label className="text-xs"  htmlFor="">Password</label><br />
                    <input  onChange={(e)=>Setpassword(e.target.value)}  type="password" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <br />
                    <label className="text-xs"  htmlFor="">Email</label><br />
                    <input  onChange={(e)=>Setemail(e.target.value)}  type="email" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />

                    <br />
                    <label className="text-xs"  htmlFor="">Mobile Number</label><br />
                    <input  onChange={(e)=>Setmobile(e.target.value)}  type="number" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <br />
                    <button onClick={register} className="m-2 bg-white border border-gray-800 p-3 w-[150px] cursor-pointer hover:bg-gray-400 active:bg-gray-800 active:text-white" >Register</button><br />

                    <button onClick={()=>navigate('/')} className="text-sm my-2 text-blue-800 underline hover:text-blue-400 cursor-pointer ">Already Registered? Click Here to Login</button>







                </div>

            </div>
        </>
    )
}