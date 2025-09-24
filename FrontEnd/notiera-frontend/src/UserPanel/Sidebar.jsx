import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function Sidebar({ val }) {
    const [userData, SetUserData] = useState([]);
    const [logoutRes, SetLogoutRes] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const getDetails = async () => {
            const token = localStorage.getItem('token');
            const res = await axios.get('http://localhost:8080/userDetails',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            SetUserData(res.data.data)
        }
        getDetails();
    }, [])

    const logout = async () => {
        const token = localStorage.getItem('token');
        const res = await axios.post('http://localhost:8080/logout',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

        if (res.status == 200) {
            localStorage.removeItem('token');
            navigate('/');
        } else {
            SetLogoutRes('ERROR LOGGING OUT');
        }

    }

    return (
        <>
            <div className="w-full h-full bg-white md:min-w-[200px]  lg:min-w-[230px] border border-gray-200">
                <img className=" w-[70px] md:w-[150px] mt-3 mx-auto" src="notieraLogoBG1.png" alt="" />
                <h3 className=" text p-2 hidden md:block font-semibold text-gray-800 my-4 -mb-2 md:w-[150px] ">{userData.fullname}</h3>
                <div className="flex mt-4 p-2 flex-col ">
                    <button onClick={() => navigate('/dashboard')} className={` w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800  cursor-pointer p-3 ${val == 1 ? 'bg-blue-100 text-blue-800' : ''}  `}><i class="bi bi-house-fill"></i> <span className="hidden md:inline">Dashboard</span></button>
                    <button onClick={() => navigate('/create')} className={` w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800  cursor-pointer p-3 ${val == 2 ? 'bg-blue-100 text-blue-800' : ''}  `}><i class="bi bi-patch-plus-fill"></i> <span className="hidden md:inline">Create Notes</span></button>
                    <button className={` w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800  cursor-pointer p-3 ${val == 3 ? 'bg-blue-100 text-blue-800' : ''}  `}><i class="bi bi-pen-fill"></i> <span className="hidden md:inline">Manage Notes</span></button>
                    <button onClick={() => navigate('/profile')} className={` w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800  cursor-pointer p-3 ${val == 4 ? 'bg-blue-100 text-blue-800' : ''}  `}><i class="bi bi-person-fill"></i> <span className="hidden md:inline">Profile</span></button>
                    <button onClick={logout} className={` w-full  lg:my-2  text-left text-xl sm:text-sm  rounded-lg hover:bg-blue-100 hover:text-blue-800  cursor-pointer p-3 ${val == 5 ? 'bg-blue-100 text-blue-800' : ''}  `}><i class="bi bi-door-closed-fill"></i> <span className="hidden md:inline">Logout</span></button>
                    <p>{logoutRes}</p>


                </div>




            </div>
        </>
    )
}