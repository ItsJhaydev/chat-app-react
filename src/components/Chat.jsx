import React from "react";

import Camera from "../img/camera.png"
import Add from "../img/AddUser.png"
import More from "../img/moreIcon.png"
import Messages from "./Messages";
import Input from "./Input";

const style = {
    chat: `w-full bg-gray-400`,
    chatInfo: `flex items-center justify-between h-[50px] bg-gray-800 px-4`,
    span: `text-white`,
    chatIcons: `flex gap-[10px]`,
    icons: "w-[25px] h-[25px] rounded-full"
}

const Chat = () => {
    return (
        <div className={style.chat}>
            <div className={style.chatInfo}>
                <span className={style.span}>Deiniel Mendoza</span>
                <div className={style.chatIcons}>
                    <img className={style.icons} src={Camera} alt="" />
                    <img className={style.icons} src={Add} alt="" />
                    <img className={style.icons} src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat;