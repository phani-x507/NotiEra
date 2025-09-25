import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export function Register() {
    const navigate = useNavigate();
    const [fullname, Setfullname] = useState('');
    const [username, Setusername] = useState('');
    const [IsUsernameValid,SetIsUsernameValid] = useState(false);
    const [password, Setpassword] = useState('');
    const [IsPassword, SetIsPassword] = useState(false);
    const [email, Setemail] = useState('');
    const [IsEmail, SetIsEmail] = useState(false);
    const [mobile, Setmobile] = useState('');
    const [IsMobile, SetIsMobile] = useState(false);

    const [response, SetResponse] = useState('')

    const register = async () => {
        if(IsUsernameValid && IsEmail && IsMobile){
        const res = await axios.post("http://localhost:8080/register", {
            fullname, username, password, email, mobile
        });

        if (res.status == 201) {
            SetResponse(res.data.msg);
        } else if (res.status == 202) {
            SetResponse(res.data.msg);
        }

    }
    }

    const validateUsername = (e) => {
        const value = e.target.value;
        Setusername(value);
        if(value.indexOf(' ') != -1 || value.length<8){
            SetIsUsernameValid(false)
        }else{
            SetIsUsernameValid(true)
        }
    }

        const validatePassword = (e) => {
        const value = e.target.value;
        Setpassword(value);
        if(value.length<8){
            SetIsPassword(false)
        }else{
            SetIsPassword(true)
        }
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmail = (e) => {
        Setemail(e.target.value)
        if (validateEmail(e.target.value)) {
            SetIsEmail(true)
        } else {
            SetIsEmail(false)
        }
    };

    const handleMobile = (e) => {
        Setmobile(e.target.value);
        const mobile = e.target.value;
        console.log(!isNaN(mobile))
        if (mobile.length != 10 && !isNaN(parseInt(mobile))) {
            SetIsMobile(false)
        } else {
            SetIsMobile(true)
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
                    <input onChange={(e) => Setfullname(e.target.value)} type="text" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2 rounded-md border-gray-400" />
                    <br />
                    <label className="text-xs" htmlFor="" >Username</label><br />
                    <input onChange={validateUsername} type="text" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />

                     <p className={`text-[10px] ${IsUsernameValid ? 'text-green-800' : 'text-red-800'}`}>{IsUsernameValid ? 'Valid Username' : 'Username should have Atleast 8 letters and no Spaces'}</p>
                    <label className="text-xs" htmlFor="">Password</label><br />
                    <input onChange={validatePassword} type="password" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <p className={`text-[10px] ${IsPassword ? 'text-green-800' : 'text-red-800'}`}>{IsPassword ? 'Valid Password' : 'Password Should have atleast 8 Characters'}</p>

                    <label className="text-xs" htmlFor="">Email</label><br />
                    <input onChange={handleEmail} type="email" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <p className={`text-[10px] ${IsEmail ? 'text-green-800' : 'text-red-800'}`}>{IsEmail ? 'Valid Email' : 'Email should consist @domain.com'}</p>

                    <label className="text-xs" htmlFor="">Mobile Number</label><br />
                    <input onChange={handleMobile} type="number" className="border mb-1 w-[90%] p-2 sm:text-xs sm:p-2  rounded-md border-gray-400" />
                    <p className={`text-[10px] ${IsMobile ? 'text-green-800' : 'text-red-800'}`}>{IsMobile ? 'Valid Number' : 'Mobile must consits of 10 digits only Numbers'}</p>
                    <br />
                    <button onClick={register} className="m-2 bg-white border border-gray-400 p-3 w-[150px] cursor-pointer hover:bg-green-300 hover:border-green-300 active:bg-gray-800 active:text-white" >Register</button><br />

                    <button onClick={() => navigate('/')} className="text-sm my-2 text-blue-800 underline hover:text-blue-400 cursor-pointer ">Already Registered? Click Here to Login</button>







                </div>

            </div>
        </>
    )
}