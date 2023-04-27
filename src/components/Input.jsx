import React from "react";

import FileUpload from "../img/uploadIcon.png"
import ImageUpload from "../img/imageUpload.png"

const style = {
    input: `h-[60px] bg-gray-400 p-[10px] flex items-center justify-between py-4`,
    messageInput: `w-[70%] border-none outline-none px-4 py-2 bg-gray-100`,
    send: `flex items-center gap-[10px]`,
    label: `flex gap-[10px] mr-6`,
    icons: `w-[25px] h-[25px] cursor-pointer`,
    button: `px-6 py-2 bg-gray-700`
}

const Input = () => {
    return (
        <div className={style.input}>
            <input className={style.messageInput} type="text" placeholder="Message" />
            <div className={style.send}>
                <img src="" alt="" />
                <input className="file" style={{display: "none"}} id="file"/>
                <label className={style.label} htmlFor="file">
                    <img className={style.icons} src={FileUpload} alt="" />
                    <img className={style.icons} src={ImageUpload} alt="" />
                </label>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )
}

export default Input;