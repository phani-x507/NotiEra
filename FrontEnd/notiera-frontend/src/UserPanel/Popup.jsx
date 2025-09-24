import React from "react";

export function Popup({ isOpen, onClose, data }) {
    if (!isOpen) {
        return null;
    }
    return (
        <div onClick={onClose} className=" PopupBox p-3 bg-red-100 flex ">
            <div className="bg-white flex p-2 w-[80%] sm:w-[500px]">
             <button onClick={onClose} className="mx-2 text-red-500 cursor-pointer hover:text-red-800" ><i class="bi bi-x-circle-fill"></i></button>
             <h1 className="test-3xl text-green-800">{data}</h1>
             </div>
        </div>

    )
}