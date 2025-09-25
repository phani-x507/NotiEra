import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { Popup } from "./popUp";

export function Profile() {
    const [usersData, SetusersData] = useState([]);
    const [fullname, SetfullName] = useState('');
    const [password, SetPassword] = useState('');
    const [email, Setemail] = useState('');
    const [IsEmail, SetIsEmail] = useState(true);
    const [mobile, Setmobile] = useState('');
    const [IsMobile, SetIsMobile] = useState(true);
    
    const [isOpen, SetIsOpen] = useState(false);
    const [resData, SetresData] = useState('');


    useEffect(() => {

        const getDetails = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:8080/userDetails',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            SetusersData(res.data.data)

            SetfullName(res.data.data.fullname);
            SetPassword(res.data.data.password);
            Setemail(res.data.data.email);
            Setmobile(res.data.data.mobile);

        }

        getDetails();




    }, [])



    const UpdateProfile = async () => {
     if(IsEmail && IsMobile){
        const token = localStorage.getItem('token');
        const res = await axios.post("http://localhost:8080/updateUser",
            { fullname, email, mobile, password }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        )
        if (res.status == 200) {
            SetresData('Successfully Updated')
            SetIsOpen(true)
        } else {
            SetresData('Error Occurred')
            SetIsOpen(true)
        }
        }else{
            SetresData('Please Enter Details Correctly')
            SetIsOpen(true)
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

    const validateMobile = (e) => {
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
            <div className=" h-screen bg-gray-100 flex ">
                {/* For SIdebar */}

                <div className=" border-blue-800 h-screen">
                    <Sidebar val={4} />
                </div>

                <div className=" border-blue-700 flex-auto">
                    <>
                        {/* Search TopBar */}
                        <div className=" border border-gray-200 h-[70px] w-full flex bg-white flex-row items-center px-2 ">
                            <i className="" class="bi bi-binoculars-fill"></i>&nbsp;&nbsp;
                            <input type="text" onChange={(e) => SetText(e.target.value)} className="border outline-gray-200 w-[200px] bg-gray-100 border-gray-200 h-[50px] p-3 rounded" placeholder="Enter The Title Of Note" name="" id="" />
                            <button><i class="bi bi-patch-plus-fill mx-3 text-xl text-green-500"></i></button>
                        </div>
                        <div className="flex flex-col h-[calc(100%-70px)] ">
                            <div className=" p-2 bg-white  md:w-[400px] md:h-fit md:p-3 overflow-y-auto md:m-2  md:border md:border-gray-300">
                                <img src="notieraLogoBG1.png" className=" h-[150px] mx-auto mt-5" alt="" />
                                <h1 className="text-xl mb-3 font-semibold text-gray-800 ">Profile</h1>
                                <label htmlFor="">Full Name</label><br />
                                <input type="text" value={fullname} onChange={(e) => SetfullName(e.target.value)} className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                                <br />
                                <label htmlFor="" >Username</label><br />
                                <p className="border mb-2 w-[90%] p-2 rounded-md border-gray-400">{usersData.username}</p>

                                <label htmlFor="">Password</label><br />
                                <input value={password} type="password" onChange={(e) => SetPassword(e.target.value)} className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                                <br />
                                <label htmlFor="">Email</label><br />
                                <input value={email} type="email" onChange={handleEmail} className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                                <p className={`text-xs ${IsEmail ? 'text-green-800' : 'text-red-800'}`}>{IsEmail ? 'Valid Email' : 'Please Enter Valid Email'}</p>

                                <label htmlFor="">Mobile Number</label><br />
                                <input value={mobile} type="number" onChange={validateMobile} className="border mb-2 w-[90%] p-2 rounded-md border-gray-400" />
                                <p className={`text-xs mb-2 ${IsMobile ? 'text-green-800' : 'text-red-800'}`}>{IsMobile ? 'Valid Mobile No' : 'Please Enter Valid Mobile No'}</p>

                                <button onClick={UpdateProfile} className="p-2 px-4 bg-green-400 rounded rounded-md"><i class="bi bi-sticky-fill"></i> &nbsp;Save</button>











                            </div>
                        </div>






                    </>
                </div>



            </div>

            <Popup isOpen={isOpen} onClose={() => SetIsOpen(false)} data={resData} />


        </>
    )
}