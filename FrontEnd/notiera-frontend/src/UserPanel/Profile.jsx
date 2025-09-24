import React from "react";
import { Sidebar } from "./Sidebar";

export function Profile() {

    return (

        <>
            <div className=" h-screen bg-gray-100 flex ">
                {/* For SIdebar */}

                <div className=" border-blue-800 h-screen">
                    <Sidebar />
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
                        <div className= " p-2 bg-white  md:w-[400px] md:h-fit md:p-3 overflow-y-auto md:m-2  md:border md:border-gray-300">
                            <img src="notieraLogoBG1.png" className=" h-[150px] mx-auto mt-5" alt="" />
                            <h1 className="text-xl mb-3 font-semibold text-gray-800 ">Profile</h1>
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
                            <button className="p-2 px-4 bg-green-400 rounded rounded-md"><i class="bi bi-sticky-fill"></i> &nbsp;Save</button>











                        </div>
                        </div>






                    </>
                </div>



            </div>



        </>
    )
}